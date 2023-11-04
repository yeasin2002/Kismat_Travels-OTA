import { Input, LoginAndSingInWrapper } from "$components";
import { useAuth } from "$hooks";
import { SpinnerIcon } from "$icons";
import { emailRegex } from "$lib";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button, buttonVariants } from "shadcn/components/ui/button";
import { useToast } from "shadcn/components/ui/use-toast";
import { cn } from "shadcn/lib/utils";

interface FormInputs {
  email: string;
  password: string;
}

export default function Signin() {
  const router = useRouter();
  const { register, formState, handleSubmit } = useForm<FormInputs>();
  const { toast } = useToast();
  const { signIn, googleAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  async function signin(formData: FormInputs) {
    const [_, error] = await signIn(formData);

    if (error) {
      return toast({
        variant: "destructive",
        title: "Incorrect email or password",
        duration: 1000 * 5,
      });
    }

    toast({
      title: "Signin was successful. You're in!",
      duration: 1000 * 5,
    });

    router.push(`/${router.query.callback || ""}`);
  }

  async function googleSignin(token: string) {
    setIsLoading(true);
    const [_, error] = await googleAuth({ token });
    setIsLoading(false);

    if (error) {
      return toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        duration: 1000 * 5,
      });
    }

    toast({
      title: "Signin was successful. You're in!",
      duration: 1000 * 5,
    });

    router.push(`/`);
  }

  useEffect(() => {
    const token = router.query["redirect-id"];
    if (typeof token === "string") {
      googleSignin(token);
    }
  }, [router]);

  return (
    <LoginAndSingInWrapper>
      <div className="space-y-4">
        <div className="stack isolate place-items-center">
          <hr className="-z-1 w-full" />
          <p className="bg-white px-12 text-center text-xs font-medium uppercase text-slate-500">Signin</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(signin)}>
          <Input
            label="Email *"
            error={formState.errors.email}
            disabled={formState.isSubmitting || isLoading}
            register={register("email", {
              required: { value: true, message: "Please provide a valid email address" },
              pattern: { value: emailRegex, message: "Invalid email address" },
            })}
          />

          <Input
            label="Password *"
            error={formState.errors.password}
            disabled={formState.isSubmitting || isLoading}
            register={register("password", {
              required: { value: true, message: "Please provide a valid password" },
              minLength: { value: 6, message: "Password should be at least 6 characters long" },
            })}
          />

          <Button disabled={formState.isSubmitting || isLoading} className="select-none gap-2 rounded">
            Signup {formState.isSubmitting && <SpinnerIcon className="text-lg" />}
          </Button>
        </form>

        <a
          href={process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.replace(/\/$/, "") + "/auth/google"}
          className={buttonVariants({ variant: "outline", className: "w-full select-none space-x-2 rounded py-4" })}
          style={{ pointerEvents: formState.isSubmitting || isLoading ? "none" : "auto" }}
        >
          <span>Signin with google</span>
          <FcGoogle className="text-base" />
        </a>

        <p className="flex items-center justify-center text-sm">
          Don't have account?
          <Link
            className={cn(buttonVariants({ variant: "link", className: "py h-auto px-[0.2rem] text-brandBlue-100" }))}
            href="/signup"
          >
            Signup
          </Link>
        </p>
      </div>
    </LoginAndSingInWrapper>
  );
}
