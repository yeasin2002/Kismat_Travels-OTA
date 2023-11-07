import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import { $post } from "$/utils";
import AirbusLogo from "$assets/temp/qatar-airways.jpg";
import { LeadPassenger, Nav } from "$components";
import { PassengerDetails } from "$components/Book/PassengerDetails";

import { SpinnerIcon } from "$icons";
import { usePassengers } from "$store";
import { CalendarCheck2, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn/components/ui/accordion";

interface BookProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Book: FC<BookProps> = ({ ...rest }) => {
  const { passengers } = usePassengers();
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["booking"],
    mutationFn: async (data: any) => $post("privet/AirBook", data),
  });

  const bookingHandler = async () => {
    await mutateAsync({
      SearchID: "",
      ResultID: "",
      passengers: passengers,
    });
  };

  const totalAdultPassengers = [1, 2, 3, 4] as const;
  const totalChildPassengers = [1, 2, 3] as const;
  const totalInfantPassengers = [1, 2] as const;

  return (
    <section {...rest}>
      <Nav />
      <div className="w-full  space-y-5 bg-slate-800 p-4 lg:p-8">
        <div>
          <h2 className=" p-5 text-2xl font-bold text-white">Complete Your Booking</h2>
          <div>
            <div className="    rounded-sm bg-gray-100">
              <div className="mx-3 my-5 py-5  shadow-lg  lg:py-8">
                <div className="flex flex-col justify-between space-y-10 p-8 sm:flex-row sm:items-center  sm:space-y-0">
                  <div>
                    <p className="text-2xl font-bold"> New Delhi → Mumbai</p>
                    <div className="my-2  flex justify-between">
                      <p>
                        <span className="mb-2 mr-3 flex items-center  justify-center gap-x-1 rounded-sm p-1  font-semibold ">
                          <CalendarCheck2 size={18} />
                          Tuesday, 20 July 2021
                        </span>
                        Non Stop 2H 55M
                      </p>
                    </div>
                  </div>
                  <div className="    rounded-sm bg-gray-100 ">
                    <div className="flex justify-between ">
                      <p className="text-base font-medium text-slate-700">Base Fare</p>
                      <p className="text-base font-medium text-slate-700">₹ 100</p>
                    </div>

                    <div className="mt-2 flex justify-between gap-x-2">
                      <p className="text-base font-medium text-slate-700">Taxes and Surcharges</p>
                      <p className="text-base font-medium text-slate-700">₹ 100</p>
                    </div>
                    <div className="h-[0.10rem] w-full rounded-lg  bg-gradient-to-l  from-teal-400 to-teal-700" />
                    <div className=" mt-2 flex justify-between">
                      <p className="text-base font-medium text-slate-700">Total Amount</p>
                      <p className="text-base font-medium text-slate-700">₹ 200</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10   space-y-8 rounded-lg  bg-gray-200 p-2 sm:mx-4  sm:p-6">
                  <div className="  flex items-center  gap-x-1  sm:gap-x-2  ">
                    <Image src={AirbusLogo} alt="Airbus Logo" className="h-10 w-10" />
                    <p className="font-semibold text-gray-600"> Qatar Airways</p>
                    <span className="rounded-full border border-gray-400 px-2 text-gray-400">Airbus A320</span>
                  </div>

                  <div className="space-y-4 ">
                    <p className="flex items-center  gap-x-2 sm:gap-x-4">
                      <PlaneTakeoff /> <span className="font-bold">New Delhi</span> Indira Gandhi International Airport,
                      Terminal T2
                    </p>
                    <p className="flex items-center   gap-x-2 sm:gap-x-4">
                      <PlaneLanding />
                      <span className="font-bold">Mumbai </span> Chhatrapati Shivaji International Airport, Terminal T1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 rounded-lg bg-gray-100 p-4 px-4 shadow-lg lg:p-8">
          <LeadPassenger />
        </div>

        <div>
          <div id="travelerDetails" className="space-y-8 rounded-lg bg-gray-100 p-4 px-4 shadow-lg lg:p-8">
            <h3 className=" text-xl  font-bold text-gray-600">Passenger Details </h3>
            <div>
              <p>Adult</p>
              <Accordion type="single" collapsible>
                {totalAdultPassengers.map((item, i) => {
                  let index = i + 1;
                  return (
                    <AccordionItem
                      value={`value-${index}`}
                      key={index}
                      className="my-2 rounded-lg bg-white px-2 py-4 shadow-lg"
                    >
                      <AccordionTrigger> Passenger {index}</AccordionTrigger>
                      <AccordionContent>
                        <PassengerDetails index={index} paxType="Adult" />
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
            <div>
              <p>Child</p>
              <Accordion type="single" collapsible>
                {totalChildPassengers.map((item, i) => {
                  let index = i + 1;
                  return (
                    <AccordionItem
                      value={`value-${index}`}
                      key={index}
                      className="my-2 rounded-lg bg-white px-2 py-4 shadow-lg"
                    >
                      <AccordionTrigger> Passenger {index}</AccordionTrigger>
                      <AccordionContent>
                        <PassengerDetails index={index} paxType="Child" />
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

            <div>
              <p>Infant</p>
              <Accordion type="single" collapsible>
                {totalInfantPassengers.map((item, i) => {
                  let index = i + 1;
                  return (
                    <AccordionItem
                      value={`value-${index}`}
                      key={index}
                      className="my-2 rounded-lg bg-white px-2 py-4 shadow-lg"
                    >
                      <AccordionTrigger> Passenger {index}</AccordionTrigger>
                      <AccordionContent>
                        <PassengerDetails index={index} paxType="Infant" />
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
        <button
          onClick={bookingHandler}
          className="mt-4 rounded-full bg-white px-10 py-2 text-xl font-semibold text-slate-800"
        >
          {!isPending ? "Continue" : <SpinnerIcon />}
        </button>
      </div>
    </section>
  );
};

export default Book;
