import React, { SVGProps } from "react";
import { Button } from "shadcn/components/ui/button";
import EditProfit from "./EditProfit";

const Status = ({ name, data, Update }: { name: string; data: string; Update: React.ReactNode }) => {
  return (
    <div className="relative  mt-2 min-h-[150px] w-full overflow-hidden rounded-md bg-white p-2 shadow-inner">
      <div className="absolute -right-[4rem] -top-[4rem] h-[8rem] w-[8rem] rounded-full bg-slate-300"></div>
      <div className="absolute -right-[8rem] -top-[8rem] h-[16rem] w-[16rem] rounded-full bg-slate-400/50"></div>
      <div className="absolute bottom-[-2rem] left-[-2rem] h-[16rem] w-[16rem] rounded-full text-[250px] text-slate-100">
        %
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <h1>{name}</h1>
        <button className="p-1">{Update}</button>
      </div>
      <div className="relative z-10 mt-3 text-7xl font-bold text-slate-700">{data}%</div>
    </div>
  );
};

export default Status;
