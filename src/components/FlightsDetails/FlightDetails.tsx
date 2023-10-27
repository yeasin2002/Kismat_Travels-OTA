"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn/components/ui/accordion";
import { Button } from "shadcn/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn/components/ui/tabs";
import Cancellation from "./Cancellation";
import DateChange from "./DateChange";
import Details from "./Details";
import FareSummary from "./FareSummary";

export function FlightDetails() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="my-5 flex  items-center justify-between">
        <div className="flex w-full flex-col  justify-between md:flex-row md:items-center">
          <div className="my-4  flex flex-1  flex-col items-center justify-around gap-y-6 md:flex-row   ">
            <div className="searchCardItem">
              <div>
                <p>akas air </p>
                <p>QP 1128</p>
              </div>
              <div>
                <p>16:00</p>
                <p>New Delhi</p>
              </div>
            </div>
            <div className="flat-center shrink justify-center  ">
              <p>02 h 20 m</p>
              <span className="inline-block h-1 w-20 rounded-full bg-teal-400 lg:w-full "></span>
              <p>non stop</p>
            </div>
            <div className="searchCardItem">
              <div>
                <p>akas air </p>
                <p>QP 1128</p>
              </div>
              <div>
                <p>16:00</p>
                <p>New Delhi</p>
              </div>
            </div>
          </div>
          <Button className="">Book Now </Button>
        </div>
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
