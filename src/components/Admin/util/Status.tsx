import React, { SVGProps } from "react";

const Status = ({ Title, Data, Icon }: { Title: string; Data: string | number; Icon: Function }) => {
  return (
    // <div className="relative flex w-full items-center justify-start gap-3 rounded-md bg-slate-200 p-2 shadow-inner sm:p-3 md:p-5">
    //   <div className="relative flex h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full bg-white shadow-md ring-2 ring-blue-400/10 sm:h-[3rem] sm:min-w-[3rem] md:h-16 md:min-w-[4rem]">

    //   </div>
    //   <div className="relative flex w-full flex-col items-start justify-center">

    //   </div>

    <div className="relative  mt-2 min-h-[70px] w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-slate-100 p-2 shadow-inner sm:min-h-[150px]">
      <div className="absolute -right-[4rem] -top-[4rem] h-[8rem] w-[8rem] rounded-full bg-slate-300"></div>
      <div className="absolute -right-[8rem] -top-[8rem] h-[16rem] w-[16rem] rounded-full bg-slate-400/50"></div>
      <div className="absolute bottom-0  right-2 z-10 rounded-full text-7xl  text-slate-50 sm:bottom-[-1rem] sm:left-[2rem] sm:right-0 sm:text-[120px] sm:text-slate-200">
        {/* @ts-ignore */}
        <Icon />
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <h1 className="text-sm font-bold sm:text-lg md:text-2xl">{Title}</h1>
      </div>
      <p className="relative z-10 mt-3 text-4xl font-bold  text-slate-700 sm:text-5xl md:text-6xl">
        {`${Data}`.padStart(3, "0")}
      </p>
    </div>
    // </div>
  );
};

export default Status;
