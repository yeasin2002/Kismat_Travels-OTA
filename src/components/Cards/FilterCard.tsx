import { FlightSteps, mockFlight } from "$/data";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Checkbox } from "shadcn/components/ui/checkbox";
import { Slider } from "shadcn/components/ui/slider";

const FilterCard = () => {
  const [isShowingMore, setIsShowingMore] = useState(false);
  const popularFilter = mockFlight.slice(0, !isShowingMore ? 5 : mockFlight.length - 1);

  return (
    <div className="    min-h-full w-1/4  rounded-md bg-white p-4  shadow-md  [&>*]:mb-4 ">
      <div>
        <div className="flex items-center justify-between text-blue-600 ">
          <h3 className="text-lg font-bold text-blue-600">Apply filter</h3>
          <p>Clear All</p>
        </div>
        <div className="my-3">
          <div className=" inline-flex items-center gap-x-1 rounded-full bg-blue-200/40 px-4 py-2  ">
            <p>Air BD</p>
            <RxCross2 />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-blue-600">Popular filters</h3>
          <div>
            {popularFilter.map((val) => {
              return (
                <label htmlFor={val.label} className="flex items-center gap-x-2 " key={val.flightName + val.label}>
                  <Checkbox id={val.label} />
                  <p>{val.flightName}</p>
                </label>
              );
            })}
            <p
              onClick={() => setIsShowingMore(!isShowingMore)}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              See {isShowingMore ? " less" : " more"}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3>One Way Price</h3>
        <Slider />
        <div className="flex items-center justify-between">
          <p>₹4,394</p>
          <p>₹28,400</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-blue-600">Stops From New Delhi</h3>
        <div>
          {FlightSteps.map((val) => {
            return (
              <label htmlFor={val.label} className="flex items-center gap-x-2 " key={val.title + val.label}>
                <Checkbox id={val.label} />
                <p>{val.title}</p>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
