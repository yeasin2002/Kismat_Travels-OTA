import { $get } from "$/utils";
import { useAuth } from "$hooks";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes, useEffect } from "react";
import { Button, buttonVariants } from "shadcn/components/ui";

interface OnHoldProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

// preBook
export const Booked: FC<OnHoldProps> = ({ ...rest }) => {
  const { currentUser } = useAuth();

  const { isLoading, error, data } = useQuery({
    queryKey: ["onHold"],
    queryFn: async () => $get("/booking/all"),
    staleTime: 0,
  });
  console.log("🚀 ~ file: Booked.tsx:19 ~ data:", data);

  return (
    <Fragment>
      <div {...rest}>
        <h2 className="profileHeading">Booked Tickets</h2>
        <div className="relative mt-8 overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Booking Id
                </th>
                <th scope="col" className="px-6 py-3">
                  destination
                </th>
                <th scope="col" className="px-6 py-3">
                  passenger
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item: any, i: any) => {
                  return (
                    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800" key={i}>
                      <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {item.bookingId}
                      </th>
                      <td className="px-6 py-4">
                        {item.response.Results[0].segments[0].Destination.Airport.AirportName},
                        {item.response.Results[0].segments[0].Destination.Airport.CityName}
                      </td>
                      <td className="px-6 py-4">{item.passengers.length}</td>
                      <td className="px-6 py-4">{new Date(item.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        {item.payment} {item?.payment_online?.all_data.currency}
                      </td>
                      <td className="px-6 py-4">
                        <Link className={buttonVariants()} href={`/bookings/${item.id}`}>
                          Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
