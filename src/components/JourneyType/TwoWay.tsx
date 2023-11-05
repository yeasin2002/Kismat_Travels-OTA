import { TravelDate, TravelersAndClass } from "$components";
import { SelectAirport } from "$components/SelectAirport/SelectAirport";
import { useTwoWay } from "$store";
import { useId } from "react";

export function TwoWay() {
  const store = useTwoWay();
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

      <TravelDate
        departure={store.departure}
        setDeparture={store.setDeparture}
        departurePlaceholder="Departure"
        expand={true}
        back={store.back}
        setBack={store.setBack}
        backPlaceholder="Return"
      />

      <TravelersAndClass travelerAndClasses={store.travelerAndClasses} onValueChange={store.setTravelerAndClasses} />
    </div>
  );
}
