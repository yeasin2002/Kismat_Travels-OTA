import Details from "$components/FlightsDetails/Details";
import FareSummary from "$components/FlightsDetails/FareSummary";
import BookedFlight from "$data/FlyHub/Response/PRE-BOOK.json";
import { usePassengers } from "$store";
import { useRouter } from "next/router";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
interface flightProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Flight: FC<flightProps> = ({ ...rest }) => {
  const { passengers } = usePassengers();

  const router = useRouter();
  return (
    <section {...rest} className="p-4">
      {BookedFlight.Results.map((val) => {
        return (
          <div className="space-y-5">
            <Details SegmentDetails={val.segments} airbusImg={val.Validatingcarrier} />
            <FareSummary FareDetails={val.Fares} />
          </div>
        );
      })}

      {/*  tables  */}

      <div className="relative w-full space-y-6 overflow-x-auto rounded-md border border-gray-300 p-4 shadow-md sm:rounded-lg">
        <h3>Passenger Details</h3>
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Passenger Name
              </th>
              <th scope="col" className="px-6 py-3">
                PaxType
              </th>
              <th scope="col" className="px-6 py-3">
                Nationality
              </th>
              <th scope="col" className="px-6 py-3">
                ContactNumber
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Flight;
