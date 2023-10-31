import React, { SVGProps } from "react";

interface IRoute {
  path: string;
  label: string;
  Icon: React.ReactNode;
}

const Router: IRoute[] = [
  {
    path: "",
    label: "Home",
    Icon: <CarbonHome className="mx-3 my-2 text-lg" />,
  },
  {
    path: "users",
    label: "Users",
    Icon: <Users className="mx-3 my-2 text-lg" />,
  },
  {
    path: "agents",
    label: "Agents",
    Icon: <EosIconsAdminOutlined className="mx-3 my-2 text-lg" />,
  },
  {
    path: "paymentsetup",
    label: "Payment Setup",
    Icon: <FluentPayment32Regular className="mx-3 my-2 text-lg" />,
  },
];

export default Router;
export function CarbonHome(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"
      ></path>
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

export function EosIconsAdminOutlined(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 23C6.443 21.765 2 16.522 2 11V5l10-4l10 4v6c0 5.524-4.443 10.765-10 12ZM4 6v5a10.58 10.58 0 0 0 8 10a10.58 10.58 0 0 0 8-10V6l-8-3Z"
      ></path>
      <circle cx="12" cy="8.5" r="2.5" fill="currentColor"></circle>
      <path
        fill="currentColor"
        d="M7 15a5.782 5.782 0 0 0 5 3a5.782 5.782 0 0 0 5-3c-.025-1.896-3.342-3-5-3c-1.667 0-4.975 1.104-5 3Z"
      ></path>
    </svg>
  );
}

export function FluentPayment32Regular(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M2 9.5A4.5 4.5 0 0 1 6.5 5h19A4.5 4.5 0 0 1 30 9.5v13a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13ZM6.5 7A2.5 2.5 0 0 0 4 9.5V11h24V9.5A2.5 2.5 0 0 0 25.5 7h-19ZM4 22.5A2.5 2.5 0 0 0 6.5 25h19a2.5 2.5 0 0 0 2.5-2.5V13H4v9.5ZM21 19h3a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2Z"
      ></path>
    </svg>
  );
}
