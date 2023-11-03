import React, { SVGProps } from "react";

const Status = ({ Title, Data, Icon }: { Title: string; Data: string; Icon: Function }) => {
  return (
    <div className="relative m-2 flex w-full justify-start gap-3 rounded-md bg-slate-200 p-5 shadow-lg">
      <div className="relative flex h-16 min-w-[4rem] items-center justify-center rounded-full bg-white ring-2 ring-blue-400/10">
        {/* @ts-ignore */}
        <Icon className="text-4xl" />
      </div>
      <div className="relative flex w-full flex-col items-start justify-center">
        <h1 className="text-2xl font-bold">{Title}</h1>
        <p>{Data}</p>
      </div>
    </div>
  );
};

export default Status;
