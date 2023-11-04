export * from "./airport.interface";
export * from "./modify.interface";
export * from "./prettify.interface";
export * from "./search.interface";
export * from "./user.interface";

export type Prettify<T extends object> = {
  [K in keyof T]: T[K];
} & {};
  