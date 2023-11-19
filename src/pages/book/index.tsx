import { Nav } from "$components";
import { usePassengers } from "$store";
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes, useEffect } from "react";

import { $post } from "$/utils";
import { AirPriceDiscountCoupon } from "$components/Book/AirPriceDiscountCoupon";
import { BookPendingSkeleton } from "$components/Book/BookPendingSkeleton";
import { PassengerForm } from "$components/Book/PassengerForm";
import { AirPriceResponse } from "$interface/airPrice.interface";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
interface BookProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Book: FC<BookProps> = ({ ...rest }) => {
  const { resultId, emptyPassenger, searchId, flightDetails } = usePassengers();
  const currentFlightForBooking = flightDetails.find((val) => val.ResultID === resultId);

  const {
    mutate,
    data: airPriceData,
    isPending,
    error,
    isError,
  } = useMutation({
    mutationKey: ["private/AirPrice"],
    mutationFn: ({ SearchID, ResultID }: { SearchID: string; ResultID: string }) =>
      $post("/private/AirPrice", { SearchID, ResultID }) as Promise<AirPriceResponse>,
  });

  useEffect(() => {
    emptyPassenger();
    mutate({ ResultID: resultId || "", SearchID: searchId || "" });
  }, []);

  if (airPriceData?.RePriceStatus === "FareUnavailable") toast("Fare Unavailable");

  return (
    <Fragment>
      {isPending ? (
        <BookPendingSkeleton />
      ) : (
        <section
          {...rest}
          className="  max-h-full  min-h-screen   w-full bg-slate-800 !pb-20  [--gap-x:1rem]  [--gap-y:1rem]"
        >
          <div className="rounded-lg bg-gray-100 shadow-lg [--gap-x:2rem] [--gap-y:2rem]">
            <Nav />
            <AirPriceDiscountCoupon airPriceData={airPriceData} Error={error} isPending={isPending} isError={isError} />
            <PassengerForm allowHold={currentFlightForBooking?.HoldAllowed || false} />
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Book;
