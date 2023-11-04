import airways from "$assets/temp/qatar-airways.jpg";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

import { Times } from "$components";
import { CalendarCheck2, Minus, PlaneLanding, PlaneTakeoff, Timer } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn/components/ui/accordion";
import { Button } from "shadcn/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn/components/ui/tabs";
import Cancellation from "./Cancellation";
import DateChange from "./DateChange";
import Details from "./Details";
import FareSummary from "./FareSummary";

interface FlightDetailsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export function FlightDetails({ ...rest }: FlightDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div {...rest} className="mb-12 rounded-md bg-white p-2 text-slate-700">
      <div className="flex  items-center  justify-between py-4">
        <div className="flex flex-1  items-center  justify-around ">
          <div className="flex items-center space-x-2 ">
            <Image src={airways} alt="Picture of the airways" className="h-10 w-10 rounded-sm" />
            <span>
              <p className="text-base font-semibold">Qatar Airways</p>
              <p className="text-xs">QR-123</p>
            </span>
          </div>

          <div>
            <span className="flex items-center gap-x-2">
              <CalendarCheck2 size={20} />
              <p>2:00</p>
            </span>
            <span className="flex items-center gap-x-2">
              <PlaneTakeoff size={20} />
              <p>Dhaka, Bangladesh</p>
            </span>
          </div>

          <div>
            <span className="flex items-center gap-x-2  ">
              <Times />
              <p>02 h 20 m</p>
            </span>
            <Minus size={15} className=" w-full  text-center" />
            <p className="text-center">Non Stop</p>
          </div>

          <div>
            <span className="flex items-center gap-x-2">
              <CalendarCheck2 size={20} />
              <p>2:00</p>
            </span>
            <span className="flex items-center gap-x-2">
              <PlaneLanding size={20} />
              <p>Dhaka, Bangladesh</p>
            </span>
          </div>
        </div>
        <Button className="">Book Now </Button>
      </div>

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
}
