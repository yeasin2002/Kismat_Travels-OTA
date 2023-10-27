import logoPng from "$assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import type { FunctionComponent, HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {}

export const Logo: FunctionComponent<LogoProps> = ({ ...rest }) => {
  return (
    <div className="aspect-square w-10" {...rest}>
      <Link href="/">
        <Image src={logoPng} alt="logo" className="object-contain object-center" />
      </Link>
    </div>
  );
};
