import avatar from "$assets/temp/avatar.jpg";
import { Button } from "$components";
import Image from "next/image";
import { DetailedHTMLProps, FC, FormEventHandler, HTMLAttributes } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn/components/ui/tabs";
import { useToast } from "shadcn/components/ui/use-toast";

interface indexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Index: FC<indexProps> = ({ ...rest }) => {
  const { toast } = useToast();
  const toastHandler : FormEventHandler = (e ) => {
    e.preventDefault();
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };

  return (
    <div {...rest} className="container">
      <div className="my-10 flex items-center gap-x-4">
        <Image src={avatar} alt="Avatar" className="h-20 w-20 rounded-full p-[0.10rem] ring ring-blue-600" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Md Kawsar Islam Yeasin</h2>
          <p className="text-gray-500 ">Software Developer</p>
        </div>
      </div>

      <div>
        <Tabs defaultValue="ticket">
          <TabsList className="space-x-4">
            <TabsTrigger value="ticket">Tickets</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>
          <TabsContent value="ticket">
            <h2 className="profileHeading">Orders Tickets</h2>
            <div className="relative mt-8 overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Airbus
                    </th>
                    <th scope="col" className="px-6 py-3">
                      From
                    </th>
                    <th scope="col" className="px-6 py-3">
                      To
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                      Qatar Airways
                    </th>
                    <td className="px-6 py-4">Dhaka </td>
                    <td className="px-6 py-4">Delhi</td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="account">
            <h3 className="profileHeading">Account Info</h3>
            <form className="space-y-4">
              <div className="flex items-center gap-x-2 ">
                <input type="text" className="formInput" placeholder="first name" />
                <input type="text" className="formInput" placeholder="last name" />
              </div>
              <input type="email" className="formInput" placeholder="email" />
              <Button className="btn btn-primary">Save Changes </Button>
            </form>

            <form className="mt-5" onSubmit={toastHandler}>
              <h3 className="profileHeading">Change Password</h3>
              <div className="flex items-center gap-x-2 ">
                <input type="password" className="formInput" placeholder="current password" />
                <input type="password" className="formInput" placeholder="new password" />
              </div>
              <Button className="my-5">Change Password </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
