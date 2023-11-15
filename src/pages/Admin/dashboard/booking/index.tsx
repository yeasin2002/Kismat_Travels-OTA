import AdminLayout from "$components/Admin/layout/MainLayout";
import React, { SVGProps } from "react";

import Admin_secure from "$Secure/admin_secure";

const index = (props: any) => {
  return (
    <AdminLayout User={props.User}>
      <div className="flex flex-col justify-start p-2 md:flex-row md:justify-between">
        <h1 className="flex items-center gap-3 text-2xl">
          <span className="rounded-full bg-gray-100 p-3 shadow-inner ">
            <Book />
          </span>{" "}
          Booking Information
        </h1>
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

export function Book(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M17 17.97V10.9A5 5 0 0 1 13 6c0-.34.03-.68.1-1H7v12.97l5-2.14l5 2.14z"
        opacity=".3"
      ></path>
      <path
        fill="currentColor"
        d="M17.83 9L15 6.17l1.41-1.41l1.41 1.41l3.54-3.54l1.41 1.41L17.83 9zM17 17.97l-5-2.14l-5 2.14V5h6.1c.15-.74.46-1.42.9-2H7c-1.1 0-2 .9-2 2v16l7-3l7 3V10.9c-.32.07-.66.1-1 .1c-.34 0-.68-.03-1-.1v7.07z"
      ></path>
    </svg>
  );
}
