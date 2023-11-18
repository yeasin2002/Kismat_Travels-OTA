import { StaticsContext } from "$context";
import { useContext } from "react";

export function useStatics() {
  const statics = useContext(StaticsContext);
  if (!statics) throw new Error("Use useStatics inside provider!");
  return statics;
}
