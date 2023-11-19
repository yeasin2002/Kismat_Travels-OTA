import Image from "next/image";
import React, { SVGProps } from "react";

import { $post } from "$/utils";
import Admin_secure from "$Secure/admin_secure";
import { UpdateUserProfile } from "$components/Admin/User";
import MainLayout from "$components/Admin/layout/MainLayout";
import { getImgSrc } from "$lib/getImgSrc";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { ImagePlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage, Label } from "shadcn/components/ui";
import { FileUpload } from "shadcn/components/ui/file-upload";
import { toast } from "sonner";
import Header from "./Header";

const index = (props: any) => {
  const { mutateAsync } = useMutation({
    mutationFn: ({ form }: { form: FormData }) => $post(`admins/photo-upload/${props.User.id}`, form),
    onError: () => toast.error("Something went wrong"),
    onSuccess: () => toast.success("Profile updated successfully"),
  });

  async function upload(File: File[]) {
    if (File.length === 0) return toast.error("Please select a file");
    const form = new FormData();
    form.append("avatar", File[0]);
    await mutateAsync({ form });
  }

  return (
    <MainLayout User={props.User}>
      <div className="relative w-full">
        <Header />
        <div className=" absolute top-0 flex w-full flex-col items-center justify-center pl-0 pt-20 md:mt-24 md:flex-row md:justify-start  md:pl-28 md:pt-32">
          <div
            className="
              relative
              isolate
              h-[150px]
              min-w-[150px]
              md:h-[200px] 
              md:min-w-[200px] 
              xl:h-[250px] 
              xl:min-w-[250px]"
          >
            <FileUpload onUpload={upload} className="stack isolate h-full w-full ring-0">
              <Label
                className="z-10 mb-2 ml-auto mr-2 mt-auto cursor-pointer rounded-full !bg-red-600 p-2 md:mb-4 md:mr-4 lg:mb-5 lg:mr-5"
                title="Change avatar"
              >
                <ImagePlus size={20} color="white" />
              </Label>
              <Avatar className="h-full w-full text-2xl ring-2 ring-blue-50">
                <AvatarImage
                  className="object-cover"
                  src={getImgSrc("admin", props.User.photo)}
                  alt={props.User.name}
                />
                <AvatarFallback className="bg-blue-600 font-bold text-white"> {props.User.name}</AvatarFallback>
              </Avatar>
            </FileUpload>
          </div>
          <div className="relative flex min-h-[100px] w-full justify-center md:justify-between md:pl-10 md:pt-6 ">
            {/* name */}
            <div className="relative text-center md:text-left">
              <h1 className="mt-3 text-2xl font-bold">{props.User.name}</h1>
              <p>{props.User.email}</p>
            </div>
            {/* setting button  */}
            <div className="absolute right-0 flex h-full items-center justify-center p-3 md:inline-block">
              <UpdateUserProfile />
            </div>
          </div>
        </div>
      </div>
      <div className="h-44"></div>
      <h1>nahid</h1>
    </MainLayout>
  );
};

export default index;

// // This gets called on every request
export async function getServerSideProps(ctx: any) {
  // Pass data to the page via props
  try {
    const User = await Admin_secure(ctx);
    return { props: { User: User } };
  } catch (error) {
    return {
      redirect: {
        destination: "/Admin/auth/Login", // Specify the destination route
        permanent: false, // Set to true for a permanent (301) redirect, or false for a temporary (302) redirect
      },
    };
  }
}

// icons
function Settings(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"></circle>
        <path
          d="M13.765 2.152C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.617 1.617 0 0 1-.79 1.353a1.617 1.617 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.466.807-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361c0 .558-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453c.466-.807.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.617 1.617 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008a1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
}
