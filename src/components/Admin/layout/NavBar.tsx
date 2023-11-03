import React, { SVGProps } from "react";
import { ImgDropDown } from "$components/Admin/util/ImageDropDown";
import { Button } from "shadcn/components/ui/button";

const NavBar = ({ sidebarState }: { sidebarState: [boolean, React.Dispatch<React.SetStateAction<boolean>>] }) => {
  return (
    <div className="sticky top-0 z-[700] flex  w-full items-center justify-between gap-5 bg-slate-400/20 px-2 py-4 backdrop-blur-md">
      <div className="text-lg">
        <Button
          onClick={() => {
            sidebarState[1]((e) => !e);
          }}
          size={"icon"}
          variant={"outline"}
        >
          <IcBaselineArrowForwardIos
            className={`${sidebarState[0] ? "rotate-180" : "rotate-0"} transition-all duration-500`}
          />
        </Button>
        <span className="ml-2 font-bold">Welcome Admin</span>
      </div>
      <div>
        <ImgDropDown
          config={{
            imgOpt: "nahid",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rsvpUgnh5f9bK5f1h9IL8Et1k5ptGe-uAA&usqp=CAU",
            alt: "logo",
            label: "Nahid Hasan",
            menus: [
              [
                { title: "My Account", shortcut: "", Icon: SolarUserBroken },
                { title: "Account Setting", shortcut: "", Icon: SolarSettingsLineDuotone },
              ],
              [{ title: "Logout", shortcut: "", Icon: PhAirplaneLandingThin }],
            ],
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;

export function PhAirplaneLandingThin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M244 216a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4Zm-21.08-28.15L46.29 138.4A36.12 36.12 0 0 1 20 103.73V48a12 12 0 0 1 15.79-11.37l5.48 1.82a4 4 0 0 1 2.49 2.44l11.31 31.29L92 82.71V48a12 12 0 0 1 15.79-11.38l5.48 1.82a4 4 0 0 1 2.42 2.25l23.25 55.42l62.7 17.52a36.1 36.1 0 0 1 26.36 34.7V184a4 4 0 0 1-5.08 3.85ZM220 148.33a28.07 28.07 0 0 0-20.51-27l-64.57-18a4 4 0 0 1-2.61-2.31L109 45.47l-3.75-1.25A4 4 0 0 0 100 48v40a4 4 0 0 1-5.1 3.85l-44-12.54a4 4 0 0 1-2.66-2.49L36.9 45.43l-3.64-1.21a3.95 3.95 0 0 0-3.6.55A4 4 0 0 0 28 48v55.72a28.1 28.1 0 0 0 20.45 27l171.55 48Z"
      ></path>
    </svg>
  );
}

export function IcBaselineArrowForwardIos(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"></path>
    </svg>
  );
}

export function SolarSettingsLineDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"></circle>
        <path
          d="M13.765 2.152C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.617 1.617 0 0 1-.79 1.353a1.617 1.617 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.466.807-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361c0 .558-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453c.466-.807.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.617 1.617 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008a1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
}

export function SolarUserBroken(props: SVGProps<SVGSVGElement>) {
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
