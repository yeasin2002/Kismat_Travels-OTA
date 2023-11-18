import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { AirPrice } from "./AirPrice";
import { CouponDisplay } from "./CouponDisplay";

interface AirPriceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AirPriceDiscountCoupon: FC<AirPriceProps> = ({ ...rest }) => {
  return (
    <div
      {...rest}
      className="mx-8  my-20 rounded-lg bg-gray-50 px-[var(--gap-x)] py-[var(--gap-y)]
     shadow-lg data-[state=open]:pb-0 lg:px-8"
    >
      <AirPrice />
      <CouponDisplay />
    </div>
  );
};
