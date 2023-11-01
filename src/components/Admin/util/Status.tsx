import React, { SVGProps } from "react";

const Status = () => {
  return (
    <div className="relative m-2 flex w-full justify-start gap-3 rounded-md bg-slate-200 p-5 shadow-lg">
      <div className="relative flex h-16 min-w-[4rem] items-center justify-center rounded-full bg-white ring-2 ring-blue-400/10">
        <IcBaselineAir className="text-4xl" />
      </div>
      <div className="relative flex w-full flex-col items-start justify-center">
        <h1 className="text-2xl font-bold">Title</h1>
        <p>$2000</p>
      </div>
    </div>
  );
};

export default Status;

export function IcBaselineAir(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"
      ></path>
    </svg>
  );
}
