import { Fare } from "$interface";
import { DetailedHTMLProps, FC, HTMLAttributes, useId } from "react";

interface FareSummaryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  FareDetails: Fare[];
}

const FareSummary: FC<FareSummaryProps> = ({ FareDetails, ...rest }) => {
  return (
    <div className="space-y-4 rounded-md border border-gray-200 p-4" {...rest}>
      <h3 className="text-xl font-bold ">Fares </h3>

      {FareDetails.map((fare) => {
        const id = useId();
        return (
          <table className="w-full border-collapse" key={id}>
            <thead>
              <tr>
                <th className="tablesItems ">BaseFare</th>
                <th className="tablesItems ">Tax</th>
                <th className="tablesItems ">Currency</th>
                <th className="tablesItems ">OtherCharges</th>
                <th className="tablesItems ">Discount</th>
                <th className="tablesItems ">AgentMarkUp</th>
                <th className="tablesItems ">PaxType</th>
                <th className="tablesItems ">PassengerCount</th>
                <th className="tablesItems ">ServiceFee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tablesItems">{fare.BaseFare}</td>
                <td className="tablesItems">{fare.Tax} </td>
                <td className="tablesItems"> {fare.Currency} </td>
                <td className="tablesItems"> {fare.OtherCharges} </td>
                <td className="tablesItems"> {fare.Discount} </td>
                <td className="tablesItems"> {fare.AgentMarkUp} </td>
                <td className="tablesItems"> {fare.PaxType} </td>
                <td className="tablesItems"> {fare.PassengerCount} </td>
                <td className="tablesItems"> {fare.ServiceFee} </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default FareSummary;
