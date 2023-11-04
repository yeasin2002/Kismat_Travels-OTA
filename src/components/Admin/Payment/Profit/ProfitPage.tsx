import React, { SVGProps } from "react";
import Status from "./Status";

const ProfitPage = () => {
  return (
    <div className="relative w-full p-1">
      <div className="rounded-md bg-slate-200 p-2 shadow-inner">
        <div className="flex max-w-[200px] items-center justify-center rounded-md bg-white px-3 py-1 shadow-sm">
          <span className="pr-2 text-xl">
            <MdiChartBellCurveCumulative />
          </span>
          Website Sell Profit
        </div>
        <div className="grid w-full grid-cols-4 gap-2">
          <Status name="Ticket Sell to User" data="10" />
          <Status name="Ticket Sell to Agent" data="10" />
        </div>
      </div>
    </div>
  );
};

export default ProfitPage;

export function MdiChartBellCurveCumulative(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4 19v1h18v2H2V2h2v15c3 0 6-2 8.1-5.6c3-5 6.3-7.4 9.9-7.4v2c-2.8 0-5.5 2.1-8.1 6.5C11.3 16.6 7.7 19 4 19Z"
      ></path>
    </svg>
  );
}
