import React, { SVGProps } from "react";
import Image from "next/image";
import LOGO from "../../../assets/display/logo.png";
import Link from "next/link";
import Routes from "$/Routes/admin.router";
import { Button } from "shadcn/components/ui/button";

const Aside = ({
  state,
  setSidebar,
}: {
  state: Boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="relative h-full w-full bg-white">
      <div
        onClick={() => {
          setSidebar((e) => !e);
        }}
        className="z-[800] flex w-full flex-col items-center justify-center border-b-2 border-gray-300 pb-5"
      >
        <Image priority={true} src={LOGO} alt="logo" width={100} height={100} />
        {state ? <h1 className="text-xl font-bold transition-all duration-700">Dashboard</h1> : ""}
      </div>
      {/* list of links  */}
      <div className="relative w-full">
        {/* bg-blue-300 */}
        {Routes.map((route, index) => {
          return (
            <Button
              title={route.label}
              key={index}
              variant="outline"
              className={`w-full ${state ? "justify-start" : "justify-center"}`}
              asChild
            >
              <Link href={`/Admin/${route.path}`}>
                {" "}
                {route.Icon} {state && route.label}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Aside;
