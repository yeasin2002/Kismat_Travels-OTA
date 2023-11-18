import { SVGProps } from "react";

const UserDetails = ({ data }: { data: any }) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-slate-100/50 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-md bg-slate-200 p-2 px-2 shadow-md">
        <h1 className="flex items-center justify-center">
          {" "}
          <span>
            <SolarUserRoundedLineDuotone />
          </span>{" "}
          User Details
        </h1>
        {/* information  */}

        <div className="mt-2 w-full border-t-2 border-gray-300"></div>
      </div>
    </div>
  );
};

export default UserDetails;

export function SolarUserRoundedLineDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="6" r="4"></circle>
        <ellipse cx="12" cy="17" opacity=".5" rx="7" ry="4"></ellipse>
      </g>
    </svg>
  );
}
