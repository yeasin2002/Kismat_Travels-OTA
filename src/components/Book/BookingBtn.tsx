import { $post } from "$/utils";
import { useAuth, useProfit } from "$hooks";
import { BookFlyHubResponse, BookResponse, PreBookFlyHubResponse, PreBookResponse } from "$interface/book.interface";
import { addPercentage } from "$lib";
import { usePassengers } from "$store";
import { useMutation } from "@tanstack/react-query";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEventHandler } from "react";
import { toast } from "sonner";

interface BookingBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  allowHold: boolean | undefined;
}

/* /private/* after * goes to flyhub */
export const BookingBtn: FC<BookingBtnProps> = ({ allowHold, ...rest }) => {
  const { passengers, searchId, resultId } = usePassengers();
  const { currentUser } = useAuth();
  const { profit } = useProfit();

  //?  Pre Book
  const fluHubPrebook = useMutation({
    mutationKey: ["flyHub/prebook"],
    mutationFn: async (data: any) => $post("private/AirPreBook", data) as Promise<PreBookFlyHubResponse>,
  });

  const prebook = useMutation({
    mutationKey: ["pre-booking"],
    mutationFn: async (data: any) => $post("pre-booking", data) as Promise<PreBookResponse>, //! our server
  });

  //?  Book
  const fluHubBook = useMutation({
    mutationKey: ["flyHub/booking"],
    mutationFn: async (data: any) => $post("private/AirBook", data) as Promise<BookFlyHubResponse>,
  });

  const booking = useMutation({
    mutationKey: ["booking"],
    mutationFn: async (data: any) => $post("booking", data) as Promise<BookResponse>, //! our server
  });

  const bookingHandler = async () => {
    if (profit === null) throw new Error("Profit is not defined");

    try {
      const flyHubRequestPayload = {
        ResultID: resultId,
        SearchID: searchId,
        Passengers: passengers,
      };

      if (!(searchId && resultId && passengers && currentUser?.id)) {
        return toast.error("Something went wrong, please try again later");
      }

      const fluHubPrebookRes = await fluHubPrebook.mutateAsync(flyHubRequestPayload);

      if (fluHubPrebookRes.Error !== null) {
        return toast.error("Something went wrong, please try again later");
      }

      fluHubPrebookRes.Results.forEach((result) => {
        result.Fares.forEach((flare) => {
          flare.BaseFare = addPercentage(flare.BaseFare, profit.$user);
        });

        result.TotalFare = addPercentage(result.TotalFare, profit.$user);
      });

      await prebook.mutateAsync({
        ResultId: resultId,
        userId: currentUser?.id,
        searchId: fluHubPrebookRes.SearchId,
        passengers: passengers,
        response: fluHubPrebookRes,
        profit: profit.$user,
      });

      if (!allowHold) {
        const fluHubBookRes = await fluHubBook.mutateAsync(flyHubRequestPayload);

        if (fluHubBookRes.Error !== null) {
          return toast.error("Something went wrong, please try again later");
        }

        fluHubBookRes.Results.forEach((result) => {
          result.Fares.forEach((flare) => {
            flare.BaseFare = addPercentage(flare.BaseFare, profit.$user);
          });

          result.TotalFare = addPercentage(result.TotalFare, profit.$user);
        });

        await booking.mutateAsync({
          userId: currentUser?.id,
          bookingId: fluHubBookRes.BookingID,
          response: fluHubBookRes,
          passengers: passengers,
          profit: profit.$user,
        });
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error("Something went wrong, please try again later");
    }
  };

  return (
    <button
      onClick={bookingHandler}
      className="mt-4 rounded-md bg-white px-10 py-2 text-xl font-semibold uppercase text-slate-800"
    >
      Continue
    </button>
  );
};
