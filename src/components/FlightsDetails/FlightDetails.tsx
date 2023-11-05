import airways from "$assets/temp/qatar-airways.jpg";
import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";

import { Times } from "$components";
import { CalendarCheck2, Minus, PlaneLanding, PlaneTakeoff, Timer } from "lucide-react";

import { SearchResponse } from "$interface";
import { isoDateToHour } from "$lib/ISO_DateToHour";
import { remainingHour } from "$lib/RemainingTime";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn/components/ui/accordion";
import { Button } from "shadcn/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn/components/ui/tabs";
import Cancellation from "./Cancellation";
import DateChange from "./DateChange";
import Details from "./Details";
import FareSummary from "./FareSummary";

interface FlightDetailsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flightDetails: SearchResponse;
}

export const FlightDetails: FC<FlightDetailsProps> = ({ flightDetails, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...rest} className="mb-12  rounded-md bg-white p-2 text-slate-700">
      {flightDetails.segments.map((airBus) => {
        const depTImes = isoDateToHour(airBus.Origin.DepTime);
        const airTIme = isoDateToHour(airBus.Destination.ArrTime);
        const hourLeft = remainingHour(flightDetails.LastTicketDate);
        return (
          <div className="my-6 flex  flex-1  flex-col  items-center justify-around gap-y-6 md:flex-row md:gap-y-0">
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

            <div>
              <span className="flex items-center gap-x-2">
                <CalendarCheck2 size={20} />
                <p>{depTImes}</p>
              </span>
              <span className="flex items-center gap-x-2">
                <PlaneTakeoff size={20} />
                <p>Dhaka, Bangladesh</p>
              </span>
            </div>

            <div>
              <span className="flex items-center gap-x-2  ">
                <Times />
                <p>{hourLeft}</p>
              </span>
              <Minus size={15} className=" w-full  text-center" />
              <p className="text-center">Non Stop</p>
            </div>

            <div>
              <span className="flex items-center gap-x-2">
                <CalendarCheck2 size={20} />
                <p>{airTIme}</p>
              </span>
              <span className="flex items-center gap-x-2">
                <PlaneLanding size={20} />
                <p>Dhaka, Bangladesh</p>
              </span>
            </div>
          </div>
        );
      })}

      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" inline-flex items-center justify-end">
            <p onClick={() => setIsOpen((prev) => !prev)}>{isOpen ? "Hide" : "Open"} Flight Details</p>
          </AccordionTrigger>
          <AccordionContent>
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="[&>*]:uppercase">
                <TabsTrigger value="details">Flight Details </TabsTrigger>
                <TabsTrigger value="FareSummary">Fare Summary</TabsTrigger>
                <TabsTrigger value="Cancellation">Cancellation</TabsTrigger>
                <TabsTrigger value="DateChange">Date Change</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="w-full">
                <Details />
              </TabsContent>
              <TabsContent value="FareSummary">
                <FareSummary />
              </TabsContent>
              <TabsContent value="Cancellation">
                <Cancellation />
              </TabsContent>
              <TabsContent value="DateChange">
                <DateChange />
              </TabsContent>
            </Tabs>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
