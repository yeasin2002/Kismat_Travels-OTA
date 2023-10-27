import { AiOutlineMenu } from "react-icons/ai";

import { Logo } from "$components/Global";
import Link from "next/link";
const menus = [
  {
    title: "Home",
    link: "#",
    icon: "",
  },

  {
    title: "search",
    link: "/search",
    icon: "",
  },
  {
    title: "log in",
    link: "/login",
    icon: "",
  },
];

export function Nav() {
  return (
    <nav className="border-1 border-slate-500 bg-transparent   ">
      <div className="container flex items-center justify-between py-2">
        <Logo />

        <div className="max-md:hidden">
          <ul className="flex justify-between gap-x-4 text-base">
            {menus.map((value) => (
              <li key={value.title}>
                <Link href={value.link} className="rounded-md px-4 py-2 text-slate-100 hover:bg-gray-800/70 ">
                  {value.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button className="hidden transform rounded-md bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:block">
          Sing in
        </button>

        <button className="transform rounded-md bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80  md:hidden">
          <AiOutlineMenu />
        </button>
      </div>
    </nav>
  );
}
