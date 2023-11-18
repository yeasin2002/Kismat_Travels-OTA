import { $post } from "$/utils";
import alert from "$assets/Illustrations/3D/alert.png";
import { SpinnerIcon } from "$icons";
import { AirPromotion } from "$interface/AirPromotion.interface";
import { usePassengers } from "$store";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes, useEffect } from "react";
import { Skeleton } from "shadcn/components/ui";

interface CouponDisplayProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CouponDisplay: FC<CouponDisplayProps> = ({ ...rest }) => {
  const { searchId, resultId } = usePassengers();
  const { mutate, isPending, error, data } = useMutation({
    mutationFn: ({ SearchID, ResultID }: any) =>
      $post("/private/AirPromotion", { SearchID, ResultID }) as Promise<AirPromotion>,
  });

  useEffect(() => {
    mutate({ ResultID: resultId || "", SearchID: searchId || "" });
  }, []);
  console.log(data);

  const Loading = (
    <Fragment>
      <Skeleton className="grid h-20 w-full place-items-center bg-gray-300">
        <SpinnerIcon className="h-3/5 w-3/5" />
      </Skeleton>
    </Fragment>
  );

  const ErrorComponent = (
    <div className="h-full space-y-4">
      <Image alt="Error" src={alert} className="h-full w-full" />
      <p>Something went wrong, please try again later</p>
    </div>
  );

  const CouponCard = (
    <Fragment>
      {data?.PromoCodes?.length === 0 ? (
        <p>No Coupon Available</p>
      ) : (
        data?.PromoCodes?.map((code) => {
          return (
            <div className="flex items-center justify-between">
              <p>{code?.Code}</p>
              <p>{code?.MaxAmount}</p>
              <p>
                {code?.Description} {code?.Currency}
              </p>
            </div>
          );
        })
      )}
    </Fragment>
  );

  return (
    <div {...rest} className="w-1/5">
      {isPending ? Loading : error ? ErrorComponent : CouponCard}
    </div>
  );
};
