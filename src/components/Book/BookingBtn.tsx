import { $post } from "$/utils";
import { useAuth } from "$hooks";
import { usePassengers } from "$store";
import { useMutation } from "@tanstack/react-query";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEventHandler } from "react";
import { toast } from "sonner";

interface BookingBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  allowHold: boolean | undefined;
}

export const BookingBtn: FC<BookingBtnProps> = ({ allowHold, ...rest }) => {
  const { passengers, searchId, resultId } = usePassengers();
  const { currentUser } = useAuth();

  //?  Pre Book
  const fluHubPrebook = useMutation({
    mutationKey: ["flyHub/prebook"],
    mutationFn: async (data: any) => $post("private/AirPreBook", data),
  });

  const privatePrebook = useMutation({
    mutationKey: ["pre-booking"],
    mutationFn: async (data: any) => $post("pre-booking", data), //! our server
  });

  //?  Book
  const fluHubBook = useMutation({
    mutationKey: ["flyHub/booking"],
    mutationFn: async (data: any) => $post("private/AirBook", data),
  });

  const privateBook = useMutation({
    mutationKey: ["booking"],
    mutationFn: async (data: any) => $post("booking", data), //! our server
  });

  const bookingHandler: MouseEventHandler = async (e) => {
    try {
      const flyHubReq = {
        ResultID: resultId,
        searchId,
        passengers: passengers,
      };

      if (!(searchId && resultId && passengers && currentUser?.id))
        return toast.error("Something went wrong, please try again later");

      if (allowHold) {
        const res = await fluHubPrebook.mutateAsync(flyHubReq);
        console.log(res);
        if (res.Error && typeof res.Error.ErrorCode === "number") {
          return toast.error("Something went wrong, please try again later");
        }

        return await privatePrebook.mutateAsync({
          ResultId: resultId,
          userId: currentUser?.id,
          searchId,
          passengers: passengers,
          response: res,
        });
      } else {
        const res = await fluHubBook.mutateAsync(flyHubReq);
        if (res.Error && typeof res.Error.ErrorCode === "number") {
          return toast.error("Something went wrong, unable to book");
        }
        return privateBook.mutateAsync({
          userId: currentUser?.id,
          bookingId: "string",
          response: res,
          passengers: passengers,
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
