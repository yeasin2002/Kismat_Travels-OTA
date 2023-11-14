import { $post } from "$/utils";
import { usePassengers } from "$store";
import { useMutation } from "@tanstack/react-query";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

interface BookingBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const BookingBtn: FC<BookingBtnProps> = ({ ...rest }) => {
  const { passengers, searchId, resultId } = usePassengers();

  //?  Pre Book
  const fluHubPrebook = useMutation({
    mutationKey: ["prebook"],
    mutationFn: async (data: any) => $post("pre-booking", data),
  });

  const privatePrebook = useMutation({
    mutationKey: ["private/pre-booking"],
    mutationFn: async (data: any) => $post("private/pre-booking", data), //! our server
  });

  //?  Book
  const fluHubBook = useMutation({
    mutationKey: ["booking"],
    mutationFn: async (data: any) => $post("booking", data),
  });

  const privateBook = useMutation({
    mutationKey: ["private/booking"],
    mutationFn: async (data: any) => $post("private/booking", data), //! our server
  });

  async function bookingHandler() {}
  return (
    <button
      onClick={bookingHandler}
      className="mt-4 rounded-md bg-white px-10 py-2 text-xl font-semibold uppercase text-slate-800"
    >
      Continue
    </button>
  );
};
