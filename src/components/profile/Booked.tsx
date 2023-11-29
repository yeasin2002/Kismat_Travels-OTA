//  Temporary Data for testing, Remove it now
import data from "$data/FlyHub/Response/PRE-BOOK.json";

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

  const {
    isLoading,
    error,
    data: holdData,
  } = useQuery({
    queryKey: ["onHold"],
    queryFn: async () => $get("/booking/all"),
    staleTime: 0,
  });

  //  Replace holdData with data
  console.log(holdData);

  return (
    <Fragment>
      {data.Results.map((result) => {
        return (
          <div {...rest} key={result.ResultID}>
            <h2 className="profileHeading">Booked Tickets</h2>
            <div className="relative mt-8 overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Airbus
                    </th>
                    <th scope="col" className="px-6 py-3">
                      From
                    </th>
                    <th scope="col" className="px-6 py-3">
                      To
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {result.segments.map((item) => {
                    return (
                      <tr
                        className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={item.Airline.AirlineCode + item.Destination.Airport.AirportName}
                      >
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                          Qatar Airways
                        </th>
                        <td className="px-6 py-4">{item.Origin.Airport.AirportName}</td>
                        <td className="px-6 py-4">{item.Destination.Airport.AirportName}</td>
                        <td className="px-6 py-4">{"$100  "}</td>
                        <td className="px-6 py-4">
                          <Link
                            className={buttonVariants()}
                            href={"/profile/" + item.Airline.AirlineCode + item.Destination.Airport.AirportName}
                          >
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
        );
      })}
    </Fragment>
  );
};
