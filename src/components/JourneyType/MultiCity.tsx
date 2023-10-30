import { Button, CardWrapper, ComboBoxItem, TravelersAndClass } from "$components";
import { tripType, useOneWay } from "$store";
import { SearchCheck } from "lucide-react";
import { useId, useMemo } from "react";
import { Combobox } from "shadcn/components/ui/combobox";
import { DatePicker } from "shadcn/components/ui/date-picker";

export const MultiCity = () => {
  const store = useOneWay();
  const trip = tripType();
  const id = useId();
  const initFromOptions = useMemo(
    () =>
      [{ value: "DFF", label: "Bangladesh Airport Dhaka" }].map(({ value, label }) => ({
        value,
        label,
        element: (<ComboBoxItem code={value} subtitle={label} title="Bangladesh" />) as React.ReactNode,
      })),
    []
  );
  return (
    <div className="relative grid place-items-center pb-5" key={id}>
      <div className="grid grid-cols-4 items-center gap-4">
        <CardWrapper title="Select From">
          <Combobox
            options={initFromOptions}
            placeholder="From"
            value={store.from}
            setValue={store.setFrom}
            searchValue={store.searchFrom}
            setSearchValue={store.setSearchFrom}
          />
        </CardWrapper>
        <CardWrapper title="Select From">
          <Combobox
            options={initFromOptions}
            placeholder="From"
            value={store.from}
            setValue={store.setFrom}
            searchValue={store.searchFrom}
            setSearchValue={store.setSearchFrom}
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
        <Button className="flex items-center justify-center gap-x-3 rounded-lg border border-transparent bg-brandBlue-100 px-8 py-2.5 text-sm text-white transition-colors duration-300 hover:bg-brandBlue-600/80 sm:text-base">
          <SearchCheck />
          <span>Search </span>
        </Button>
      </div>
    </div>
  );
};
