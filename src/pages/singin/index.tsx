import { Input, LoginAndSingInWrapper } from "$components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button } from "shadcn/components/ui/button";

interface FormInputs {
  email: string;
  password: string;
}

export default function LogIn() {
  const { register, formState, handleSubmit } = useForm<FormInputs>();

  return (
    <LoginAndSingInWrapper>
      <div className="space-y-4">
        <button
          className="global-btn flex w-full transform items-center justify-center  rounded-lg  border bg-gray-50 py-2 
        text-gray-800 transition-colors duration-300 hover:bg-gray-200"
        >
          <div className="px-4 py-2">
            <FcGoogle />
          </div>
          <span className="flex-1">Log in with Google</span>
        </button>

        <div className=" flex items-center justify-between">
          <span className="w-1/5 border-b  lg:w-1/4"></span>

          <a href="#" className="text-center text-xs uppercase text-gray-500  hover:underline">
            or login with email
          </a>

          <span className="w-1/5 border-b  lg:w-1/4"></span>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(console.log)}>
          <Input
            register={register("email", {
              required: { value: true, message: "Email is required!" },
              pattern: { value: /$a/g, message: "Email is not valid!" },
            })}
            label="Email"
            placeholder="example@gmail.com"
            error={formState.errors.email}
          />

          <Input
            register={register("password", {
              required: { value: true, message: "Password is required!" },
              minLength: { value: 6, message: "Password must've 6 character long!" },
            })}
            label="Password"
            placeholder="example@gmail.com"
            error={formState.errors.password}
          />

          <Button>SingIn</Button>
        </form>

        <div className=" flex items-center justify-between">
          <span className="w-1/5 border-b  md:w-1/4"></span>

          <Link href="/register" className="text-xs uppercase text-gray-500  hover:underline">
            or sign up
          </Link>
          <span className="w-1/5 border-b  md:w-1/4"></span>
        </div>
      </div>
    </LoginAndSingInWrapper>
  );
}
