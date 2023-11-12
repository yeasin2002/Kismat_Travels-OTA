import React, { SVGProps } from "react";
import EditStatus from "./EditStatus";
import EditPC from "./EditPC";
import { usePaymentGateway } from "$hooks/admin/usePaymetGateway";

const Gateway = () => {
  const { data, error, isLoading } = usePaymentGateway();

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-md bg-slate-100 p-3 shadow-inner">
        {!isLoading && data?.status === "LIVE" && (
          <div className="animate-pulse rounded-md bg-white bg-gradient-to-l from-green-400 to-green-500 p-2 shadow-lg shadow-green-500 "></div>
        )}
        {!isLoading && data?.status === "SANDBOX" && (
          <div className="animate-pulse rounded-md bg-white bg-gradient-to-l from-yellow-400 to-yellow-500 p-2 shadow-lg shadow-yellow-500 "></div>
        )}
        {!isLoading && data?.status === "OFF" && (
          <div className="animate-pulse rounded-md bg-white bg-gradient-to-l from-red-400 to-red-500 p-2 shadow-lg shadow-red-500 "></div>
        )}

        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {/* Payment Gateway  */}
          <div className="relative w-full rounded-md bg-white p-3 shadow-sm">
            <div className="flex justify-between">
              <h1 className="font-bold">Payment Gateway</h1>
              <a href="https://www.aamarpay.com/" target="_blank">
                <SolarLinkBoldDuotone />
              </a>
            </div>
            <div className="relative w-full">
              <img
                src="https://www.aamarpay.com/images/logo/aamarpay_logo.png"
                alt="aamarpay"
                className="mx-auto w-8/12"
              />
            </div>
          </div>
          {/* Payment Status  */}
          <div className="relative w-full rounded-md bg-white p-3 shadow-sm">
            <div className="flex justify-between">
              <h1 className="font-bold">Gateway Status</h1>
              <EditStatus Icon={Edit} />
            </div>

            {isLoading && <p className="mt-3 text-4xl font-bold">Loading ..</p>}
            {!isLoading && data?.status === "LIVE" && <p className="mt-3 text-5xl font-bold">🟢Live</p>}
            {!isLoading && data?.status === "SANDBOX" && (
              <p className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
                <span className="animate-pulse">🟡</span> Sandbox
              </p>
            )}
            {!isLoading && data?.status === "OFF" && (
              <p className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
                <span className="animate-pulse">🔴</span> Off
              </p>
            )}
          </div>
          {/* Payment Store ID  */}
          <div className="relative col-span-1 w-full  rounded-md bg-white p-3 shadow-sm md:col-span-2">
            <div className="flex justify-between">
              <h1 className="font-bold">Gateway Credentials</h1>
              <EditPC Icon={Edit} />
            </div>
            {!isLoading && (
              <div className="relative mt-2 w-full text-sm">
                <p>
                  {" "}
                  <span className="font-bold">📃 Merchant ID: </span> {data?.merchant_id}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">📃 Store ID: </span> {data?.store_id}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">📃 Signature Key: </span> {data?.signature_key}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gateway;
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

export function SolarLinkBoldDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path d="M15.728 3.884c1.434-1.44 3.532-1.47 4.694-.304c1.164 1.168 1.132 3.28-.303 4.72l-2.424 2.433a.75.75 0 0 0 1.063 1.059l2.424-2.433c1.91-1.919 2.15-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.818 7.692c-1.912 1.919-2.152 4.982-.303 6.837a.75.75 0 1 0 1.062-1.058c-1.163-1.168-1.132-3.28.303-4.72l4.848-4.867Z"></path>
        <path
          d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.132 3.279-.303 4.72L8.27 20.116c-1.434 1.44-3.532 1.47-4.694.304c-1.163-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 1 0-1.062-1.059l-2.424 2.433C.906 16.56.666 19.623 2.515 21.48c1.85 1.858 4.907 1.615 6.819-.304l4.848-4.867c1.91-1.918 2.15-4.982.303-6.837Z"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
}
