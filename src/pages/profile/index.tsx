import Image from "next/image";
import { DetailedHTMLProps, FC, FormEventHandler, HTMLAttributes, useState } from "react";

import avatar from "$assets/temp/avatar.jpg";
import { ChangePassword, ShowTickets } from "$components";
import { Check, ChevronLeft, PencilLine } from "lucide-react";

interface indexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
const Index: FC<indexProps> = ({ ...rest }) => {
  const [isNameChang, setIsNameChang] = useState(false);

  return (
    <div {...rest} className="container">
      <div className="my-5  ">
        <span className="rounded-full   bg-slate-300 p-2 ">
          <ChevronLeft size={30} className="inline-block" />
        </span>
      </div>

      <div className=" my-10 flex justify-between  ">
        <div className="flex items-center gap-x-4">
          <label htmlFor={isNameChang ? "avatar" : ""}>
            <Image src={avatar} alt="Avatar" className="h-20 w-20 rounded-full p-[0.10rem] ring ring-blue-600" />
          </label>
          <div>
            <div className="flex items-center gap-x-5">
              {!isNameChang ? (
                <h2 className="w-80 text-2xl font-bold  text-gray-800">Md Kawsar Islam Yeasin</h2>
              ) : (
                <input
                  type="text"
                  placeholder="Md Kawsar Islam Yeasin"
                  className="w-80 border-b border-blue-700  text-2xl font-bold text-gray-800 outline-none"
                />
              )}
              <div className="flex gap-x-6">
                {!isNameChang ? (
                  <button onClick={() => setIsNameChang(true)} className="p-1">
                    <PencilLine className="cursor-pointer" />
                  </button>
                ) : (
                  <button className="rounded-md border border-slate-400 p-1" onClick={() => setIsNameChang(false)}>
                    <Check />
                  </button>
                )}
              </div>
            </div>
            <p className="mt-4 text-gray-500 ">Software Developer</p>
            <input type="file" id="avatar" className="hidden" />
          </div>
        </div>
        <ChangePassword />
      </div>

      <ShowTickets />
    </div>
  );
};

export default Index;
