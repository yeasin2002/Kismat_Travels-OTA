import { TravelersAndClass } from "$components";
import { SelectAirport } from "$components/SelectAirport/SelectAirport";
import { useOneWay } from "$store";
import { useId } from "react";
import { DatePicker } from "shadcn/components/ui/date-picker";

export const OneWay = () => {
  const store = useOneWay();
  const id = useId();

  return (
    <div className="grid grid-cols-4 items-center gap-4" key={id}>
      <SelectAirport
        placeholder="From"
        selected={store.from}
        onSelect={store.setFrom}
        searchValue={store.searchFrom}
        setSearchValue={store.setSearchFrom}
      />

      <SelectAirport
        placeholder="To"
        selected={store.to}
        onSelect={store.setTo}
        searchValue={store.searchTo}
        setSearchValue={store.setSearchTo}
      />

      <div className="flex h-full w-full flex-col justify-between gap-y-2">
        <DatePicker selected={store.departure} onSelect={store.setDeparture} placeholder="Departure" />
        <DatePicker selected={store.back} onSelect={store.setBack} placeholder="Return" />
      </div>

      <TravelersAndClass travelerAndClasses={store.travelerAndClasses} onValueChange={store.setTravelerAndClasses} />
    </div>
  );
};
