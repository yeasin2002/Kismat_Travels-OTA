import { useOneWay, useTripType } from "$store";
import { useMutation } from "@tanstack/react-query";
import { SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "shadcn/lib/utils";

import { $post } from "$/utils";
import { Button, FilterCard, FlightDetails, Nav, SearchedValues, TravelersAndClass } from "$components";
import airSearchResponse from "$data/FlyHub/Response/AirSearch.json";
import { Search, SearchResponse } from "$interface";
import { useRouter } from "next/router";
import { toast } from "sonner";

export default function Search() {
  const router = useRouter();
  const store = useOneWay();
  const { getCurrentStore, tripType } = useTripType();

  const { mutate, isError, data, error, isPending } = useMutation<Search, Error, ReturnType<typeof getCurrentStore>>({
    mutationKey: ["airSearchRequest"],
    mutationFn: (arg: any) => $post("private/AirSearch", arg),
    onSuccess: (value) => {
      console.log("Success Data :", value);
    },
  });

  const [isSidebarExist, setIsSidebarExist] = useState(false);
  const FilterCardClass = isSidebarExist
    ? "block fixed  top-0  right-0 h-screen lg:h-full w-full z-50   lg:static"
    : "";

  const searchAction = () => {
    const storeValue = getCurrentStore();
    if (!storeValue) {
      return router.push("/");
    }
    return mutate(storeValue);
  };

  useEffect(() => {
    searchAction();
  }, []);

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
          {isPending ? (
            "Loading"
          ) : (
            <div className=" relative flex  w-full gap-x-4 ">
              <FilterCard
                className={cn("hidden transition-all lg:block", FilterCardClass)}
                setIsSidebarExist={setIsSidebarExist}
              />
              <div className="flex-1">
                {data?.Results?.map((flight) => <FlightDetails key={flight.ResultID} flightDetails={flight} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

