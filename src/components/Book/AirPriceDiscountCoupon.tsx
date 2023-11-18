import airPriceDemo from "$data/FlyHub/Response/AIR_PRICE.json";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { AirPrice } from "./AirPrice";
import { CouponDisplay } from "./CouponDisplay";

interface AirPriceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  airPriceData: typeof airPriceDemo;
}

export const AirPriceDiscountCoupon: FC<AirPriceProps> = ({ airPriceData, ...rest }) => {
  return (
    <div
      {...rest}
      className="mx-8  my-20 flex items-center justify-between space-y-5
     rounded-lg bg-gray-50 px-[var(--gap-x)] py-[var(--gap-y)] shadow-lg  data-[state=open]:pb-0 lg:px-8"
    >
      <AirPrice airPriceData={airPriceData} />
      <CouponDisplay />
    </div>
  );
};
