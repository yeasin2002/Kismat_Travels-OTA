import AdminLayout from "$components/Admin/layout/MainLayout";
// import BookingVsUserWeekBarChart from "$components/Admin/util/Charts/BookingVsUserWeekBarChart";
import Status from "$components/Admin/util/Status";
import React, { SVGProps } from "react";

import Admin_secure from "$Secure/admin_secure";
const index = (props: any) => {
  return (
    <AdminLayout User={props.User}>
      <div className="flex flex-col justify-start p-2 md:flex-row md:justify-between">
        <h1 className="flex items-center gap-3 text-xl md:text-2xl">
          <span className="rounded-full bg-gray-100 p-2 shadow-inner md:p-3 ">
            <Grid />
          </span>{" "}
          Dashboard
        </h1>
      </div>
      {/* status  */}
      <div className="relative p-3">
        <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-2 xl:grid-cols-4">
          <Status Title="Book Today" Data="100" Icon={PajamasTaskDone} />
          <Status Title="Income Today" Data="100" Icon={Money} />
          <Status Title="New User" Data="100" Icon={Users} />
          <Status Title="Search Today" Data="100" Icon={PhMagnifyingGlassDuotone} />
        </div>
      </div>
      {/* data  */}
      <div className="grid grid-cols-1 gap-2 px-3 md:grid-cols-2">
        {/* booking vs user week barChart  */}
        <div className="w-full rounded-md bg-slate-200 p-2 shadow-inner">
          <h1 className="pb-3 text-center text-lg font-bold text-slate-700 md:text-2xl">
            Booking & New User This Week
          </h1>
          <div>
            <BookingVsUserWeekBarChart key={"chartbvu"} />
          </div>
        </div>
        {/* booking vs user week barChart  */}
        <div className="w-full rounded-md bg-slate-200 p-2 shadow-inner">
          <h1 className="pb-3 text-center text-lg font-bold text-slate-700 md:text-2xl">Monthly Search</h1>
          <div>
            <BookingVsUserWeekBarChart key={"chartbvu"} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default index;

// // This gets called on every request
export async function getServerSideProps(ctx: any) {
  // Pass data to the page via props
  try {
    const User = await Admin_secure(ctx);
    return { props: { User: User } };
  } catch (error) {
    return {
      redirect: {
        destination: "/Admin/auth/Login", // Specify the destination route
        permanent: false, // Set to true for a permanent (301) redirect, or false for a temporary (302) redirect
      },
    };
  }
}

// icons

export function Grid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect width="5" height="7" x="8.5" y="6.5" rx=".5"></rect>
        <rect width="5" height="3.01" x="8.5" y=".5" rx=".5"></rect>
        <rect width="5" height="7" x=".5" y=".5" rx=".5"></rect>
        <rect width="5" height="3.01" x=".5" y="10.49" rx=".5"></rect>
      </g>
    </svg>
  );
}

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
export function Users(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="6" r="4"></circle>
        <path d="M12.5 4.341a3 3 0 1 1 0 3.318" opacity=".5"></path>
        <ellipse cx="9" cy="17" rx="7" ry="4"></ellipse>
        <path strokeLinecap="round" d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37" opacity=".5"></path>
      </g>
    </svg>
  );
}

export function PajamasTaskDone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5H3Zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01L15.78 4.68Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Money(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect width="13" height="9" x=".5" y="2.5" rx="1"></rect>
        <circle cx="7" cy="7" r="1.5"></circle>
        <path d="M3 5h.5m7 4h.5"></path>
      </g>
    </svg>
  );
}

export function PhMagnifyingGlassDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <g fill="currentColor">
        <path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80Z" opacity=".2"></path>
        <path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72Z"></path>
      </g>
    </svg>
  );
}
