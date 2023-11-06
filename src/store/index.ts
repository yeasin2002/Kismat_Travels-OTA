import { createTripStore } from "./createTripStore";

export * from "./Passengers";
export * from "./SearchStates";
export * from "./createTripStore";
export * from "./tripType";

export const useOneWay = createTripStore("one-way");
export const useTwoWay = createTripStore("round-tripe");
