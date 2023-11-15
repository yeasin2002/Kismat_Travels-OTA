import React, { SVGProps, useState } from "react";
import EditStatus from "./EditStatus";
import EditPC from "./EditPC";
import { usePaymentGateway } from "$hooks/admin/usePaymetGateway";

const Gateway = () => {
  const { data, error, isLoading, Reload } = usePaymentGateway();
  const [show, SetShow] = useState(false);

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
              {!isLoading && data?.id && <EditStatus Icon={Edit} id={data?.id} reloadLoad={Reload} />}
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
              <h1 className="flex items-center font-bold">
                Gateway Credentials{" "}
                <span
                  onClick={() => {
                    SetShow((e) => !e);
                  }}
                  className="ml-2 cursor-pointer text-lg"
                >
                  {show ? <PhEyeSlashDuotone /> : <PhEyeDuotone />}
                </span>
              </h1>
              {!isLoading && data?.id && <EditPC Icon={Edit} id={data?.id} reloadLoad={Reload} />}
              {/* <EditPC Icon={Edit} /> */}
            </div>
            {!isLoading && (
              <div className="relative mt-2 w-full text-sm">
                <p className="flex">
                  {" "}
                  <span className="font-bold">📃 Merchant ID: </span>
                  <div className={`${!show && "blur-[2px]"} pl-2`}>{data?.merchant_id}</div>
                </p>
                <p className="flex">
                  {" "}
                  <span className="font-bold">📃 Store ID: </span>
                  <div className={`${!show && "blur-[2px]"} pl-2`}>{data?.store_id}</div>
                </p>
                <p className="flex">
                  {" "}
                  <span className="font-bold">📃 Signature Key: </span>
                  <div className={`${!show && "blur-[2px]"} pl-2`}>{data?.signature_key}</div>
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

export function PhEyeDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <g fill="currentColor">
        <path
          d="M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72Zm0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z"
          opacity=".2"
        ></path>
        <path d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5ZM128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64Zm0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"></path>
      </g>
    </svg>
  );
}

export function PhEyeSlashDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <g fill="currentColor">
        <path
          d="M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72Zm0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z"
          opacity=".2"
        ></path>
        <path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.11 127.11 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85ZM128 192c-30.78 0-57.67-11.19-79.93-33.25A133.16 133.16 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192Zm6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6.39 6.39 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57Zm113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.77 132.77 0 0 0 27.8-35.14a133.15 133.15 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.37 118.37 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z"></path>
      </g>
    </svg>
  );
}
