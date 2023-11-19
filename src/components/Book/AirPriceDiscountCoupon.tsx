import { AirPriceResponse } from "$interface/airPrice.interface";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { AirPrice } from "./AirPrice";
import { CouponDisplay } from "./CouponDisplay";

export interface AirPriceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  airPriceData: AirPriceResponse | undefined;
  isPending?: boolean;
  error?: Error | null;
  isError?: boolean;
}

export const AirPriceDiscountCoupon: FC<AirPriceProps> = ({ airPriceData, isPending, error, isError, ...rest }) => {
  console.table({
    isPending,

    isError,
  });

  console.log(error);
  console.log(airPriceData);
  return (
    <div
      {...rest}
      className="mx-8  my-20 flex items-center justify-between space-y-5
     rounded-lg bg-gray-50 px-[var(--gap-x)] py-[var(--gap-y)] shadow-lg  data-[state=open]:pb-0 lg:px-8"
    >
      <AirPrice airPriceData={airPriceData} error={error} isPending={isPending} isError={isError} />
      <CouponDisplay />
    </div>
  );
};
