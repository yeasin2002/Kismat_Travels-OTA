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

interface AgentFormType {
  name: string;
  email: string;
  password: string;
}

import { Input } from "$components";
import { SpinnerIcon } from "$icons";
import { emailRegex } from "$lib";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface AddNewAgentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AddNewAgent: FC<AddNewAgentProps> = ({ ...rest }) => {
  const { register, formState, handleSubmit } = useForm<AgentFormType>();

  async function signup(formData: AgentFormType) {
    console.log(formData);
  }

  return (
    <div {...rest}>
      <Dialog>
        <DialogTrigger>
          <Button variant={"secondary"}>Add New Agent </Button>
        </DialogTrigger>
        <DialogContent className=" rounded-lg">
          <DialogHeader>
            <DialogTitle className="my-2"> Add New Agent </DialogTitle>
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
                  Add new Agent {formState.isSubmitting && <SpinnerIcon className="text-lg" />}
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
