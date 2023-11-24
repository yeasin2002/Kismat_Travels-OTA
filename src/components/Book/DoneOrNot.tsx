import { AlertOctagon, CheckCircle } from "lucide-react";
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react";

interface DoneOrNotType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: boolean;
  possitioveTitle: string;
  negetiveTitle: string;
}

export const DoneOrNot: FC<DoneOrNotType> = ({ value, possitioveTitle, negetiveTitle, ...rest }) => {
  return (
    <div className=" flex gap-x-2" {...rest}>
      {value ? (
        <Fragment>
          <CheckCircle />
          {possitioveTitle}
        </Fragment>
      ) : (
        <Fragment>
          <AlertOctagon />
          {negetiveTitle}
        </Fragment>
      )}
    </div>
  );
};
