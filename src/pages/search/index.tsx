import noDataFound from "$assets/Illustrations/3D/no-results.png";
import searchLoading from "$assets/Illustrations/lottie/opener-loading.json";
import { useOneWay, useTripType } from "$store";
import { useMutation } from "@tanstack/react-query";
import { SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { $post } from "$/utils";
import { Button, FancySelectString, FlightDetails, Nav, SearchedValues, TravelersAndClass } from "$components";

import { SpinnerIcon } from "$icons";
import { Search } from "$interface";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Search() {
  const [selectedAirline, setSelectedAirline] = useState("all");
  const router = useRouter();
  const store = useOneWay();
  const { getCurrentStore } = useTripType();

  const { mutate, data, isPending } = useMutation<Search, Error, ReturnType<typeof getCurrentStore>>({
    mutationKey: ["airSearchRequest"],
    mutationFn: (arg: any) => $post("private/AirSearch", arg),
  });

  const [isSidebarExist, setIsSidebarExist] = useState(false);
  const FilterCardClass = isSidebarExist
    ? "block fixed  top-0  right-0 h-screen lg:h-full w-full z-50   lg:static"
    : "";

  function searchAction() {
    const storeValue = getCurrentStore();
    if (!storeValue) return router.push("/");
    mutate(storeValue);
  }

  useEffect(() => {
    searchAction();
  }, []);

  const filterAirline = useMemo(
    () => data?.Results?.map((val) => val.segments?.map((airline) => airline.Airline.AirlineName))?.flat() || [],
    []
  );

  const flights = useMemo(() => {
    if (!data?.Results) return [];

    return data.Results.filter((flight) => {
      if (selectedAirline === "all") true;
      return (
        flight.segments.find((val) => val.Airline.AirlineName.toLowerCase().includes(selectedAirline.toLowerCase())) !==
        null
      );
    });
  }, [data, selectedAirline]);

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
            <div className="mx-auto w-96">
              <SpinnerIcon />
            </div>
          ) : (
            <div>
              <div className="">
                <div className="flex gap-x-2">
                  <FancySelectString options={filterAirline} onSelect={setSelectedAirline} selected={selectedAirline} />
                </div>
                {flights?.length === 0 ? (
                  <Image src={noDataFound} alt="Not Found" className="mx-auto aspect-square"></Image>
                ) : (
                  flights?.map((flight) => <FlightDetails key={flight.ResultID} flightDetails={flight} />)
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
