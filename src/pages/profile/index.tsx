import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn/components/ui/tabs";

import { $post } from "$/utils";
import avatar from "$assets/temp/avatar.jpg";
import { Account, Booked, Cancel, ChangePassword, OnHold } from "$components/profile";
import { Check, ChevronLeft, PencilLine, X } from "lucide-react";
import { cn } from "shadcn/lib/utils";

interface indexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
const Index: FC<indexProps> = ({ ...rest }) => {
  const router = useRouter();
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
        <span className="cursor-pointer   rounded-full bg-slate-300  p-2" onClick={() => router.back()}>
          <ChevronLeft size={30} className="inline-block" />
        </span>
      </div>

      <div className=" my-10  justify-between space-y-4 md:flex md:space-y-0  ">
        <div className="flex items-center gap-x-4">
          <label htmlFor={isNameChang ? "avatar" : ""}>
            <Image
              src={avatar}
              alt="Avatar"
              className={cn(
                "h-20 w-20 shrink-0 rounded-full p-[0.10rem] ring ",
                !isNameChang ? "ring-blue-600" : "ring-red-600"
              )}
            />
            <input type="file" id="avatar" className="absolute left-0 top-0 hidden" />
          </label>

          <div className="flex items-center justify-between gap-x-2">
            {!isNameChang ? (
              <input
                key={"now"}
                type="text"
                value="Md Kawsar Islam Yeasin"
                className="pointer-events-none   text-xl  font-bold text-gray-800 outline-none sm:text-2xl"
              />
            ) : (
              <input
                key={"old"}
                type="text"
                placeholder="Md Kawsar Islam Yeasin"
                className=" border-b border-blue-700 font-bold text-gray-500 outline-none placeholder:text-xl sm:placeholder:text-xl"
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
        </div>
        <ChangePassword />
      </div>

      <Tabs defaultValue="hold" className="h-full w-full">
        <TabsList>
          <TabsTrigger value="hold">On Hold</TabsTrigger>
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="cancel">Cancel</TabsTrigger>
        </TabsList>
        <TabsContent value="hold">
          <OnHold />
        </TabsContent>
        <TabsContent value="booked">
          <Booked />
        </TabsContent>
        <TabsContent value="cancel">
          <Cancel />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
