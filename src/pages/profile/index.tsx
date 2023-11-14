import { useRouter } from "next/router";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn/components/ui/tabs";

import { Booked, Cancel, ChangePassword, OnHold, UpdateProfileNameAndAvatar } from "$components/profile";
import { ChevronLeft } from "lucide-react";

interface indexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
const Index: FC<indexProps> = ({ ...rest }) => {
  const router = useRouter();

  return (
    <div {...rest} className="container">
      <div className="my-5">
        <span className="cursor-pointer   rounded-full bg-slate-300  p-2" onClick={() => router.back()}>
          <ChevronLeft size={30} className="inline-block" />
        </span>
      </div>

      <div className=" my-10  justify-between space-y-4 md:flex md:space-y-0  ">
        <UpdateProfileNameAndAvatar />
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
