import takeOff from "$assets/cover/takeOff.jpg";
import { Input, LoginAndSingInWrapper } from "$components";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button } from "shadcn/components/ui/button";

interface FormInputs {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const { register, formState, handleSubmit } = useForm<FormInputs>();

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

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(console.log)}>
          <Input
            register={register("name", {
              required: { value: true, message: "name is required!" },
              minLength: { value: 20, message: "name must've 20 character long!" },
            })}
            label="name"
            placeholder="Write your name... "
            error={formState.errors.name}
          />
          <Input
            register={register("email", {
              required: { value: true, message: "Email is required!" },
              pattern: { value: /$a/g, message: "Email is not valid!" },
            })}
            label="Email"
            placeholder="Write your email..."
            error={formState.errors.email}
          />

          <Input
            register={register("password", {
              required: { value: true, message: "Password is required!" },
              minLength: { value: 6, message: "Password must've 6 character long!" },
            })}
            label="Password"
            placeholder="********"
            error={formState.errors.password}
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
