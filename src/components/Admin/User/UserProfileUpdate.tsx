import { $post } from "$/utils";
import { Input } from "$components";
import { SpinnerIcon } from "$icons";
import { POST } from "$lib";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { Settings } from "lucide-react";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { Button } from "shadcn/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "shadcn/components/ui/dialog";
import { toast } from "sonner";

interface UpdateUserProfileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

interface UpdateUserInfo {
  current: string;
  password: string;
}

export const UpdateUserProfile: FC<UpdateUserProfileProps> = ({ ...rest }) => {
  const { register, formState, handleSubmit, reset } = useForm<UpdateUserInfo>();

  const { mutateAsync } = useMutation({
    mutationFn: (req: any) =>
      POST(
        `/admins/change-password`,
        Object.assign(req, {
          Headers: {
            sessions: Cookies.get("value_ad"),
            key: Cookies.get("key_ad"),
          },
        })
      ),
    onSuccess() {
      toast.success("Password changed successfully");
    },
    onError() {
      toast.error("Something went wrong");
    },
  });

  async function change(data: UpdateUserInfo) {
    await mutateAsync(data);
    reset();
  }

  return (
    <div {...rest}>
      <Dialog>
        <DialogTrigger className="cursor-pointer rounded-full bg-slate-50 p-2 text-3xl transition-all duration-300 hover:bg-slate-200">
          <Settings />
        </DialogTrigger>
        <DialogContent className=" rounded-lg">
          <DialogHeader>
            <DialogTitle className="my-2"> Change password </DialogTitle>
            <DialogDescription>
              <form className=" flex flex-col gap-4" onSubmit={handleSubmit(change)}>
                <Input
                  label="Current Password *"
                  error={formState.errors.current}
                  disabled={formState.isSubmitting}
                  register={register("current", {
                    required: "Please provide your current password",
                    minLength: { value: 6, message: "Password must've greater then 6 character" },
                  })}
                />

                <Input
                  label="New Password *"
                  error={formState.errors.password}
                  disabled={formState.isSubmitting}
                  register={register("password", {
                    required: "Please provide your new password",
                    minLength: { value: 6, message: "New password must've greater then 6 character" },
                  })}
                />

                <Button disabled={formState.isSubmitting} className="select-none gap-2 rounded">
                  Change {formState.isSubmitting && <SpinnerIcon className="text-lg" />}
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
