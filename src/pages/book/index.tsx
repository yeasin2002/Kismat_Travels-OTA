import AirbusLogo from "$assets/temp/qatar-airways.jpg";
import { Button, Nav } from "$components";
import { CalendarCheck2, PlaneLanding, PlaneTakeoff } from "lucide-react";
import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { SelectBox } from "shadcn/components/ui/SelectBox";
import { Checkbox } from "shadcn/components/ui/checkbox";

interface BookProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Book: FC<BookProps> = ({ ...rest }) => {
  const [isGstExist, setIsGstExist] = useState(false);
  return (
    <div {...rest}>
      <Nav />
      <section className="  w-full bg-slate-800 p-4">
        <div>
          <h2 className=" my-5 text-2xl font-bold text-white">Complete Your Booking</h2>
          <div>
            <div className="    rounded-sm bg-gray-100">
              <div className="mx-3 my-5 py-5    shadow-lg">
                <div className="flex justify-between">
                  <div>
                    <p> New Delhi → Mumbai</p>
                    <div className="my-2 flex justify-between">
                      <p>
                        <span className="mb-2 mr-3 flex items-center  justify-center gap-x-1 rounded-sm p-1 ">
                          <CalendarCheck2 size={18} />
                          Tuesday, 20 July 2021{" "}
                        </span>
                        Non Stop 2H 55M
                      </p>
                    </div>
                  </div>
                  <div className="    rounded-sm bg-gray-100 ">
                    <div className="flex justify-between ">
                      <p className="text-base font-semibold text-slate-600">Base Fare</p>
                      <p className="text-base font-semibold text-slate-600">₹ 100</p>
                    </div>

                    <div className="mt-2 flex justify-between">
                      <p className="text-base font-semibold text-slate-600">Taxes and Surcharges</p>
                      <p className="text-base font-semibold text-slate-600">₹ 100</p>
                    </div>
                    <div className="h-1 w-full rounded-lg bg-slate-700" />
                    <div className=" mt-4 flex justify-between">
                      <p className="text-base font-semibold text-slate-600">Total Amount</p>
                      <p className="text-base font-semibold text-slate-600">₹ 100</p>
                    </div>
                  </div>
                </div>

                <div className="mx-4   mt-10 space-y-8  rounded-lg bg-gray-200  p-6">
                  <div className="  flex items-center gap-x-2">
                    <Image src={AirbusLogo} alt="Airbus Logo" className="h-10 w-10" />
                    <p className="font-semibold text-gray-600"> Qatar Airways</p>
                    <span className="rounded-full border border-gray-400 px-2 text-gray-400">Airbus A320</span>
                  </div>

                  <div className="space-y-4 ">
                    <p className="flex items-center   gap-x-4">
                      <PlaneTakeoff /> New Delhi, Indira Gandhi International Airport, Terminal T2
                    </p>
                    <p className="flex items-center   gap-x-4">
                      <PlaneLanding />
                      Mumbai . Chhatrapati Shivaji International Airport, Terminal T1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="travelerDetails" className="space-y-8 rounded-lg bg-gray-100 p-4 shadow-lg">
          <h3 className="text-lg font-semibold">Booking Details be sent to</h3>
          <div className="space-y-4  ">
            <div className="flex  gap-x-2">
              <div className="flex flex-col  justify-center gap-y-2">
                <p>Country Code </p>
                <SelectBox />
              </div>

              <div className="flex flex-col  justify-center gap-y-2">
                <label htmlFor="mobileNo" className="te mb-2 block text-sm font-medium text-gray-900">
                  Mobile Number
                </label>
                <input type="number" id="mobileNo" className="formInput " placeholder="01" />
              </div>

              <div className="flex flex-col  justify-center gap-y-2">
                <label htmlFor="address" className="te mb-2 block text-sm font-medium text-gray-900">
                  Mobile Number
                </label>
                <input type="email" id="address" className="formInput" placeholder="example@gmail.com" />
              </div>
            </div>

            <div className="flex items-center gap-x-3">
              <Checkbox onClick={() => setIsGstExist((val) => !val)} />
              <p>I have a GST number (Optional)</p>

              {/* 
            //! Optional 
              */}
            </div>
            {isGstExist && (
              <div className="flex  gap-x-2">
                <div className="flex flex-col  justify-center gap-y-2">
                  <label htmlFor="mobileNo" className="te mb-2 block text-sm font-medium text-gray-900">
                    Company Name
                  </label>
                  <input type="text" id="companyName" className="formInput " placeholder="company name" />
                </div>

                <div className="flex flex-col  justify-center gap-y-2">
                  <label htmlFor="mobileNo" className="te mb-2 block text-sm font-medium text-gray-900">
                    Registration Number
                  </label>
                  <input
                    type="number"
                    id="RegistrationNumber"
                    className="formInput "
                    placeholder="Registration Number"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div id="pinCodeAndState" className="mt-4 space-y-8 rounded-lg bg-gray-100 p-4 shadow-lg">
          <h3 className="text-lg font-semibold">Booking Details be sent to</h3>
          <div className="space-y-4  ">
            <div className="flex  gap-x-2">
              <div className="flex flex-col  justify-center gap-y-2">
                <label htmlFor="pinCode" className="te mb-2 block text-sm font-medium text-gray-900">
                  Pin Code
                </label>
                <input type="text" id="pinCode" className="formInput " placeholder="your pin code" />
              </div>

              <div className="flex flex-col  justify-center gap-y-2">
                <p>State </p>
                <SelectBox />
              </div>

              <div className="flex flex-col  justify-center gap-y-2">
                <label htmlFor="address" className="te mb-2 block text-sm font-medium text-gray-900">
                  Address
                </label>
                <input type="text" id="address" className="formInput" placeholder="Your Address (Optional)" />
              </div>
            </div>

            <div className="flex items-center gap-x-3">
              <Checkbox />
              <p>I have a GST number (Optional)</p>
            </div>
          </div>
        </div>
        <Button className="mt-4 px-8 bg-white text-slate-800">Continue</Button>
      </section>
    </div>
  );
};

export default Book;
