import { useOneWay } from "$store";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { Button, FilterCard, FlightDetails, Nav, SearchedValues, TravelersAndClass } from "$components";
import airSearchResponse from "$data/FlyHub/Response/AirSearch.json";

export default function Search() {
  const store = useOneWay();
  const [isSidebarExist, setIsSidebarExist] = useState(false);
  const FilterCardClass = isSidebarExist
    ? "block fixed  top-0  right-0 h-screen lg:h-full w-full z-50   lg:static"
    : "";

  return (
    <>
      <Nav />
      <div className="container  min-h-screen space-y-4 bg-gradient-to-t from-slate-600 to-slate-900 text-white">
        <div className="grid grid-cols-1 gap-x-2 gap-y-1 pt-2 sm:grid-cols-2 md:grid-cols-4">
          <SearchedValues title="From" value="Dhaka, Bangladesh " />
          <SearchedValues title="From" value="Dhaka, Bangladesh " />
          <SearchedValues title="From" value="Dhaka, Bangladesh " />
          <TravelersAndClass
            travelerAndClasses={store.travelerAndClasses}
            onValueChange={store.setTravelerAndClasses}
          />
        </div>
        <div>
          <div className="mb-4 mt-8 lg:hidden">
            <Button onClick={() => setIsSidebarExist((pre) => !pre)}>
              <SlidersHorizontal />
            </Button>
          </div>
          <div className=" flex w-full gap-x-4 ">
            <FilterCard
              className={twMerge("hidden transition-all lg:block", FilterCardClass)}
              setIsSidebarExist={setIsSidebarExist}
            />
            <div className="flex-1">
              {airSearchResponse?.Results.map((flight) => (
                <FlightDetails key={flight.ResultID} flightDetails={flight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
