import React, { SVGProps } from "react";
import Status from "./Status";
import EditProfit from "./EditProfit";
import { useGetProfit } from "$hooks/useGetProfit";

const ProfitPage = () => {
  const { data, Reload, error, isLoading } = useGetProfit();
  if (error) {
    console.log(error);
  }
  return (
    <div className="relative w-full p-1">
      <div className="rounded-md bg-slate-200 p-2 shadow-inner">
        <div className="flex max-w-[200px] items-center justify-center rounded-md bg-white px-3 py-1 shadow-sm">
          <span className="pr-2 text-xl">
            <MdiChartBellCurveCumulative />
          </span>
          Website Sell Profit
        </div>
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <Status
            name="Sell Profit"
            data={isLoading ? "Loading.." : data ? data.user_profit : "no data"}
            Update={
              <EditProfit
                id={data?.id}
                reload={Reload}
                FOR="User"
                Icon={Edit}
                presentData={data ? data.user_profit : "0"}
              />
            }
          />

          <Status
            name="Agent Profit"
            data={isLoading ? "Loading.." : data ? data.agent_profit : "no data"}
            Update={
              <EditProfit
                id={data?.id}
                reload={Reload}
                FOR="Agent"
                Icon={Edit}
                presentData={data ? data.agent_profit : "0"}
              />
            }
          />
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
function Edit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"
          opacity=".5"
        ></path>
        <path d="m17.3 2.806l-.648.65l-5.965 5.964c-.404.404-.606.606-.78.829c-.205.262-.38.547-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9l-.374 1.123a.742.742 0 0 0 .94.939l1.122-.374l1.735-.579c.542-.18.813-.27 1.068-.392c.301-.144.586-.32.848-.524c.223-.174.425-.376.83-.78l5.964-5.965l.649-.649A2.753 2.753 0 0 0 17.3 2.806Z"></path>
        <path
          d="M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588L8.413 13.9"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
}
