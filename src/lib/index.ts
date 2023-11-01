export * from "./event";
export * from "./local-storage";
export * from "./request";

export function parseNumber(value: any, fallback = 0) {
  if (value === "") return 0;
  const num = parseFloat(value);
  if (!isNaN(num)) return num;
  return fallback;
}
