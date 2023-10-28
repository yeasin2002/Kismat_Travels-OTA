import { CardWrapper, ComboBoxItem, FlightDetails, TravelersAndClass } from "$components";
import { useOneWay } from "$store";
import { ArrowLeftRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Combobox } from "shadcn/components/ui/combobox";
import { DatePicker } from "shadcn/components/ui/date-picker";

export default function Search() {
  const store = useOneWay();
  const [classes, setClasses] = useState("-rotate-180");

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
    <div className="container py-4">
      <div className="flex gap-4 [&>*]:flex-1">
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
        <div className="my-auto h-full !grow-0 ">
          <button
            onClick={() => setClasses((prev) => (prev === "-rotate-180" ? "rotate-0" : "-rotate-180"))}
            className={
              "rounded-full p-2 text-slate-700 transition-transform duration-500 hover:bg-slate-500/20 " + classes
            }
          >
            <ArrowLeftRight />
          </button>
        </div>
        <CardWrapper title="Select To">
          <Combobox
            options={initFromOptions}
            placeholder="To"
            value={store.to}
            setValue={store.setTo}
            searchValue={store.searchTo}
            setSearchValue={store.setSearchTo}
          />
        </CardWrapper>
        <CardWrapper title="Pick Departure Date">
          <DatePicker selected={store.departure} onSelect={store.setDeparture} placeholder="Departure" />
        </CardWrapper>
        <CardWrapper title="Pick Return Date">
          <DatePicker selected={store.back} onSelect={store.setBack} placeholder="Return" />
        </CardWrapper>
      </div>
      <div className="p-6">
        <TravelersAndClass travelerAndClasses={store.travelerAndClasses} onValueChange={store.setTravelerAndClasses} />
      </div>
      <hr className="my-8 " />
      <FlightDetails />
    </div>
  );
}
