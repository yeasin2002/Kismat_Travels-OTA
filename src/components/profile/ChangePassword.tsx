import { Send } from "lucide-react";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Button } from "shadcn/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "shadcn/components/ui/dialog";
interface ChangePasswordProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ChangePassword: FC<ChangePasswordProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <Dialog>
        <DialogTrigger>
          <Button variant={"secondary"}>Change Password </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle> Change Password</DialogTitle>
            <DialogDescription>
              <form className="mt-5">
                <div className="flex items-center gap-x-2 ">
                  <input type="password" className="formInput" placeholder="current password" />
                  <input type="password" className="formInput" placeholder="new password" />
                </div>
                <Button className="my-5 flex items-center gap-x-3 text-lg font-semibold">
                  <Send size={20} />
                  Submit
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
