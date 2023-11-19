import { SpinnerIcon } from "$icons";
import { AlertOctagon, CheckCircle } from "lucide-react";
import { FC, Fragment } from "react";
import { Skeleton } from "shadcn/components/ui";
import { AirPriceProps } from "./AirPriceDiscountCoupon";

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
      {airPriceData?.Results?.map((air) => {
        console.log(air);
        return (
          <div {...rest} className="w-full flex-1">
            <div className=" flex gap-x-2">
              {air.IsRefundable ? (
                <>
                  <CheckCircle />
                  Refundable
                </>
              ) : (
                <>
                  <AlertOctagon />
                  not-refundable
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return <Fragment>{isPending ? Loading : isError ? ErrorComponent : main}</Fragment>;
};
