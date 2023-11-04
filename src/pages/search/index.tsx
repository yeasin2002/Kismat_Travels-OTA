import { FlightDetails, Nav, TravelersAndClass } from "$components";
import FilterCard from "$components/Cards/FilterCard";
import SearchedValues from "$components/InfoDisplay/SearchedValues";
import airSearchResponse from "$data/flyhub/airSearchRes.json";
import { useOneWay } from "$store";

export default function Search() {
  const store = useOneWay();

  return (
    <>
      <Nav />
      <div className="container  min-h-screen bg-gradient-to-t from-slate-600 to-slate-900 text-white">
        <div className="grid grid-cols-4 gap-x-2 pt-2">
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
            <FilterCard />
            <div className="flex-1  ">
              {airSearchResponse.map((item, index) => {
                return <FlightDetails key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
