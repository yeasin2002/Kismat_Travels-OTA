import React, { SVGProps } from "react";

const Status = ({ Title, Data, Icon }: { Title: string; Data: string; Icon: Function }) => {
  return (
    <div className="relative flex w-full items-center justify-start gap-3 rounded-md bg-slate-200 p-2 shadow-inner sm:p-3 md:p-5">
      <div className="relative flex h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full bg-white shadow-md ring-2 ring-blue-400/10 sm:h-[3rem] sm:min-w-[3rem] md:h-16 md:min-w-[4rem]">
        {/* @ts-ignore */}
        <Icon className="text-xl sm:text-2xl md:text-4xl " />
      </div>
      <div className="relative flex w-full flex-col items-start justify-center">
        <h1 className="text-sm font-bold sm:text-lg md:text-2xl">{Title}</h1>
        <p className="sm:text-md text-sm font-light md:text-lg">{Data}</p>
      </div>
    </div>
  );
};

export default Status;
