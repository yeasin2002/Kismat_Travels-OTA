import takeOff from "$assets/cover/takeOff.jpg";
import { Input, LoginAndSingInWrapper } from "$components";
import { useAuth } from "$hooks";
import { SpinnerIcon } from "$icons";
import { emailRegex } from "$lib";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Button, buttonVariants } from "shadcn/components/ui/button";
import { useToast } from "shadcn/components/ui/use-toast";
import { cn } from "shadcn/lib/utils";

interface FormInputs {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const router = useRouter();
  const { register, formState, handleSubmit } = useForm<FormInputs>();
  const { toast } = useToast();
  const { signUp } = useAuth();

  async function signup(formData: FormInputs) {
    const [_, error] = await signUp(formData);

    if (error) {
      return toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        duration: 1000 * 5,
      });
    }

    toast({
      title: "Signup was successful. You're in!",
      duration: 1000 * 5,
    });

    router.push(`/${router.query.callback || ""}`);
  }

  return (
    <LoginAndSingInWrapper coverImg={takeOff}>
      <div className="space-y-4">
        <div className="stack isolate place-items-center">
          <hr className="-z-1 w-full" />
          <p className="bg-white px-12 text-center text-xs font-medium uppercase text-slate-500">Signup</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(signup)}>
          <Input
            label="Name *"
            error={formState.errors.name}
            disabled={formState.isSubmitting}
            register={register("name", {
              required: { value: true, message: "Please provide your name" },
            })}
          />

          <Input
            label="Email *"
            error={formState.errors.email}
            disabled={formState.isSubmitting}
            register={register("email", {
              required: { value: true, message: "Please provide a valid email address" },
              pattern: { value: emailRegex, message: "Invalid email address" },
            })}
          />

          <Input
            label="Password *"
            type="password"
            error={formState.errors.password}
            disabled={formState.isSubmitting}
            register={register("password", {
              required: { value: true, message: "Please provide a valid password" },
              minLength: { value: 6, message: "Password should be at least 6 characters long" },
            })}
          />

          <Button disabled={formState.isSubmitting} className="select-none gap-2 rounded">
            Signup {formState.isSubmitting && <SpinnerIcon className="text-lg" />}
          </Button>
        </form>

        <p className="flex items-center justify-center text-sm">
          Already have a account?
          <Link
            className={cn(buttonVariants({ variant: "link", className: "py h-auto px-[0.2rem] text-brandBlue-100" }))}
            href="/signin"
          >
            Signin
          </Link>
        </p>
      </div>
    </LoginAndSingInWrapper>
  );
}
