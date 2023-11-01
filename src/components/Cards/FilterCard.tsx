import { FlightSteps, mockFlight } from "$/data";
import { searchState } from "$store";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Checkbox } from "shadcn/components/ui/checkbox";
import { Slider } from "shadcn/components/ui/slider";

const FilterCard = () => {
  const { appliedFilter, price, typeOfStops, setAppliedFilter, setPrice, setTypeOfStops } = searchState();
  const [isShowingMore, setIsShowingMore] = useState(false);
  const popularFilter = mockFlight.slice(0, !isShowingMore ? 5 : mockFlight.length - 1);

  console.log(typeOfStops);
  return (
    <div className="    min-h-full w-1/4  rounded-md bg-white p-4 text-black shadow-md  [&>*]:mb-4 ">
      <div>
        {appliedFilter.length > 0 && (
          <div className="flex items-center justify-between text-blue-600 ">
            <h3 className="text-lg font-bold text-blue-600">Apply filter</h3>
            <p>Clear All</p>
          </div>
        )}

        <div className="my-3">
          {appliedFilter.map((item) => {
            return (
              <div className=" m-1 inline-flex items-center gap-x-2 rounded-full bg-blue-200/40 p-1 px-4  ">
                <p>{item}</p>
                <RxCross2
                  className="cursor-pointer "
                  onClick={() => {
                    setAppliedFilter(item);
                  }}
                />
              </div>
            );
          })}
        </div>

        <div>
          <h3 className="text-lg font-bold text-blue-600">Popular filters</h3>
          <div>
            {popularFilter.map((val) => {
              return (
                <label htmlFor={val.label} className="flex items-center gap-x-2 " key={val.flightName + val.label}>
                  <Checkbox
                    id={val.label}
                    checked={appliedFilter.includes(val.flightName)}
                    value={val.flightName}
                    onCheckedChange={(e) => {
                      setAppliedFilter(val.flightName);
                    }}
                  />
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
        <h3> Price - &#2547; {price}</h3>
        <Slider
          min={1000}
          max={10000}
          onValueChange={(e) => {
            setPrice(e[0]);
          }}
        />
        <div className="flex items-center justify-between">
          <p>1k</p>
          <p>10k</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-blue-600">Stops From New Delhi</h3>
        <div>
          {FlightSteps.map((val) => {
            return (
              <label htmlFor={val.label} className="flex items-center gap-x-2 " key={val.title + val.label}>
                <Checkbox
                  id={val.label}
                  onCheckedChange={(e) => {
                    setTypeOfStops(val.value);
                  }}
                />
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
