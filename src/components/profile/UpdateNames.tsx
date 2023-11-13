import { $post } from "$/utils";
import { useMutation } from "@tanstack/react-query";
import { Check, Pencil, X } from "lucide-react";
import { DetailedHTMLProps, Dispatch, FC, HTMLAttributes, SetStateAction, useState } from "react";
interface UpdateNamesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setIsNameChanging: Dispatch<SetStateAction<boolean>>;
}

export const UpdateNames: FC<UpdateNamesProps> = ({ setIsNameChanging, ...rest }) => {
  const [userName, setUserName] = useState("");
  const { mutateAsync } = useMutation({
    mutationFn: ({ id, newName }: { id: string; newName: string }) =>
      $post(`users/${id}`, {
        name: newName,
      }),
    onSuccess: () => {
      setIsNameChanging(false);
    },
  });

  return (
    <div className="flex" {...rest} key={"newName"}>
      <input
        type="text"
        defaultValue={"Md Kawsar Islam Yeasin"}
        className="profileNameUpdate  border-b  border-blue-600 text-gray-500 outline-none "
      />
      <div className="flex gap-x-1">
        <span
          className="box"
          onClick={async (val) => {
            await mutateAsync({ id: "1", newName: userName });
          }}
        >
          <Check />
        </span>

        <span className="box cursor-pointer" onClick={() => setIsNameChanging(false)}>
          <X />
        </span>
      </div>
    </div>
  );
};
