import { useForm } from "react-hook-form";
import { Button } from "shadcn/components/ui/button";
import { POST } from "$lib";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "shadcn/components/ui/dialog";

interface UserFormType {
  name: string;
  email: string;
  password: string;
}

import { Input } from "$components";
import { SpinnerIcon } from "$icons";
import { emailRegex } from "$lib";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cookie from "js-cookie";
import { Card } from "shadcn/components/ui/card";
import { toast } from "sonner";

interface AddNewUserProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AddNewUser: FC<{ Reload: any }> = ({ Reload, ...rest }) => {
  const { register, formState, handleSubmit } = useForm<UserFormType>();

  async function AddNew(formData: UserFormType) {
    try {
      const user = await POST("/users/add_new", {
        ...formData,
        Headers: {
          sessions: cookie.get("value_ad"),
          key: cookie.get("key_ad"),
        },
      });
      Reload();
      toast.success("New User added successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.log("🚀 ~ file: AddNewUser.tsx:44 ~ AddNew ~ error:", error);
    }
  }

  return (
    <div {...rest}>
      <Dialog>
        <DialogTrigger>
          <Card className="bg-black px-4 py-3 text-white">Add New User </Card>
        </DialogTrigger>
        <DialogContent className=" rounded-lg">
          <DialogHeader>
            <DialogTitle className="my-2"> Add New User </DialogTitle>
            <DialogDescription>
              <form className=" flex flex-col gap-4" onSubmit={handleSubmit(AddNew)}>
                <Input
                  label="Name *"
                  error={formState.errors.name}
                  disabled={formState.isSubmitting}
                  register={register("name", {
                    required: { value: true, message: "Please provide your name" },
                  })}
                />

                <Input
                  label="Email *"
                  error={formState.errors.email}
                  disabled={formState.isSubmitting}
                  register={register("email", {
                    required: { value: true, message: "Please provide a valid email address" },
                    pattern: { value: emailRegex, message: "Invalid email address" },
                  })}
                />

                <Input
                  label="Password *"
                  type="password"
                  error={formState.errors.password}
                  disabled={formState.isSubmitting}
                  register={register("password", {
                    required: { value: true, message: "Please provide a valid password" },
                    minLength: { value: 6, message: "Password should be at least 6 characters long" },
                  })}
                />

                <Button disabled={formState.isSubmitting} className="select-none gap-2 rounded">
                  {formState.isSubmitting && <SpinnerIcon className="text-lg" />} Add new User
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
