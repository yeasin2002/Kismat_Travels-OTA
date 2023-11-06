import { TravelDate, TravelersAndClass } from "$components";
import { SelectAirport } from "$components/SelectAirport/SelectAirport";
import { useMultiCity } from "$store/useMultiCity";
import { Plus } from "lucide-react";
import { Button } from "shadcn/components/ui/button";

export function MultiCity() {
  const store = useMultiCity();

  return (
    <div className="flex flex-col gap-y-4">
      {store.cities.map((city, index) => (
        <div className="grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-4" key={city.id}>
          <SelectAirport
            placeholder="From"
            selected={city.from}
            onSelect={(value) => store.setFrom(city.id, value)}
            searchValue={city.searchFrom}
            setSearchValue={(value) => store.setSearchFrom(city.id, value)}
          />

          <SelectAirport
            placeholder="To"
            selected={city.to}
            onSelect={(value) => store.setTo(city.id, value)}
            searchValue={city.searchTo}
            setSearchValue={(value) => store.setSearchTo(city.id, value)}
          />

          <TravelDate
            departure={city.departure}
            setDeparture={(value) => store.setDeparture(city.id, value)}
            departurePlaceholder="Departure"
            expand={false}
          />

          {index === 0 && (
            <TravelersAndClass
              travelerAndClasses={store.travelerAndClasses}
              onValueChange={store.setTravelerAndClasses}
            />
          )}

          {store.cities.length === index + 1 && (
            <div className="flex h-full w-full items-center justify-evenly rounded-md bg-white max-sm:py-4">
              {index < 4 && (
                <Button className="bg-blue-500 text-white  hover:bg-blue-400" onClick={() => store.add()}>
                  add <Plus className="text-white" size={15} strokeWidth={2.5} />
                </Button>
              )}

              {index > 1 && (
                <Button variant="destructive" onClick={() => store.remove(city.id)}>
                  remove <Plus className="text-white" size={15} strokeWidth={2.5} />
                </Button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
