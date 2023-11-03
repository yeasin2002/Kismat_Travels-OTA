import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { selectBoxItem } from "$/data";
import AirbusLogo from "$assets/temp/qatar-airways.jpg";
import { Nav } from "$components";
import { PassengerDetails } from "$components/Book/PassengerDetails";
import { CalendarCheck2, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { SelectBox } from "shadcn/components/ui/SelectBox";
import { Checkbox } from "shadcn/components/ui/checkbox";

type Inputs = {
  example: string;
  exampleRequired: string;
};

interface BookProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Book: FC<BookProps> = ({ ...rest }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const formSubmitHandler: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section {...rest}>
      <Nav />
      <form className="  w-full bg-slate-800 p-4 lg:p-8" onSubmit={handleSubmit(formSubmitHandler)}>
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

        <div {...rest}>
          <div id="travelerDetails" className="space-y-8 rounded-lg bg-gray-100 p-4 shadow-lg lg:p-8">
            <h3 className="text-xl font-bold text-gray-600">Passenger Details </h3>

            <PassengerDetails />
          </div>
        </div>
        <button className="mt-4 rounded-full bg-white px-10 py-2 text-xl font-semibold text-slate-800">Continue</button>
      </form>
    </section>
  );
};

export default Book;
