import { Fare } from "$interface";
import { X } from "lucide-react";
import { DetailedHTMLProps, FC, HTMLAttributes, useId } from "react";

interface FareSummaryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  FareDetails: Fare[];
}

const FareSummary: FC<FareSummaryProps> = ({ FareDetails, ...rest }) => {
  return (
    <div className="space-y-4 rounded-md border border-gray-200 p-4" {...rest}>
      <h3 className="text-xl font-bold ">Fares </h3>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="tablesItems ">Fare Summary</th>
            <th className="tablesItems ">Base Fare</th>
            <th className="tablesItems ">Tex + Fees</th>
            <th className="tablesItems ">Per Passenger</th>
            <th className="tablesItems ">Total</th>
          </tr>
        </thead>
        <tbody>
          {FareDetails.map((fare) => {
            const totalOtherCharge = fare.Tax + fare.OtherCharges;
            const totalCost = fare.BaseFare + fare.Tax + fare.OtherCharges * fare.PassengerCount;
            return (
              <tr>
                <td className="tablesItems"> {fare.PaxType} </td>
                <td className="tablesItems"> {fare.BaseFare} </td>
                <td className="tablesItems"> {totalOtherCharge} </td>
                <td className="tablesItems flex">
                  {fare.BaseFare + totalOtherCharge} X {fare.PassengerCount}
                </td>
                <td className="tablesItems font-bold">{totalCost}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FareSummary;
