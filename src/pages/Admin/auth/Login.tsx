import { Input, LoginAndSingInWrapper } from "$components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button } from "shadcn/components/ui/button";
import axios from "axios";
import cookie from "js-cookie";

interface FormInputs {
  email: string;
  password: string;
}

// http://localhost:5000/api/v1/admins/login

export default function LogIn() {
  const { register, formState, handleSubmit } = useForm<FormInputs>();

  const SendLogin = async (e: any) => {
    try {
      const resServer = await axios.post("http://localhost:5000/api/v1/admins/login", {
        email: e.email,
        password: e.password,
      });
      cookie.set("key_ad", resServer.data.jwt);
      cookie.set("value_ad", resServer.data.session);
    } catch (error) {
      console.log("🚀 ~ file: Login.tsx:22 ~ SendLogin ~ error:", error);
    }
  };
  return (
    <LoginAndSingInWrapper>
      <div className="space-y-4">
        <div className=" flex items-center justify-between">
          <span className="w-1/5 border-b  lg:w-1/4"></span>

          <a href="#" className="text-center text-xs uppercase text-gray-500  hover:underline">
            Login With Your Admin Email and Password
          </a>

          <span className="w-1/5 border-b  lg:w-1/4"></span>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(SendLogin)}>
          <Input
            register={register("email", {
              required: { value: true, message: "Email is required!" },
              pattern: { value: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi, message: "Email is not valid!" },
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

          <Button>Login</Button>
        </form>

        <div className=" flex items-center justify-between">
          <span className="w-1/5 border-b  md:w-1/4"></span>

          <Link href="/register" className="text-xs uppercase text-gray-500  hover:underline">
            forget password
          </Link>
          <span className="w-1/5 border-b  md:w-1/4"></span>
        </div>
      </div>
    </LoginAndSingInWrapper>
  );
}
