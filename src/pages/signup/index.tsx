import takeOff from "$assets/cover/takeOff.jpg";
import { Input, LoginAndSingInWrapper } from "$components";
import { useAuth } from "$hooks";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Button } from "shadcn/components/ui/button";
import { useToast } from "shadcn/components/ui/use-toast";

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

  async function signin(formData: FormInputs) {
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
        <div className=" flex items-center justify-between">
          <span className="w-1/5 border-b  lg:w-1/4"></span>

          <a href="#" className="text-center text-xs uppercase text-gray-500  hover:underline">
            Registers
          </a>

          <span className="w-1/5 border-b  lg:w-1/4"></span>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(async (data) => await signUp(data))}>
          <Input
            label="name"
            placeholder="Write your name... "
            error={formState.errors.name}
            register={register("name", {
              required: { value: true, message: "name is required!" },
            })}
          />

          <Input
            label="Email"
            placeholder="Write your email..."
            error={formState.errors.email}
            register={register("email", {
              required: { value: true, message: "Email is required!" },
            })}
          />

          <Input
            label="Password"
            placeholder="********"
            error={formState.errors.password}
            register={register("password", {
              required: { value: true, message: "Password is required!" },
            })}
          />

          <Button>Register</Button>
        </form>

        <div className=" flex items-center justify-between">
          <span className="w-1/5 border-b  md:w-1/4"></span>

          <a href="#" className="text-xs uppercase text-gray-500  hover:underline">
            or Log In
          </a>
          <span className="w-1/5 border-b  md:w-1/4"></span>
        </div>
      </div>
    </LoginAndSingInWrapper>
  );
}
