import { Button, CardWrapper, ComboBoxItem, TravelersAndClass } from "$components";
import { SelectAirport } from "$components/SelectAirport/SelectAirport";
import { useOneWay } from "$store";
import { SearchCheck } from "lucide-react";
import { useId } from "react";
import { DatePicker } from "shadcn/components/ui/date-picker";

export const OneWay = () => {
  const store = useOneWay();
  const id = useId();

  return (
    <div className="relative grid place-items-center pb-5" key={id}>
      <div className="grid grid-cols-4 items-center gap-4">
        <CardWrapper title="Select From">
          <SelectAirport
            placeholder="From"
            selected={store.from}
            onSelect={store.setFrom}
            searchValue={store.searchFrom}
            setSearchValue={store.setSearchFrom}
          />
        </CardWrapper>
        <CardWrapper title="Select To">
          <SelectAirport
            placeholder="To"
            selected={store.to}
            onSelect={store.setTo}
            searchValue={store.searchTo}
            setSearchValue={store.setSearchTo}
          />
        </CardWrapper>
        <div className="flex flex-col items-center gap-y-2">
          <DatePicker selected={store.departure} onSelect={store.setDeparture} placeholder="Select departure date" />

          <DatePicker selected={store.back} onSelect={store.setBack} placeholder="Select return  date" />
        </div>
        <div>
          <TravelersAndClass
            travelerAndClasses={store.travelerAndClasses}
            onValueChange={store.setTravelerAndClasses}
          />
        </div>
      </div>
      <div className="absolute -bottom-14  mt-2 flex  items-center justify-center ">
        <Button className="flex items-center justify-center gap-x-3 rounded-lg border border-transparent bg-brandBlue-100 px-8 py-2.5 text-sm text-white transition-colors duration-300 hover:bg-brandBlue-600/80 sm:text-base ">
          <SearchCheck />
          <span>Search </span>
        </Button>
      </div>
    </div>
  );
};

//
