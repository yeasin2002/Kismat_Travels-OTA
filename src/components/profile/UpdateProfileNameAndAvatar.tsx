import { useMutation } from "@tanstack/react-query";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { cn } from "shadcn/lib/utils";

import { $post } from "$/utils";
import avatar from "$assets/temp/avatar.jpg";
import { useAuth } from "$hooks";
import { getImgSrc } from "$lib/getImgSrc";
import { ImagePlus } from "lucide-react";
import { Label } from "shadcn/components/ui";
import { DisplayName } from "./DisplayName";
import { UpdateNames } from "./UpdateNames";

interface UpdateProfileNameAndAvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const UpdateProfileNameAndAvatar: FC<UpdateProfileNameAndAvatarProps> = ({ ...rest }) => {
  const { currentUser } = useAuth();
  const [isNameChanging, setIsNameChanging] = useState(false);
  const img = getImgSrc("avatar", currentUser?.photoUrl || "");

  const { mutateAsync } = useMutation({
    mutationFn: (id: string) => $post(`users/${id}`, {}),
  });

  return (
    <div {...rest}>
      <div className="flex items-center gap-x-2">
        <div className="relative">
          <img
            src={img}
            onError={(e) => {
              e.currentTarget.src = avatar.src;
            }}
            alt="Avatar"
            className={cn("  rounded-full p-[0.10rem] ring ")}
            width={80}
            height={80}
          />
          <Label
            htmlFor="avatar"
            className="absolute -bottom-2 right-0 cursor-pointer rounded-full bg-blue-600 p-2"
            title="Change avatar"
          >
            <ImagePlus size={20} color="white" />
          </Label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            className="hidden"
            onChange={async () => {
              // @ts-ignore
              mutateAsync(currentUser?.id);
            }}
          />
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
