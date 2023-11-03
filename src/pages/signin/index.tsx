import { Input, LoginAndSingInWrapper } from "$components";
import { useAuth } from "$hooks";
import { GET } from "$lib";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button, buttonVariants } from "shadcn/components/ui/button";
import { useToast } from "shadcn/components/ui/use-toast";

interface FormInputs {
  email: string;
  password: string;
}

export default function Signin() {
  const router = useRouter();
  const { register, formState, handleSubmit } = useForm<FormInputs>();
  const { toast } = useToast();
  const { signIn, googleAuth } = useAuth();

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
    const [_, error] = await googleAuth({ token });

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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(signin)}>
          <Input
            label="Email *"
            error={formState.errors.email}
            register={register("email", {
              required: { value: true, message: "Email is required!" },
              pattern: { value: /a/g, message: "Email is not valid!" },
            })}
          />

          <Input
            label="Password *"
            error={formState.errors.password}
            register={register("password", {
              required: { value: true, message: "Password is required!" },
              minLength: { value: 6, message: "Password must've 6 character long!" },
            })}
          />

          <Button className="rounded py-4">Signin</Button>
        </form>

        <a
          href={process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.replace(/\/$/, "") + "/auth/google"}
          className={buttonVariants({ variant: "outline", className: "w-full space-x-2 rounded py-4" })}
        >
          <span>Signin with google</span>
          <FcGoogle className="text-base" />
        </a>

        <p className="flex items-center justify-center text-sm">
          Don't have account?
          <Link
            className={buttonVariants({ variant: "link", className: "py h-auto px-1 text-brandBlue-100" })}
            href="/signup"
          >
            Signup
          </Link>
        </p>
      </div>
    </LoginAndSingInWrapper>
  );
}
