import Admin_secure from "$Secure/admin_secure";
import { AddNewUser } from "$components/Admin/User";
import AdminLayout from "$components/Admin/layout/MainLayout";
import UserYearReportChart from "$components/Admin/util/Charts/UserYearReportChart";
import Status from "$components/Admin/util/Status";
import UserTable from "$components/Table/UserTable";
import React, { SVGProps, useState } from "react";


const index = (props: any) => {
  const [data, setData] = useState(true);
  return (
    <AdminLayout User={props.User}>
      <div className="flex flex-col justify-start p-2 md:flex-row md:justify-between">
        <h1 className="flex items-center gap-3 text-2xl">
          <span className="rounded-full bg-gray-100 p-3 shadow-inner ">
            <User />
          </span>{" "}
          User information
          {data && "true"}
        </h1>
        <AddNewUser />
      </div>

      {/* status  */}
      <div className="relative p-3">
        <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
          <Status Title="Total User" Data="100" Icon={Users} />
          <Status Title="User in Month" Data="100" Icon={User} />
          <Status Title="Block User" Data="100" Icon={User} />
          <Status Title="Reported User" Data="100" Icon={User} />
        </div>
      </div>
      {/* chart for user data  */}

      <div className="h-64 w-full">
        <UserYearReportChart key={"userChart"} />
      </div>

      {/* table  */}
      <div className="p-5">
        <UserTable />
      </div>
    </AdminLayout>
  );
};

export default index;
// This gets called on every request
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
