import { Logo } from "$components/Global";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
const menus = [
  {
    title: "Home",
    link: "/",
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
  const currentPath = useRouter().asPath;

  return (
    <nav className="border-1 border-slate-500 bg-slate-600   bg-transparent ">
      <div className="container flex items-center justify-between py-2">
        <Logo />

        <div className="max-md:hidden">
          <ul className="flex justify-between gap-x-4 text-base">
            {menus.map((value) => (
              <li key={value.title} className={`group flex flex-col transition-all `}>
                <Link href={value.link} className="rounded-md  px-4 py-2 capitalize   text-slate-800 ">
                  {value.title}
                </Link>
                <span
                  className={twMerge(
                    `inline-block h-1 w-0 bg-teal-500 transition-all  duration-500 group-hover:w-full`,
                    currentPath === value.link && "w-full"
                  )}
                ></span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={"/register"}
          className="hidden transform rounded-md bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:block"
        >
          Register
        </Link>

        <button className="transform rounded-md bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80  md:hidden">
          <AiOutlineMenu />
        </button>
      </div>
    </nav>
  );
}
