import { $put } from "$/utils";
import { Input } from "$components/Form";
import { useAuth } from "$hooks";
import { SpinnerIcon } from "$icons";
import { useMutation } from "@tanstack/react-query";
import { Send } from "lucide-react";
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
interface ChangePasswordProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
interface ChangePass {
  CurrentPassword: string;
  newPassword: string;
}

export const ChangePassword: FC<ChangePasswordProps> = ({ ...rest }) => {
  const { currentUser } = useAuth();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (req: any) => $put(`/users/${currentUser?.id}`, req),
    onSuccess: () => {
      toast.success("Password changed successfully");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  const { register, handleSubmit, formState } = useForm<ChangePass>();
  const onSubmit = async (data: ChangePass) => {
    await mutateAsync({
      current: data.CurrentPassword,
      password: data.newPassword,
    });
  };
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
              <form className="mt-5 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <Input
                  type="password"
                  label="Current password"
                  className="formInput"
                  placeholder="old password"
                  error={formState.errors.CurrentPassword}
                  register={register("CurrentPassword", {
                    required: { value: true, message: "Provide your  Current Password " },
                  })}
                />
                <Input
                  type="password"
                  label="New password"
                  className="formInput"
                  placeholder="New password"
                  error={formState.errors.newPassword}
                  register={register("newPassword", {
                    required: { value: true, message: "Provide your  New  password " },
                  })}
                />

                <Button className="my-5 flex items-center gap-x-3 text-lg font-semibold" type="submit">
                  {isPending ? (
                    <SpinnerIcon />
                  ) : (
                    <>
                      <Send size={20} />
                      Submit
                    </>
                  )}
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
