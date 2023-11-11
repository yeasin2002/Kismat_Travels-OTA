import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";

import { $post } from "$/utils";
import avatar from "$assets/temp/avatar.jpg";
import { ChangePassword, ShowTickets } from "$components";
import { Check, ChevronLeft, PencilLine, X } from "lucide-react";

interface indexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
const Index: FC<indexProps> = ({ ...rest }) => {
  const [isNameChang, setIsNameChang] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: (newData: any) => $post("/api/", newData),
    onSuccess: () => {
      console.log("Success");
    },
  });

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
                // <h2 className="w-80 text-2xl font-bold  text-gray-800">Md Kawsar Islam Yeasin</h2>
                <input
                  key={"exist"}
                  type="text"
                  value="Md Kawsar Islam Yeasin"
                  className="pointer-events-none   w-80 text-2xl font-bold text-gray-800 outline-none"
                />
              ) : (
                <input
                  key={"edit"}
                  type="text"
                  placeholder="Md Kawsar Islam Yeasin"
                  className="w-80 border-b border-blue-700 font-bold text-gray-500 outline-none placeholder:text-2xl"
                />
              )}
              <div className="flex gap-x-6">
                {!isNameChang ? (
                  <button onClick={() => setIsNameChang(true)} className="p-1">
                    <PencilLine className="cursor-pointer" />
                  </button>
                ) : (
                  <div className="flex gap-x-6">
                    <button
                      className="rounded-md border border-slate-400 p-1"
                      onClick={async () => {
                        await mutateAsync({});
                        //  other api req handle
                        await setIsNameChang(false);
                      }}
                    >
                      <Check />
                    </button>
                    <button onClick={() => setIsNameChang(false)} className="rounded-md border border-slate-400 p-1">
                      <X className="cursor-pointer" />
                    </button>
                  </div>
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
