import takeOff from "$assets/cover/takeOff.jpg";
import { Input, LoginAndSingInWrapper } from "$components";
import { useAuth } from "$hooks";
import { useForm } from "react-hook-form";
import { Button } from "shadcn/components/ui/button";

interface FormInputs {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const { register, formState, handleSubmit } = useForm<FormInputs>();
  const { signUp } = useAuth();

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
