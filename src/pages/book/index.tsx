import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import AirbusLogo from "$assets/temp/qatar-airways.jpg";
import { Nav } from "$components";
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
  const [isGstExist, setIsGstExist] = useState(false);

  const selectBoxItem = [
    {
      title: "Dhaka",
      value: "dhaka",
    },
    {
      title: "India",
      value: "india",
    },
  ];
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

        <div id="travelerDetails" className="space-y-8 rounded-lg bg-gray-100 p-4 shadow-lg lg:p-8">
          <h3 className="text-xl font-bold text-gray-600">Booking Details be sent to</h3>
          <div className="space-y-4  ">
            <div className="flex  flex-wrap gap-x-2 sm:flex-nowrap">
              <div className="flex w-full  flex-col justify-center ">
                <label className="bookLabel">Country Code </label>
                <SelectBox selectBoxItem={selectBoxItem} label="Country Code" value="+91" />
              </div>

              <div className="flex w-full  flex-col justify-center ">
                <label htmlFor="mobileNo" className=" bookLabel    ">
                  Mobile Number
                </label>
                <input type="number" id="mobileNo" className="formInput " placeholder="01" />
              </div>

              <div className="flex w-full  flex-col justify-center ">
                <label htmlFor="address" className=" bookLabel  ">
                  Email
                </label>
                <input type="email" id="address" className="formInput" placeholder="example@gmail.com" />
              </div>
            </div>

            <div className="flex items-center gap-x-3">
              <Checkbox id="GST_number" onClick={() => setIsGstExist((val) => !val)} />
              <label htmlFor="GST_number" className="bookLabel">
                I have a GST number (Optional)
              </label>

              {/* 
            //! Optional 
              */}
            </div>

            {isGstExist && (
              <div className="  !mt-10 flex flex-wrap gap-x-2 sm:flex-nowrap">
                <div className="flex flex-col  justify-center ">
                  <label htmlFor="mobileNo" className=" bookLabel ">
                    Company Name
                  </label>
                  <input type="text" id="companyName" className="formInput " placeholder="company name" />
                </div>

                <div className="flex flex-col  justify-center ">
                  <label htmlFor="mobileNo" className=" bookLabel ">
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

        <div id="pinCodeAndState" className="mt-4 space-y-8 rounded-lg bg-gray-100 p-4 shadow-lg lg:p-8">
          <h3 className="text-lg font-semibold text-gray-600">Your Pin Code And State </h3>
          <div className="space-y-4  ">
            <div className="flex  flex-wrap gap-x-2 sm:flex-nowrap">
              <div className="flex w-full  flex-col justify-center ">
                <label htmlFor="pinCode" className=" bookLabel ">
                  Pin Code
                </label>
                <input type="text" id="pinCode" className="formInput " placeholder="your pin code" />
              </div>

              <div className="flex w-full  flex-col justify-center ">
                <label className="bookLabel">State </label>
                <SelectBox selectBoxItem={selectBoxItem} label="State" value="Delhi" />
              </div>

              <div className="flex w-full  flex-col justify-center ">
                <label htmlFor="address" className=" bookLabel ">
                  Address
                </label>
                <input type="text" id="address" className="formInput" placeholder="Your Address (Optional)" />
              </div>
            </div>

            <div className="flex items-center gap-x-3">
              <Checkbox id="confirmBilling" />
              <label htmlFor="confirmBilling" className="bookLabel">
                Confirm and save billing details to your profile
              </label>
            </div>
          </div>
        </div>
        <button className="mt-4 rounded-full bg-white px-10 py-2 text-xl font-semibold text-slate-800">Continue</button>
      </form>
    </section>
  );
};

export default Book;
