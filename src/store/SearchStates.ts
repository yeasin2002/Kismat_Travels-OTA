import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const searchState = create(
  immer(
    combine(
      {
        appliedFilter: [] as string[],
        price: 0 as number,
        typeOfStops: [] as number[],
      },
      (set, get) => ({
        setAppliedFilter(value: string) {
          set((store) => {
            if (store.appliedFilter.includes(value)) {
              store.appliedFilter = store.appliedFilter.filter((item) => item !== value);
            } else {
              store.appliedFilter.push(value);
            }
          });
        },
        setPrice(value: number) {
          set((store) => {
            store.price = value;
          });
        },
        setTypeOfStops(value: number) {
          set((store) => {
            if (!store.typeOfStops.includes(value)) {
              store.typeOfStops.push(value);
            } else {
              store.typeOfStops = store.typeOfStops.filter((item) => item !== value);
            }
          });
        },
      })
    )
  )
);
