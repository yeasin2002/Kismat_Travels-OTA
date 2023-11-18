import { useMutation } from "@tanstack/react-query";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { cn } from "shadcn/lib/utils";

import { $post } from "$/utils";
import avatar from "$assets/temp/avatar.jpg";
import { useAuth } from "$hooks";
import { getImgSrc } from "$lib/getImgSrc";
import { ImagePlus } from "lucide-react";
import { Label } from "shadcn/components/ui";
import { FileUpload } from "shadcn/components/ui/file-upload";
import { toast } from "sonner";
import { DisplayName } from "./DisplayName";
import { UpdateNames } from "./UpdateNames";

interface UpdateProfileNameAndAvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const UpdateProfileNameAndAvatar: FC<UpdateProfileNameAndAvatarProps> = ({ ...rest }) => {
  const { currentUser, setCurrentUser } = useAuth();
  const [isNameChanging, setIsNameChanging] = useState(false);

  const { mutateAsync } = useMutation({
    mutationFn: ({ id, form }: { id: string; form: FormData }) => $post(`users/${id}`, form),
    onError: () => toast.error("Something went wrong"),
    onSuccess(data) {
      toast.success("Profile updated successfully");
      setCurrentUser(data);
    },
  });

  async function upload(File: File[]) {
    if (File.length === 0) return toast.error("Please select a file");
    const form = new FormData();
    form.append("avatar", File[0]);
    await mutateAsync({ id: currentUser?.id!, form });
    return;
  }

  return (
    <div {...rest}>
      <div className="flex items-center gap-x-2">
        <div className="relative">
          <FileUpload onUpload={upload}>
            <img
              src={getImgSrc("avatar", currentUser?.photoUrl!)}
              alt="Avatar"
              className={cn("block aspect-square w-16 rounded-full object-cover object-center p-[0.10rem]  ring")}
              crossOrigin="anonymous"
              onError={(e) => {
                e.currentTarget.src = avatar.src;
              }}
            />
            <Label
              className="absolute -bottom-2 right-0 cursor-pointer rounded-full bg-blue-600 p-2"
              title="Change avatar"
            >
              <ImagePlus size={20} color="white" />
            </Label>
          </FileUpload>
        </div>
        {!isNameChanging ? (
          <DisplayName setIsNameChanging={setIsNameChanging} />
        ) : (
          <UpdateNames setIsNameChanging={setIsNameChanging} />
        )}
      </div>
    </div>
  );
};
