export * from "./DatesConverter";
export * from "./ISO_DateToConverter";
export * from "./RemainingTime";
export * from "./addPercentage";
export * from "./auth";
export * from "./event";
export * from "./is";
export * from "./localStorage";
export * from "./optionsIndex";
export * from "./regex";
export * from "./request";
export * from "./segmentsValueConverter";
export * from "./transform";
export * from "./uuid";

export function parseNumber(value: any, fallback = 0) {
  if (value === "") return 0;
  const num = parseFloat(value);
  if (!isNaN(num)) return num;
  return fallback;
}
