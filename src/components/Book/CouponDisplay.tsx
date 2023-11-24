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
  const { mutate, isPending, data } = useMutation({
    mutationFn: ({ SearchID, ResultID }: any) =>
      $post("/private/AirPromotion", { SearchID, ResultID }) as Promise<AirPromotion>,
  });

  useEffect(() => {
    mutate({ ResultID: resultId, SearchID: searchId });
  }, []);

  const Loading = (
    <Fragment>
      <div className="grid h-20 w-full place-items-center ">
        <SpinnerIcon className="h-3/5 w-3/5" />
      </div>
    </Fragment>
  );

  const ErrorComponent = (
    <div className="h-full space-y-4">
      <Fragment>
        <Image alt="Error" src={alert} className="h-full w-full" />
        <p>Something went wrong, please try again later</p>
      </Fragment>
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

  let render;
  if (data?.ErrorCode === 4) {
    render = ErrorComponent;
  } else {
    if (!isPending) {
      render = CouponCard;
    } else {
      render = Loading;
    }
  }

  return (
    <div {...rest} className="w-1/5">
      {render}
    </div>
  );
};
