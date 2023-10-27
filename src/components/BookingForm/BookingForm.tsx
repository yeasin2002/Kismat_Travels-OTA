"use client";

import { ComboBoxItem, TripType } from "$components";
import { useOneWay } from "$store";
import { useMemo } from "react";
import { Combobox } from "shadcn/components/ui/combobox";
import { DatePicker } from "shadcn/components/ui/date-picker";

export function BookingForm() {
  const store = useOneWay();

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
    <section className="container -translate-y-1/2 ">
      <div className="space-y-4 rounded-md border border-slate-200 bg-white/80 px-4 py-8 shadow-sm backdrop-blur-lg">
        <TripType />
        <div className="grid grid-cols-2 gap-4">
          <Combobox
            options={initFromOptions}
            placeholder="Form"
            value={store.from}
            setValue={store.setFrom}
            searchValue={store.searchFrom}
            setSearchValue={store.setSearchFrom}
          />

          <DatePicker selected={store.departure} onSelect={store.setDeparture} placeholder="Select departure date" />
          <DatePicker selected={store.back} onSelect={store.setBack} />
        </div>
      </div>
    </section>
  );
}
