import Image from "next/image";
import { FC, HTMLAttributes } from "react";

import { Segment } from "$interface";
import { StopQuantityConverter, convertMinutes, isoDateConvert, remainingHour } from "$lib";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn/components/ui/tabs";

interface DetailsProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  SegmentDetails: Segment[];
  airbusImg: string;
}

const Details: FC<DetailsProps> = ({ SegmentDetails, airbusImg, ...rest }) => {
  console.log("🚀 ~ file: Details.tsx:14 ~ airbusImg:", airbusImg);

  const availableAirline = SegmentDetails.map((item) => {
    return item.Airline.AirlineCode + "-" + item.Airline.FlightNumber;
  });

  return (
    <div className="w-full rounded-md border border-gray-300 p-2 " {...rest}>
      <p className="px-2 py-4">Select Your Flight</p>
      <hr />

      <Tabs defaultValue={availableAirline[0]} className="w-full px-4 py-2">
        {availableAirline.length > 1 && (
          <TabsList>
            {availableAirline.map((val) => {
              return <TabsTrigger value={val}>{val}</TabsTrigger>;
            })}
          </TabsList>
        )}
        {SegmentDetails.map((airline) => {
          const uuid = airline.Airline.AirlineCode + "-" + airline.Airline.FlightNumber;
          const imgUrl = `https://airlineimages.s3.ap-southeast-1.amazonaws.com/128/${airbusImg}.png`;
          const { normalDate: normalDepDate, normalTime: normalDepTime } = isoDateConvert(airline.Origin.DepTime);
          const { normalDate: normalArrDate, normalTime: normalArrTime } = isoDateConvert(airline.Destination.ArrTime);

          return (
            <TabsContent value={uuid} className="w-full">
              <div className="w-full p-4">
                <div className="flex items-center space-x-2 ">
                  <Image
                    src={imgUrl}
                    alt="Picture of the airways"
                    className="h-10 w-10 rounded-sm"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-base font-semibold md:text-lg">{airline.Airline.AirlineName}</p>
                    <p className="text-xs">
                      {airline.Airline.AirlineCode}-{airline.Airline.FlightNumber}
                    </p>
                    <p>Operating By : {airline.Airline.OperatingCarrier}</p>
                    <p>
                      CabinClass : {airline.Airline.CabinClass} ({airline.Airline.BookingClass}){" "}
                    </p>
                  </div>
                </div>

                <div className="space-y-10 ">
                  <div className="my-4 grid grid-cols-3">
                    <div>
                      <p>{normalDepTime}</p>
                      <p>{normalDepDate}</p>
                      <p> Terminal : {airline.Origin.Airport.Terminal} </p>
                      <p>
                        {airline.Origin.Airport.AirportName}, {airline.Origin.Airport.AirportCode}
                      </p>
                      <p>
                        {airline.Origin.Airport.CityName} {airline.Origin.Airport.CountryName}
                      </p>
                    </div>

                    <div className="shrink">
                      <p className="text-center"> {convertMinutes(airline.JourneyDuration)} </p>
                      <p className="text-center">{StopQuantityConverter(airline.StopQuantity)}</p>
                    </div>

                    <div className="[&>*]:text-end  ">
                      <p>{normalArrTime}</p>
                      <p>{normalArrDate}</p>
                      <p> Terminal : {airline.Destination.Airport.Terminal} </p>
                      <p>
                        {airline.Destination.Airport.AirportName}, {airline.Destination.Airport.AirportCode}
                      </p>
                      <p>
                        {airline.Destination.Airport.CityName} {airline.Destination.Airport.CountryName}
                      </p>
                    </div>
                  </div>

                  <div className="   flex justify-between">
                    <div className="">
                      <p className="ticketExtraDetailsTitle">BAGGAGE :</p>
                      <p className="ticketExtraDetailsItem">{airline.Baggage}</p>
                    </div>
                    <div className="">
                      <p className="ticketExtraDetailsTitle">CHECK IN :</p>
                      <span className="ticketExtraDetailsItem">
                        {airline.baggageDetails.map((value) => {
                          return <p> {value.Checkin} </p>;
                        })}
                      </span>
                    </div>
                    <div>
                      <p className="ticketExtraDetailsTitle">CABIN :</p>
                      <span className="ticketExtraDetailsItem">
                        {airline.baggageDetails.map((value) => {
                          return <p> {value.Cabin ? value.Cabin : "None"} </p>;
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Details;
