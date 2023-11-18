import { SVGProps, Dispatch } from "react";
import { getImgSrc } from "$lib/getImgSrc";
// createdAt
// :
// "2023-11-17T12:52:02.000Z"
// email
// :
// "nahidhasan141400@gmail.com"
// id
// :
// "299503d2-dffb-4c15-b0c6-3905818874aa"
// name
// :
// "Nahid hasan Sagor"
// photoUrl
// :
// "https://lh3.googleusercontent.com/a/ACg8ocIsFFiASNa32k2tUfHfQaI527pUU6j1LFx5pgMhvjfSzws=s96-c"
// updatedAt
// :
// "2023-11-17T12:52:02.000Z"

const UserDetails = ({ data, close }: { data: any; close: Dispatch<null> }) => {
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

        <div className="mt-2 w-full border-t-2 border-gray-300">
          <div className="flex items-start justify-start p-3">
            <img
              src={getImgSrc("avatar", data.photoUrl)}
              alt=""
              className="h-[80px] w-[80px] rounded-md object-cover"
            />
            <div className="pl-2">
              <h1 className="pb-1 text-lg font-bold">{data.name}</h1>
              <p className="text-sm font-light">{data.email}</p>
              <p className="text-sm font-light">Join: {new Date(data.createdAt).toDateString()}</p>
            </div>
          </div>
        </div>
        {/* model footer  */}
        <div className="relative flex w-full items-center justify-end">
          <button
            onClick={() => {
              close(null);
            }}
            className="cursor-pointer rounded-md bg-slate-500 p-1 px-4 text-white hover:shadow-md"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

export function SolarUserRoundedLineDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="6" r="4"></circle>
        <ellipse cx="12" cy="17" opacity=".5" rx="7" ry="4"></ellipse>
      </g>
    </svg>
  );
}
