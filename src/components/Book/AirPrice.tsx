import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface AirPriceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AirPrice: FC<AirPriceProps> = ({ ...rest }) => {
  return <div {...rest}>Air Price</div>;
};
