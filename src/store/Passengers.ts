import { Fare, PassengersType, SearchResponse, Segment } from "$interface";
import { create } from "zustand";
import { combine, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const usePassengers = create(
  devtools(
    immer(
      combine(
        {
          passengers: [] as PassengersType[],
          flightBooking: null as Segment | null,

          searchId: "" as string | undefined,
          resultId: "" as string | undefined,
          flightDetails: [] as SearchResponse[],
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
          emptyPassenger: () =>
            set((state) => {
              state.passengers = [];
            }),

          setFlightBooking: (flightBooking: Segment | null) => {
            set((store) => {
              store.flightBooking = flightBooking;
            });
          },
          setSearchId: (id: string | undefined) => {
            set((store) => {
              store.searchId = id;
            });
          },
          setResultId: (id: string | undefined) => {
            set((store) => {
              store.resultId = id;
            });
          },

          setFlightDetails: (fare: SearchResponse) => {
            set((store) => {
              store.flightDetails.push(fare);
            });
          },
        })
      )
    )
  )
);
