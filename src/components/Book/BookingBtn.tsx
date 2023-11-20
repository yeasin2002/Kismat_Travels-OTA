import { $post } from "$/utils";
import { useAuth, useProfit } from "$hooks";

import { addPercentage } from "$lib";
import { usePassengers } from "$store";
import { useMutation } from "@tanstack/react-query";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { toast } from "sonner";

interface BookingBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const BookingBtn: FC<BookingBtnProps> = ({ ...rest }) => {
  const { passengers, searchId, resultId } = usePassengers();
  const { currentUser } = useAuth();
  const { profit } = useProfit();

  const fluHubPrebook = useMutation({
    mutationKey: ["fly-hub/airprebook"],
    mutationFn: async (data: any) => $post("fly-hub/airprebook", data),
  });

  const bookingHandler = async () => {
    try {
      if (profit === null) throw new Error("Profit is not defined");

      const flyHubRequestPayload = {
        ResultID: resultId,
        SearchID: searchId,
        Passengers: passengers,
      };

      if (!(searchId && resultId && passengers && currentUser?.id)) {
        return toast.error("Something went wrong, please try again later");
      }

      const fluHubPrebookRes = await fluHubPrebook.mutateAsync(flyHubRequestPayload);
      console.log("🚀 ~ file: BookingBtn.tsx:37 ~ bookingHandler ~ fluHubPrebookRes:", fluHubPrebookRes);
      if (!fluHubPrebookRes) {
        return toast.error("Something went wrong, please try again later");
      }
      window.location.href = fluHubPrebookRes;
    } catch (error) {
      toast.error("Something went wrong, please try again later");
    }

    // fluHubPrebookRes.Results.forEach((result) => {
    //   result.Fares.forEach((flare) => {
    //     flare.BaseFare = addPercentage(flare.BaseFare, profit.$user);
    //   });

    //   result.TotalFare = addPercentage(result.TotalFare, profit.$user);
    // });
  };

  return (
    <button
      {...rest}
      onClick={bookingHandler}
      className="my-4 rounded-md bg-white px-10  py-2 text-xl font-semibold uppercase text-slate-800"
    >
      Continue
    </button>
  );
};
