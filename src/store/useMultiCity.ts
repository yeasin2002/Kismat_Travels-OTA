import { adultsOptions, cabinClassOption } from "$data/travelClasses";
import { AirportData } from "$interface/airport.interface";
import { uuid } from "$lib";
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { maxTraveler } from "./createTripStore";

interface City {
  id: string;
  from: AirportData | null;
  to: AirportData | null;
  departure: Date | undefined;
  searchFrom: string;
  searchTo: string;
}

export const useMultiCity = create(
  immer(
    combine(
      {
        cities: [
          {
            id: uuid(),
            from: null,
            to: null,
            departure: undefined,
            searchFrom: "",
            searchTo: "",
          },
          {
            id: uuid(),
            from: null,
            to: null,
            departure: undefined,
            searchFrom: "",
            searchTo: "",
          },
        ] as City[],
        tripType: "multi-city",
        travelerAndClasses: {
          adults: adultsOptions[0],
          children: 0,
          infants: 0,
          travelClass: cabinClassOption[0],
        },
      },
      (set, get) => ({
        add() {
          const { isValid } = get() as ReturnType<typeof get> & { isValid: () => boolean };

          if (isValid()) {
            set((store) => {
              store.cities.push({
                id: uuid(),
                from: store.cities[store.cities.length - 1].to,
                to: null,
                departure: undefined,
                searchFrom: "",
                searchTo: "",
              });
            });
          }
        },

        remove(id: string) {
          set((store) => {
            store.cities = store.cities.filter((city) => city.id !== id);
          });
        },

        setFrom(id: string, value: AirportData | null) {
          set((store) => {
            const index = store.cities.findIndex((city) => city.id === id);
            if (index !== -1) store.cities[index].from = value;
          });
        },

        setTo(id: string, value: AirportData | null) {
          set((store) => {
            const index = store.cities.findIndex((city) => city.id === id);
            if (index !== -1) store.cities[index].to = value;
          });
        },

        setDeparture(id: string, value: undefined | Date) {
          set((store) => {
            const index = store.cities.findIndex((city) => city.id === id);
            if (index !== -1) store.cities[index].departure = value;
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

        setSearchFrom(id: string, value: string) {
          set((store) => {
            const index = store.cities.findIndex((city) => city.id === id);
            if (index !== -1) store.cities[index].searchFrom = value;
          });
        },

        setSearchTo(id: string, value: string) {
          set((store) => {
            const index = store.cities.findIndex((city) => city.id === id);
            if (index !== -1) store.cities[index].searchTo = value;
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

        isValid() {
          const store = get();

          const travelerCount =
            store.travelerAndClasses.children + store.travelerAndClasses.infants + store.travelerAndClasses.adults;

          if (!(travelerCount > 0)) return false;

          return store.cities.every(
            (city) => city.from && city.to && city.departure && city.from.code !== city.to.code
          );
        },

        get,
      })
    )
  )
);
