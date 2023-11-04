import React, { SVGProps } from "react";
import AdminLayout from "$components/Admin/layout/MainLayout";
const index = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col justify-start p-2 md:flex-row md:justify-between">
        <h1 className="flex items-center gap-3 text-2xl">
          <span className="rounded-full bg-gray-100 p-3 shadow-inner ">
            <User />
          </span>{" "}
          Agent information
        </h1>
        <button className="my-3 w-40 rounded-md bg-slate-200  p-3 font-bold shadow-inner hover:bg-slate-400">
          Add new Agent
        </button>
      </div>
    </AdminLayout>
  );
};

export default index;
export function User(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="6" r="4"></circle>
        <path
          strokeLinecap="round"
          d="M19.997 18c.003-.164.003-.331.003-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"
        ></path>
      </g>
    </svg>
  );
}
