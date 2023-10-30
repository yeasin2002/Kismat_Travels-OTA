import { createTripStore } from "./createTripStore";

export * from "./tripType";

export const useOneWay = createTripStore("one-way");
export const useTwoWay = createTripStore("round-tripe");
