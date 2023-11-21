import DemoFlight from "$data/FlyHub/Response/Flight.json";
import { SpinnerIcon } from "$icons";
import { PanelTop, Send } from "lucide-react";
import { FC, Fragment } from "react";
import { Skeleton } from "shadcn/components/ui";
import { AirPriceProps } from "./AirPriceDiscountCoupon";
import { DoneOrNot } from "./DoneOrNot";

export const AirPrice: FC<AirPriceProps> = ({ airPriceData, isPending, error, isError, ...rest }) => {
  const Loading = (
    <Fragment>
      <Skeleton className="grid h-20 w-full place-items-center bg-gray-300">
        <SpinnerIcon className="h-3/5 w-3/5" />
      </Skeleton>
    </Fragment>
  );

  const ErrorComponent = (
    <Fragment>
      {airPriceData?.Error && (
        <div className="h-full space-y-4">
          <p>Something went wrong, please try again later</p>
        </div>
      )}
    </Fragment>
  );

  const main = (
    <div>
      <div {...rest} className="w-full flex-1">
        <DoneOrNot value={true} possitioveTitle="Refundable" negetiveTitle="Not-Refundable" />
        <div className="mt-5">
          <div className="space-y-3">
            <div className="flex items-center gap-x-2">
              <Send />
              <div>
                <p>Zia Airport </p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-center gap-x-2">
              <Send />
              <div>
                <p>Dubai Airport </p>
                <p>United Arab Emirates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return <Fragment>{isPending ? Loading : isError ? ErrorComponent : main}</Fragment>;
  return <Fragment> {main}</Fragment>;
};
