import { Pencil } from "lucide-react";
import { DetailedHTMLProps, Dispatch, FC, HTMLAttributes, SetStateAction } from "react";

interface DisplayNameProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setIsNameChanging: Dispatch<SetStateAction<boolean>>;
}

export const DisplayName: FC<DisplayNameProps> = ({ setIsNameChanging, ...rest }) => {
  return (
    <div className="flex" {...rest} key={"originalName"}>
      <input
        type="text"
        readOnly
        defaultValue={"Md Kawsar Islam Yeasin"}
        className="profileNameUpdate border-none outline-none  "
      />
      <span
        className="box cursor-pointer"
        onClick={() => {
          setIsNameChanging(true);
        }}
      >
        <Pencil />
      </span>
    </div>
  );
};
