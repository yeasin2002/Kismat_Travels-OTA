import { $patch } from "$/utils";
import { useAuth } from "$hooks";
import { useMutation } from "@tanstack/react-query";
import { Check, Pencil, X } from "lucide-react";
import { DetailedHTMLProps, Dispatch, FC, HTMLAttributes, SetStateAction, useState } from "react";
interface UpdateNamesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setIsNameChanging: Dispatch<SetStateAction<boolean>>;
}

export const UpdateNames: FC<UpdateNamesProps> = ({ setIsNameChanging, ...rest }) => {
  const { currentUser, setCurrentUser } = useAuth();
  const [userName, setUserName] = useState(currentUser?.name || "");

  const { mutateAsync } = useMutation({
    mutationFn: ({ id, newName }: { id: string; newName: string }) =>
      $patch(`users/${id}`, {
        name: newName,
      }),
    onSuccess: (data) => {
      setCurrentUser(data);
      setIsNameChanging(false);
    },
  });

  return (
    <div className="flex" {...rest} key={"newName"}>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        className="profileNameUpdate  border-b  border-blue-600 text-gray-500 outline-none "
      />
      <div className="flex gap-x-1">
        <span
          className="box"
          onClick={async () => {
            await mutateAsync({ id: currentUser?.id!, newName: userName });
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
