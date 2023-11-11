import { PassengersType, SearchResponse } from "$interface";
import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const usePassengers = create(
  persist(
    immer(
      combine(
        {
          passengers: [] as PassengersType[],
          flightBooking: null as SearchResponse | null,
        },
        (set, get) => ({
          addPassenger: (passenger: PassengersType) =>
            set((state) => {
              const checkIndex = state.passengers.findIndex((ps) => ps.id === passenger.id);
              if (checkIndex === -1) {
                state.passengers.push(passenger);
              } else {
                state.passengers[checkIndex] = passenger;
              }
            }),
          setFlightBooking: (flightBooking: SearchResponse | null) => {
            set((store) => {
              store.flightBooking = flightBooking;
            });
          },
        })
      )
    ),
    {
      name: "passengers",
    }
  )
);
