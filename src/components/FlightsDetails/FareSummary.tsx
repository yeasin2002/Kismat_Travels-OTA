import { Fare } from "$interface";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface FareSummaryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  FareDetails: Fare[];
}

const FareSummary: FC<FareSummaryProps> = () => {
  return (
    <div className="space-y-4 rounded-md border border-gray-200 p-4">
      <h3>Fare breakup</h3>
      <div>
        <div className="flex gap-x-20">
          <div>
            <p>Total</p>
            <p>Base Fare</p>
            <p>Surcharges</p>
          </div>
          <div>
            <p>₹ 5,347</p>
            <p>₹ 4,548</p>
            <p>₹ 799</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareSummary;
