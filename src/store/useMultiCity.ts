import { AirportData } from "$interface/airport.interface";
import { uuid } from "$lib";
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface City {
  id: string;
  from: AirportData | null;
  to: AirportData | null;
  departure: Date | undefined;
  back: Date | undefined;
  searchFrom: string;
  searchTo: string;
}

export const useMultiCity = create(
  immer(
    combine(
      {
        cities: [] as City[],
        tripType: "multi-city",
        travelerAndClasses: {
          adults: "",
          children: "",
          infants: "",
          travelClass: "",
        },
      },
      (set, get) => ({
        add() {
          set((store) => {
            store.cities.push({
              id: uuid(),
              from: null,
              to: null,
              departure: undefined,
              back: undefined,
              searchFrom: "",
              searchTo: "",
            });
          });
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
        setBack(id: string, value: undefined | Date) {
          set((store) => {
            const index = store.cities.findIndex((city) => city.id === id);
            if (index !== -1) store.cities[index].back = value;
          });
        },
        setAdults(value: string) {
          set((store) => {
            store.travelerAndClasses.adults = value;
          });
        },
        setChildren(value: string) {
          set((store) => {
            store.travelerAndClasses.children = value;
          });
        },
        setInfants(value: string) {
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
            store.travelerAndClasses = { ...store.travelerAndClasses, ...value };
          });
        },
        get,
      })
    )
  )
);
