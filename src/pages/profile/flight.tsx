import Details from "$components/FlightsDetails/Details";
import FareSummary from "$components/FlightsDetails/FareSummary";
import BookedFlight from "$data/FlyHub/Response/PRE-BOOK.json";
import { useRouter } from "next/router";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface flightProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Flight: FC<flightProps> = ({ ...rest }) => {
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
    </section>
  );
};

export default Flight;
