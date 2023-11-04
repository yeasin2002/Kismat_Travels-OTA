import { DetailedHTMLProps, HTMLAttributes } from "react";

interface FareSummaryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  summaryDetails: {
    BaseFare: number;
    Tax: number;
    Currency: string;
    OtherCharges: number;
    Discount: number;
    PaxType: number;
    PassengerCount: number;
    ServiceFee: number;
  }[];
}

const FareSummary = () => {
  const arr = [
    {
      BaseFare: 14697.67,
      Tax: 2068.2,
      Currency: "BDT",
      OtherCharges: 716.85,
      Discount: 0.0,
      PaxType: 1,
      PassengerCount: 1,
      ServiceFee: 0.0,
    },
  ];
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
