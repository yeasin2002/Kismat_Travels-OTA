import { PassengersType } from "$interface";
import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const usePassengers = create(
  persist(
    immer(
      combine(
        {
          passengers: [] as PassengersType[],
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
        })
      )
    ),
    {
      name: "passengers",
    }
  )
);

// import { create } from "zustand";
// import { combine, persist } from "zustand/middleware";
// import { immer } from "zustand/middleware/immer";

// interface BookingConfirmStore {
//   Title: string;
//   FirstName: string;
//   LastName: string;
//   PaxType: string;
//   DateOfBirth: string;
//   Gender: string;
//   Address1: string;
//   CountryCode: string;
//   Nationality: string;
//   ContactNumber: string;
//   Email: string;
//   IsLeadPassenger: boolean;
// }

// const usePassengers = create(
//   persist(
//     immer(
//       combine(
//         {
//           passengers: [] as BookingConfirmStore[],
//         },
//         (set, get) => ({})
//       )
//     ),
//     {
//       name: "passengers",
//     }
//   )
// );
