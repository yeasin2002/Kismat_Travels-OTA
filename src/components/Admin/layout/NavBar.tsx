import React, { SVGProps } from "react";
import { ImgDropDown } from "$components/Admin/util/ImageDropDown";

const NavBar = () => {
  return (
    <div className="sticky top-0 flex w-full  items-center justify-between gap-5 bg-slate-400/20 px-2 py-4 backdrop-blur-md">
      <div className="text-lg">Welcome nahid</div>
      <div>
        <ImgDropDown
          config={{
            imgOpt: "nahid",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rsvpUgnh5f9bK5f1h9IL8Et1k5ptGe-uAA&usqp=CAU",
            alt: "logo",
            label: "My Account",
            menus: [
              [
                { title: "My Account", shortcut: "n" },
                { title: "My Account", shortcut: "n" },
              ],
              [{ title: "My Account2", shortcut: "n2", Icon: PhAirplaneLandingThin }],
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
