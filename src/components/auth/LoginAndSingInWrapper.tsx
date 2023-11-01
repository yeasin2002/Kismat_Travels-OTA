"use client";
import { Logo } from "$components/Global";
import Image, { StaticImageData } from "next/image";
interface LoginAndSingInWrapperProps {
  children: React.ReactNode;
  coverImg?: StaticImageData;
}

export const LoginAndSingInWrapper = ({ children, coverImg }: LoginAndSingInWrapperProps) => {
  const randomImageFromUnsplash = "https://source.unsplash.com/random?airbus";

  return (
    <section className="grid h-screen grid-cols-1 px-10  md:grid-cols-2 md:px-0 ">
      <div className=" hidden h-screen md:block">
        <Image
          width={"1000"}
          height={"1000"}
          src={coverImg || randomImageFromUnsplash}
          alt="Cover"
          className="h-full w-full object-cover"
        />
      </div>
      {/* <>{children}</> */}

      <div className="flex h-full w-full flex-col justify-center px-6 py-8 md:px-8  ">
        <div className="mx-auto flex justify-center lg:my-10">
          <Logo className="w-28" />
        </div>

        {children}
      </div>
    </section>
  );
};
