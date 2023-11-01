import { Input, LoginAndSingInWrapper } from "$components";
import { useAuth } from "$hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button, buttonVariants } from "shadcn/components/ui/button";
import { useToast } from "shadcn/components/ui/use-toast";

interface FormInputs {
  email: string;
  password: string;
}

export default function Signin() {
  const { query } = useRouter();
  const { register, formState, handleSubmit } = useForm<FormInputs>();
  const { toast } = useToast();
  const { signIn } = useAuth();

  async function signin(formData: FormInputs) {
    console.log(query);
    const [data, error] = await signIn(formData);
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
  }

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

        <div>
          <Button className="w-full space-x-2 rounded py-4" variant="outline">
            <span>Signin with google</span>
            <FcGoogle className="text-base" />
          </Button>

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
      </div>
    </LoginAndSingInWrapper>
  );
}
