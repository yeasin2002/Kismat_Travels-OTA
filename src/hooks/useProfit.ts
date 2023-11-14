import { ProfitContext } from "$context";
import { useContext } from "react";

export function useProfit() {
  const profit = useContext(ProfitContext);
  if (profit) return profit;
  throw new Error("Use useProfit inside provider!");
}
