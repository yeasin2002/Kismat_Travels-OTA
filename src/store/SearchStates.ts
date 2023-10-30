import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const searchState = create(
  immer(
    combine(
      {
        appliedFilter: [] as string[],
        price: 0 as number,
        totalStops: 0 as number,
        airlines: [] as string[],
      },
      (set, get) => ({
        setAppliedFilter(value: string) {
          set((store) => {
            store.appliedFilter.push(value);
          });
        },
      })
    )
  )
);
