import { FlightDetails, Nav, TravelersAndClass } from "$components";
import FilterCard from "$components/Cards/FilterCard";
import SearchedValues from "$components/InfoDisplay/SearchedValues";
import airSearchResponse from "$data/FlyHub/Response/AirSearchResponse.json";
import { useOneWay } from "$store";

export default function Search() {
  const store = useOneWay();
  // AirSearchResponse
  return (
    <>
      <Nav />
      <div className="container  min-h-screen bg-gradient-to-t from-slate-600 to-slate-900 text-white">
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
          <div className="mt-8 flex w-full gap-x-4 ">
            <FilterCard className="hidden" />
            <div className="flex-1  ">
              {airSearchResponse?.Results.map((flight, index) => {
                return <FlightDetails key={flight.ResultID} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
