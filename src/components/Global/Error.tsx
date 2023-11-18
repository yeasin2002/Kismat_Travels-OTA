import errorImg from "$assets/Illustrations/3D/alert.png";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ErrorProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ErrorDisplay: FC<ErrorProps> = ({ ...rest }) => {
  return (
    <div className="flex h-full  items-center justify-center text-6xl text-slate-300">
      <img src={errorImg.src} alt="Error" className="mx-auto aspect-square w-96" />
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="text-xl">Please try again later</p>
      </div>
    </div>
  );
};
