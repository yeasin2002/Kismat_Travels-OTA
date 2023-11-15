import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from "react";

import AirbusLogo from "$assets/temp/qatar-airways.jpg";
import { LeadPassenger, Nav } from "$components";
import { PassengerDetails } from "$components/Book/PassengerDetails";

import { BookingBtn } from "$components/Book/BookingBtn";
import { DisplayBookingPrice } from "$components/Book/DisplayBookingPrice";
import { usePassengers, useTripType } from "$store";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn/components/ui/accordion";

function createArray(length: number | any) {
  if (typeof length !== "number" || isNaN(length)) return [];
  return Array(length)
    .fill(null)
    .map((_, i) => i + 1);
}

interface BookProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Book: FC<BookProps> = ({ ...rest }) => {
  const { passengers, flightBooking, flightDetails, resultId, emptyPassenger } = usePassengers();
  const currentStore = useTripType((store) => store.getCurrentStore());

  const totalAdultPassengers = createArray(currentStore?.AdultQuantity! - 1);
  const totalChildPassengers = createArray(currentStore?.ChildQuantity);
  const totalInfantPassengers = createArray(currentStore?.InfantQuantity);
  const total = currentStore?.AdultQuantity! + currentStore?.ChildQuantity! + currentStore?.InfantQuantity!;

  const currentFlightForBooking = flightDetails.find((val) => val.ResultID === resultId);

  useEffect(() => {
    emptyPassenger();
  }, []);

  return (
    <section {...rest} className="[--gap-x:1rem]  [--gap-y:1rem]">
      <Nav />
      <div>
        <div className="w-full  space-y-5 bg-slate-800 p-4 !pb-20 lg:p-8 ">
          <DisplayBookingPrice />

          {/*  */}
          <div className="rounded-lg bg-gray-100 shadow-lg [--gap-x:2rem] [--gap-y:2rem]">
            <LeadPassenger />
          </div>
          {total > 1 && (
            <div>
              <div id="travelerDetails" className="space-y-8 rounded-lg bg-gray-100 px-4 py-8 shadow-lg lg:px-8">
                <p className="col-span-full text-2xl font-bold text-gray-800">Passenger details</p>

                {totalAdultPassengers.length > 0 && (
                  <div>
                    <p>Adult</p>
                    <Accordion type="single" collapsible>
                      {totalAdultPassengers.map((item, i) => (
                        <AccordionItem
                          value={`value-${i}`}
                          key={`adult-${i}`}
                          className="my-2 rounded-lg bg-white shadow-lg"
                        >
                          <AccordionTrigger className="px-[var(--gap-x)] py-[var(--gap-y)] data-[state=open]:pb-0">
                            {(i + 1).toString().padStart(2, "0")}. Adult Passenger
                          </AccordionTrigger>
                          <AccordionContent>
                            <PassengerDetails index={i} paxType="Adult" />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}

                {totalChildPassengers.length > 0 && (
                  <div>
                    <p>Child</p>
                    <Accordion type="single" collapsible>
                      {totalChildPassengers.map((item, i) => (
                        <AccordionItem
                          value={`value-${i}`}
                          key={`child-${i}`}
                          className="my-2 rounded-lg bg-white shadow-lg"
                        >
                          <AccordionTrigger className="px-[var(--gap-x)] py-[var(--gap-y)] data-[state=open]:pb-0">
                            {(i + 1).toString().padStart(2, "0")}. Child Passenger
                          </AccordionTrigger>
                          <AccordionContent>
                            <PassengerDetails index={i} paxType="Child" />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}

                {totalInfantPassengers.length > 0 && (
                  <div>
                    <p>Infant</p>
                    <Accordion type="single" collapsible>
                      {totalInfantPassengers.map((_, i) => (
                        <AccordionItem
                          value={`value-${i}`}
                          key={`infant-${i}`}
                          className="my-2 rounded-lg bg-white shadow-lg"
                        >
                          <AccordionTrigger className="px-[var(--gap-x)] py-[var(--gap-y)] data-[state=open]:pb-0">
                            {(i + 1).toString().padStart(2, "0")}. Infant Passenger
                          </AccordionTrigger>
                          <AccordionContent>
                            <PassengerDetails index={i} paxType="Infant" />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}
              </div>
            </div>
          )}

          <BookingBtn allowHold={currentFlightForBooking?.HoldAllowed} />
        </div>
      </div>
    </section>
  );
};

export default Book;
