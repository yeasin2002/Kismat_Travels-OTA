import { cabinClassOption } from "$data/travelClasses";
import { useOneWay, useTwoWay } from "$store";
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useMultiCity } from "./useMultiCity";

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

          if (tripType !== "multi-city") {
          }

          if (tripType === "one-way") {
            const oneWay = useOneWay.getState();

            return {
              AdultQuantity: oneWay.travelerAndClasses.adults,
              ChildQuantity: oneWay.travelerAndClasses.children,
              InfantQuantity: oneWay.travelerAndClasses.infants,
              JourneyType: "1",
              Segments: [
                {
                  Origin: oneWay.from,
                  Destination: oneWay.to,
                  CabinClass: (cabinClassOption.indexOf(oneWay.travelerAndClasses.travelClass) + 1).toString(),
                  DepartureDateTime: oneWay.departure,
                },
              ],
            };
          }
          if (tripType === "round-tripe") {
            const twoWay = useTwoWay.getState();

            return {
              AdultQuantity: twoWay.travelerAndClasses.adults,
              ChildQuantity: twoWay.travelerAndClasses.children,
              InfantQuantity: twoWay.travelerAndClasses.infants,
              JourneyType: "1",
              Segments: [
                {
                  Origin: twoWay.from,
                  Destination: twoWay.to,
                  CabinClass: (cabinClassOption.indexOf(twoWay.travelerAndClasses.travelClass) + 1).toString(),
                  DepartureDateTime: twoWay.departure,
                  ReturnDateTime: twoWay.back,
                },
              ],
            };
          }
          if (tripType === "multi-city") {
            const multiCity = useMultiCity.getState();
            const cabinNumber = (cabinClassOption.indexOf(multiCity.travelerAndClasses.travelClass) + 1).toString();

            return {
              AdultQuantity: multiCity.travelerAndClasses.adults,
              ChildQuantity: multiCity.travelerAndClasses.children,
              InfantQuantity: multiCity.travelerAndClasses.infants,
              JourneyType: "1",
              Segments: multiCity.cities.map((city) => ({
                Origin: city.from,
                Destination: city.to,
                CabinClass: cabinNumber,
                DepartureDateTime: city.departure,
              })),
            };
          }
        },
      })
    )
  )
);
