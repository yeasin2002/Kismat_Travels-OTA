import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { cn } from "shadcn/lib/utils";

import { $post } from "$/utils";
import avatar from "$assets/temp/avatar.jpg";
import { Check, ImagePlus, Pencil, PencilLine, X } from "lucide-react";
import { Label } from "shadcn/components/ui";
import { DisplayName } from "./DisplayName";
import { UpdateNames } from "./UpdateNames";

interface UpdateProfileNameAndAvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const UpdateProfileNameAndAvatar: FC<UpdateProfileNameAndAvatarProps> = ({ ...rest }) => {
  const [isNameChanging, setIsNameChanging] = useState(false);
  const [isImgChange, setIsImgChange] = useState(false);

  return (
    <div {...rest}>
      <div className="flex items-center gap-x-2">
        <div className="relative">
          <Image src={avatar} alt="Avatar" className={cn("h-20 w-20  rounded-full p-[0.10rem] ring ")} />
          <Label htmlFor="avatar" className="absolute -bottom-2 right-0 cursor-pointer rounded-full bg-blue-600 p-2">
            <ImagePlus size={20} color="white" />
          </Label>
          <input type="file" id="avatar" name="avatar" className="hidden" />
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
