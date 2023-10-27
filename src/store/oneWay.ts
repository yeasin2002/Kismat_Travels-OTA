import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useOneWay = create(
  immer(
    combine(
      {
        tripType: "one-way" as string | undefined,
        from: "",
        to: "",
        departure: undefined as Date | undefined,
        back: undefined as Date | undefined,
        travelerAndClasses: { adults: "", children: "", infants: "", travelClass: "" },
        searchFrom: "",
        searchTo: "",
      },
      (set, get) => ({
        setTripType(value: string | undefined) {
          set((store) => {
            store.tripType = value;
          });
        },
        setFrom(value: string) {
          set((store) => {
            store.from = value;
          });
        },
        setTo(value: string) {
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
            store.travelerAndClasses = { ...store.travelerAndClasses, ...value };
          });
        },
        get,
      })
    )
  )
);
