"use client";

import { useTripType as tripTypeValue } from "$store";
import { useId } from "react";
import { Label } from "shadcn/components/ui/label";
import { RadioGroup, RadioGroupItem } from "shadcn/components/ui/radio-group";
import { cn } from "shadcn/lib/utils";

const options = [
  { value: "one-way", label: "One Way" },
  { value: "round-tripe", label: "Round Trip" },
  { value: "multi-city", label: "Multi City" },
];

export function TripType() {
  const id = useId();
  const { setTripType, tripType } = tripTypeValue();

  return (
    <RadioGroup value={tripType} onValueChange={setTripType} className="flex gap-2">
      {options.map(({ value, label }) => (
        <div
          key={value}
          className={cn("flex  items-center gap-x-2 rounded-full px-2 py-1 transition-all", {
            "bg-white/30": tripType === value,
          })}
        >
          <RadioGroupItem value={value} id={id + value} />
          <Label htmlFor={id + value}>
            <span className={cn("cursor-pointer text-black transition-all", { "font-bold": tripType === value })}>
              {label}
            </span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
