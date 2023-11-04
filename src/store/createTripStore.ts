import { AirportData } from "$interface/airport.interface";
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const maxTraveler = 9;

export function createTripStore(type: "one-way" | "round-tripe") {
  return create(
    immer(
      combine(
        {
          tripType: type,
          from: null as AirportData | null,
          to: null as AirportData | null,
          departure: undefined as Date | undefined,
          back: undefined as Date | undefined,
          travelerAndClasses: { adults: 0, children: 0, infants: 0, travelClass: "" },
          searchFrom: "",
          searchTo: "",
        },
        (set, get) => ({
          setFrom(value: AirportData | null) {
            set((store) => {
              store.from = value;
            });
          },
          setTo(value: AirportData | null) {
            set((store) => {
              store.to = value;
            });
          },
          setDeparture(value: undefined | Date) {
            set((store) => {
              store.departure = value;
            });
          },
          setBack(value: undefined | Date) {
            set((store) => {
              store.back = value;
            });
          },
          setAdults(value: number) {
            set((store) => {
              store.travelerAndClasses.adults = value;
            });
          },
          setChildren(value: number) {
            set((store) => {
              store.travelerAndClasses.children = value;
            });
          },
          setInfants(value: number) {
            set((store) => {
              store.travelerAndClasses.infants = value;
            });
          },
          setTravelClass(value: string) {
            set((store) => {
              store.travelerAndClasses.travelClass = value;
            });
          },
          setSearchFrom(value: string) {
            set((store) => {
              store.searchFrom = value;
            });
          },
          setSearchTo(value: string) {
            set((store) => {
              store.searchTo = value;
            });
          },
          setTravelerAndClasses(value: Partial<ReturnType<typeof get>["travelerAndClasses"]>) {
            set((store) => {
              const combinedValue = { ...store.travelerAndClasses, ...value };

              if (combinedValue.children + combinedValue.infants + combinedValue.adults <= maxTraveler) {
                store.travelerAndClasses = combinedValue;
              }
            });
          },
          get,
        })
      )
    )
  );
}
