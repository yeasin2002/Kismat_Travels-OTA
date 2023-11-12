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

interface UpdateUserInfo {
  name: string;
  email: string;
  password: string;
}

import { Input } from "$components";
import { SpinnerIcon } from "$icons";
import { emailRegex } from "$lib";
import { Settings } from "lucide-react";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface UpdateUserProfileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const UpdateUserProfile: FC<UpdateUserProfileProps> = ({ ...rest }) => {
  const { register, formState, handleSubmit } = useForm<UpdateUserInfo>();

  async function signup(formData: UpdateUserInfo) {}

  return (
    <div {...rest}>
      <Dialog>
        <DialogTrigger>
          <button className="cursor-pointer rounded-full bg-slate-50 p-2 text-3xl transition-all duration-300 hover:bg-slate-200">
            <Settings />
          </button>
        </DialogTrigger>
        <DialogContent className=" rounded-lg">
          <DialogHeader>
            <DialogTitle className="my-2"> Update User Profile </DialogTitle>
            <DialogDescription>
              <form className=" flex flex-col gap-4" onSubmit={handleSubmit(signup)}>
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

                <Button disabled={formState.isSubmitting} className="select-none gap-2 rounded">
                  Update User Profile {formState.isSubmitting && <SpinnerIcon className="text-lg" />}
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
