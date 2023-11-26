import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";

import { Times } from "$components";
import { CalendarCheck2, Minus, PlaneLanding, PlaneTakeoff, Timer } from "lucide-react";

import { SearchResponse } from "$interface";
import { StopQuantityConverter, convertMinutes, isoDateConvert } from "$lib";
import { usePassengers } from "$store";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn/components/ui/accordion";
import { buttonVariants } from "shadcn/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn/components/ui/tabs";
import Details from "./Details";
import FareSummary from "./FareSummary";

import FlightRules from "./FlightRules";

interface FlightDetailsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flightDetails: SearchResponse;
  searchId?: string;
}

export const FlightDetails: FC<FlightDetailsProps> = ({ flightDetails, searchId, ...rest }) => {
  console.log("flightDetails", flightDetails);
  
  const [isOpen, setIsOpen] = useState(false);
  const store = usePassengers();


  return (
    <div {...rest} className="flex flex-col gap-4 rounded-md bg-white p-4 text-slate-700">
      {flightDetails.segments.slice(0, 1).map((airBus) => {
        const { normalDate: normalDepDate, normalTime: normalDepTime } = isoDateConvert(airBus.Origin.DepTime);
        const { normalDate: normalArrDate, normalTime: normalArrTime } = isoDateConvert(airBus.Destination.ArrTime);
        const hourLeft = convertMinutes(airBus.JourneyDuration);

        return (
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="my-6 flex flex-1 flex-col items-center justify-between gap-y-6 md:flex-row md:gap-y-0">
              <div className="flex items-center space-x-2 ">
                <Image
                  src={`https://airlineimages.s3.ap-southeast-1.amazonaws.com/128/${flightDetails.Validatingcarrier}.png`}
                  width={40}
                  height={40}
                  alt="Picture of the airways"
                  className="h-10 w-10 rounded-sm"
                />
                <span>
                  <p className="text-base font-semibold">{airBus.Airline.AirlineName}</p>
                  <p className="text-xs">
                    {airBus.Airline?.AirlineCode}-{airBus.Airline?.FlightNumber}
                  </p>
                </span>
              </div>

              <div className="space-y-1">
                <span className="flex items-center gap-x-2">
                  <Timer size={20} />
                  <p>{normalDepTime}</p>
                </span>
                <span className="flex items-center gap-x-2">
                  <CalendarCheck2 size={20} />
                  <p>{normalDepDate}</p>
                </span>
                <span className="flex items-center gap-x-2">
                  <PlaneTakeoff size={20} />
                  <p>
                    {airBus.Origin.Airport.CityName}, {airBus.Origin.Airport.CountryCode}
                  </p>
                </span>
              </div>

              <div>
                <span className="flex items-center gap-x-2">
                  <Times />
                  <p>{hourLeft}</p>
                </span>
                <Minus size={15} className="w-full  text-center" />
                <p className="text-center">{StopQuantityConverter(airBus.StopQuantity)}</p>
              </div>

              <div className="space-y-1">
                <span className="flex items-center gap-x-2">
                  <Timer size={20} />
                  <p>{normalArrTime}</p>
                </span>
                <span className="flex items-center gap-x-2">
                  <CalendarCheck2 size={20} />
                  <p>{normalArrDate}</p>
                </span>
                <span className="flex items-center gap-x-2">
                  <PlaneLanding size={20} />
                  <p>
                    {airBus.Destination.Airport.CityName}, {airBus.Destination.Airport.CountryCode}
                  </p>
                </span>
              </div>
            </div>
            <div>
              <Link
                onClick={() => {
                  store.setFlightBooking(airBus);
                  store.setSearchId(searchId);
                  store.setResultId(flightDetails.ResultID);
                  store.setFlightDetails(flightDetails);
                  // store.setFlightBooking(airBus);
                }}
                className={buttonVariants({ variant: "default" })}
                href={`/book`}
              >
                Book Now
              </Link>
            </div>
          </div>
        );
      })}

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger
            className="inline-flex items-center justify-end py-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <p>{isOpen ? "Hide" : "Open"} Flight Details</p>
          </AccordionTrigger>
          <AccordionContent>
            <Tabs defaultValue="details" className="mt-4 w-full">
              <TabsList className="[&>*]:uppercase">
                <TabsTrigger value="details">Flight Details </TabsTrigger>
                <TabsTrigger value="FareSummary">Fare Summary</TabsTrigger>
                {!flightDetails.isMiniRulesAvailable && <TabsTrigger value="FlightRules">Flight Rules</TabsTrigger>}
          
              </TabsList>

              <TabsContent value="details" className="w-full">
                <Details SegmentDetails={flightDetails.segments} airbusImg={flightDetails.Validatingcarrier} />
              </TabsContent>
              <TabsContent value="FareSummary">
                <FareSummary FareDetails={flightDetails.Fares} />
              </TabsContent>
              {!flightDetails.isMiniRulesAvailable && (
                <TabsContent value="FlightRules">
                  <FlightRules />
                </TabsContent>
              )}
            
            </Tabs>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
