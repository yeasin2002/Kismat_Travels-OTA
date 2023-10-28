"use client";

import { MultiCity, OneWay, TripType, TwoWay } from "$components";
import { tripType } from "$store";

export function BookingForm() {

  const store = tripType();

  return (
    <section className="container -translate-y-1/2 ">
      <div className="space-y-8 rounded-md border border-slate-200 bg-white/80 px-4 py-8 shadow-sm backdrop-blur-lg">
        <TripType />

        {store.tripType === "one-way" && <OneWay />}
        {store.tripType === "round-trip" && <TwoWay />}
        {store.tripType === "multi-city" && <MultiCity />}
      </div>
    </section>
  );
}
