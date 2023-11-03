"use client";
import { Logo } from "$components/Global";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
interface LoginAndSingInWrapperProps {
  children: React.ReactNode;
  coverImg?: StaticImageData;
}

export const LoginAndSingInWrapper = ({ children, coverImg }: LoginAndSingInWrapperProps) => {
  const randomImageFromUnsplash = "https://source.unsplash.com/random?aeroplane";

  useEffect(() => {
    document.documentElement.classList.remove("[scrollbar-gutter:_stable]");
    return () => document.documentElement.classList.add("[scrollbar-gutter:_stable]");
  }, []);

  return (
    <section className="flex min-h-screen [scrollbar-gutter:_unset] [&>*]:flex-1">
      <div className="stack isolate hidden md:block">
        <img
          src={coverImg?.src || randomImageFromUnsplash}
          alt="cover"
          className="-z-1 h-full w-full object-cover object-center"
        />
      </div>
      <div className="my-auto flex h-full flex-col p-4 sm:p-8">
        <div className="mx-auto mb-10">
          <Logo className="z-10 w-32" />
        </div>

        {children}
      </div>
    </section>
  );
};
