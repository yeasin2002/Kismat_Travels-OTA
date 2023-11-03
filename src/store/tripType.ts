import { useOneWay, useTwoWay } from "$store";
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useTripType = create(
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
        getCurrentStore: () => {
          const tripType = get().tripType;
          if (tripType === "one-way") return useOneWay.getState();
          if (tripType === "round-tripe") return useTwoWay.getState();
          if (tripType === "multi-city") return useTwoWay.getState();
        },
      })
    )
  )
);
