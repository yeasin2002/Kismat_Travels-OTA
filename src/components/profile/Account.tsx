import { Button } from "shadcn/components/ui/button";

import { DetailedHTMLProps, FC, FormEventHandler, HTMLAttributes } from "react";
import { useToast } from "shadcn/components/ui/use-toast";

import { ChangePassword } from "./ChangePassword";

interface AccountProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Account: FC<AccountProps> = ({ ...rest }) => {
  const { toast } = useToast();
  const toastHandler: FormEventHandler = (e) => {
    e.preventDefault();
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };
  return (
    <div {...rest} className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="profileHeading">Account Info</h3>
        <ChangePassword />
      </div>
      <form className="space-y-4" onSubmit={toastHandler}>
        <input type="file" className="formInput w-auto" placeholder="your images" />
        <div className="flex items-center gap-x-2 ">
          <input type="text" className="formInput" placeholder="first name" />
          <input type="text" className="formInput" placeholder="last name" />
        </div>
        <input type="email" className="formInput" placeholder="email" />
        <Button>Save Changes </Button>
      </form>
    </div>
  );
};
