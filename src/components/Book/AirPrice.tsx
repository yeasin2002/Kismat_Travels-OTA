import airPriceDemo from "$data/FlyHub/Response/AIR_PRICE.json";
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react";

interface AirPriceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  airPriceData: typeof airPriceDemo;
}

export const AirPrice: FC<AirPriceProps> = ({ airPriceData, ...rest }) => {
  return (
    <Fragment>
      <div {...rest} className="w-full flex-1">
        Air Price
      </div>
    </Fragment>
  );
};
