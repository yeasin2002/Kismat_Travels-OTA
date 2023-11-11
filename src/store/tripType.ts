import { cabinClassOption } from "$data/travelClasses";
import { useOneWay, useTwoWay } from "$store";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useMultiCity } from "./useMultiCity";

export const useTripType = create(
  devtools(
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

            if (tripType === "one-way") {
              const oneWay = useOneWay.getState();

              if (!oneWay.isValid()) return null;

              return {
                AdultQuantity: oneWay.travelerAndClasses.adults,
                ChildQuantity: oneWay.travelerAndClasses.children,
                InfantQuantity: oneWay.travelerAndClasses.infants,
                JourneyType: "1",
                Segments: [
                  {
                    Origin: oneWay.from?.code,
                    Destination: oneWay.to?.code,
                    CabinClass: (cabinClassOption.indexOf(oneWay.travelerAndClasses.travelClass) + 1).toString(),
                    DepartureDateTime: oneWay.departure,
                  },
                ],
              };
            }
            if (tripType === "round-tripe") {
              const twoWay = useTwoWay.getState();

              if (!twoWay.isValid()) return null;

              return {
                AdultQuantity: twoWay.travelerAndClasses.adults,
                ChildQuantity: twoWay.travelerAndClasses.children,
                InfantQuantity: twoWay.travelerAndClasses.infants,
                JourneyType: "1",
                Segments: [
                  {
                    Origin: twoWay.from?.code,
                    Destination: twoWay.to?.code,
                    CabinClass: (cabinClassOption.indexOf(twoWay.travelerAndClasses.travelClass) + 1).toString(),
                    DepartureDateTime: twoWay.departure,
                  },
                  {
                    Origin: twoWay.to?.code,
                    Destination: twoWay.from?.code,
                    CabinClass: (cabinClassOption.indexOf(twoWay.travelerAndClasses.travelClass) + 1).toString(),
                    DepartureDateTime: twoWay.back,
                  },
                ],
              };
            }
            if (tripType === "multi-city") {
              const multiCity = useMultiCity.getState();

              if (!multiCity.isValid()) return null;

              const cabinNumber = (cabinClassOption.indexOf(multiCity.travelerAndClasses.travelClass) + 1).toString();

              return {
                AdultQuantity: multiCity.travelerAndClasses.adults,
                ChildQuantity: multiCity.travelerAndClasses.children,
                InfantQuantity: multiCity.travelerAndClasses.infants,
                JourneyType: "1",
                Segments: multiCity.cities.map((city) => ({
                  Origin: city.from?.code,
                  Destination: city.to?.code,
                  CabinClass: cabinNumber,
                  DepartureDateTime: city.departure,
                })),
              };
            }
          },

          getStat: () => {
            const tripType = get().tripType;

            if (tripType === "one-way") return useOneWay.getState();
            if (tripType === "round-tripe") return useTwoWay.getState();
            return useMultiCity.getState();
          },
        })
      )
    )
  )
);
