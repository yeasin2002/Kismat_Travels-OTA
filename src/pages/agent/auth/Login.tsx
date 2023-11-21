import { Input, LoginAndSingInWrapper } from "$components";
import axios from "axios";
import cookie from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { SVGProps, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button } from "shadcn/components/ui/button";

interface FormInputs {
  email: string;
  password: string;
}

// http://localhost:5000/api/v1/admins/login

export default function LogIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, formState, handleSubmit } = useForm<FormInputs>();

  const SendLogin = async (e: any) => {
    if (loading) {
      return;
    }
    setLoading(true);
    setError("");
    try {
      const resServer = await axios.post("http://localhost:5000/api/v1/admins/login", {
        email: e.email,
        password: e.password,
      });
      cookie.set("key_ad", resServer.data.jwt);
      cookie.set("value_ad", resServer.data.session);
      router.push("/Admin/dashboard/");
    } catch (error: any) {
      setLoading(false);
      setError(error?.response?.data?.message);
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
        {error && (
          <p className="flex items-center justify-start text-red-600">
            <span className="animate-ping pl-3 pr-3 text-2xl">
              <FluentShieldError16Regular />
            </span>{" "}
            {error}
          </p>
        )}

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

          <Button className={`${loading ? "cursor-wait bg-gray-800" : "cursor-pointer"}`}>
            {loading ? (
              <>
                <Loading className="pr-3 text-4xl" /> Wait Please{" "}
              </>
            ) : (
              "Login"
            )}
          </Button>
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

export function Loading(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g>
        <circle cx="12" cy="2.5" r="1.5" fill="currentColor" opacity=".14"></circle>
        <circle cx="16.75" cy="3.77" r="1.5" fill="currentColor" opacity=".29"></circle>
        <circle cx="20.23" cy="7.25" r="1.5" fill="currentColor" opacity=".43"></circle>
        <circle cx="21.5" cy="12" r="1.5" fill="currentColor" opacity=".57"></circle>
        <circle cx="20.23" cy="16.75" r="1.5" fill="currentColor" opacity=".71"></circle>
        <circle cx="16.75" cy="20.23" r="1.5" fill="currentColor" opacity=".86"></circle>
        <circle cx="12" cy="21.5" r="1.5" fill="currentColor"></circle>
        <animateTransform
          attributeName="transform"
          calcMode="discrete"
          dur="1s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
        ></animateTransform>
      </g>
    </svg>
  );
}

export function FluentShieldError16Regular(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8.355 2.147a.5.5 0 0 0-.708 0C6.404 3.388 5.03 4 3.5 4a.5.5 0 0 0-.5.5v3.001c0 3.219 1.641 5.407 4.842 6.473a.499.499 0 0 0 .316 0C11.358 12.908 13 10.72 13 7.501V4.5a.5.5 0 0 0-.5-.5c-1.531 0-2.905-.61-4.145-1.853ZM4 4.98c1.48-.112 2.814-.726 4-1.792c1.185 1.066 2.52 1.68 4 1.792V7.5c0 1.434-.363 2.564-1.021 3.444c-.638.852-1.609 1.543-2.979 2.027c-1.37-.483-2.341-1.175-2.979-2.027C4.363 10.065 4 8.935 4 7.501v-2.52Zm4.5.519a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm.25 5.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"
      ></path>
    </svg>
  );
}
