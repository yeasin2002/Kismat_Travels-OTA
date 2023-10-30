import { FlightDetails, Nav, TravelersAndClass } from "$components";
import FilterCard from "$components/Cards/FilterCard";
import SearchedValues from "$components/InfoDisplay/SearchedValues";
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
          <div className="mt-8 flex w-full">
            <FilterCard />
            <div className="flex-1 p-4">
              <FlightDetails />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
