import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const tripType = create(
  immer(
    combine(
      {
        tripType: "one-way" as "one-way" | "round-tripe" | "multi-city",
      },
      (set, get) => ({
        setTripType(value: "one-way" | "round-tripe" | "multi-city") {
          set((store) => {
            store.tripType = value;
          });
        },
      })
    )
  )
);
