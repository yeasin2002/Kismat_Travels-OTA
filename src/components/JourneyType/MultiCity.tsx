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
    <div className="grid grid-cols-4 items-center gap-4" key={id}>
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
        <TravelersAndClass travelerAndClasses={store.travelerAndClasses} onValueChange={store.setTravelerAndClasses} />
      </div>
    </div>
  );
};
