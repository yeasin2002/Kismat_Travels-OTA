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

  const MainComponent = (
    <section {...rest} className="  max-h-full  min-h-screen   w-full bg-slate-800  ">
      <div className="rounded-lg bg-gray-100 shadow-lg [--gap-x:2rem] [--gap-y:2rem]">
        <Nav />
        <AirPriceDiscountCoupon airPriceData={airPriceData} error={error} isPending={isPending} isError={isError} />
        <PassengerForm />
      </div>
    </section>
  );

  return <Fragment>{isPending ? <BookPendingSkeleton /> : MainComponent}</Fragment>;
};

export default Book;
