import { $post } from "$/utils";
import noDataFound from "$assets/Illustrations/3D/no-results.png";
import { FancySelectString, FlightDetails, Nav, StatCard, TravelersAndClass } from "$components";
import response from "$data/FlyHub/Response/AirSearch.json";
import { SpinnerIcon } from "$icons";
import { Search } from "$interface";
import { useTripType } from "$store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Fragment, useEffect, useMemo, useState } from "react";

export default function Search() {
  const router = useRouter();
  const [selectedAirline, setSelectedAirline] = useState("All");
  const { getCurrentStore, getStat, tripType } = useTripType();

  const { mutate, data, isPending } = useMutation<Search, Error, ReturnType<typeof getCurrentStore>>({
    mutationKey: ["airSearchRequest"],
    mutationFn: (arg: any) => $post("private/AirSearch", arg),
  });

  function searchAction() {
    const storeValue = getCurrentStore();
    if (!storeValue) return router.push("/");
    mutate(storeValue);
  }

  // useEffect(() => searchAction() as any, []);

  const filterAirline = useMemo(
    () => data?.Results?.map((val) => val.segments?.map((airline) => airline.Airline.AirlineName)).flat() || [],
    []
  );

  const flights = useMemo(() => {
    if (!response?.Results) return [];

    return response.Results.filter((flight) => {
      if (selectedAirline === "All") true;
      return (
        flight.segments.find((val) => val.Airline.AirlineName.toLowerCase().includes(selectedAirline.toLowerCase())) !==
        null
      );
    });
  }, [data, selectedAirline]);

  const stat = getStat();

  return (
    <>
      <Nav />
      <div className="container flex min-h-[calc(100dvh-3.75rem)] flex-col gap-y-4 bg-gradient-to-t from-slate-600 to-slate-900 text-white">
        <div className="grid grid-cols-5 gap-2 pt-2">
          <StatCard extra="h-fit" title={"Trip type"} value={tripType} />

          <div className="col-span-3 space-y-2">
            {"cities" in stat ? (
              stat.cities.map((city) => (
                <div className="flex gap-2">
                  <StatCard title="From" value={city.from?.name as string} />
                  <StatCard title="To" value={city.to?.name as string} />
                  <StatCard
                    title="Departure"
                    value={
                      city.departure?.toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }) as string
                    }
                  />
                </div>
              ))
            ) : (
              <div className="flex h-full gap-2">
                <StatCard title="From" value={stat.from?.name as string} />
                <StatCard title="To" value={stat.to?.name as string} />
                <StatCard
                  title="Departure"
                  value={
                    stat.departure?.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }) as string
                  }
                />
              </div>
            )}
          </div>

          <TravelersAndClass travelerAndClasses={stat.travelerAndClasses} onValueChange={() => {}} statOnly />
        </div>

        {isPending ? (
          <div className="flex h-full flex-grow items-center justify-center text-6xl text-slate-300">
            <SpinnerIcon />
          </div>
        ) : (
          <Fragment>
            <FancySelectString
              options={["All", ...filterAirline]}
              onSelect={setSelectedAirline}
              selected={selectedAirline}
            />

            {flights?.length === 0 ? (
              <img src={noDataFound.src} alt="Not Found" className="mx-auto aspect-square w-96" />
            ) : (
              flights?.map((flight) => <FlightDetails key={flight.ResultID} flightDetails={flight} />)
            )}
          </Fragment>
        )}
      </div>
    </>
  );
}
