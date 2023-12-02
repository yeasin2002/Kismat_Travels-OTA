import { useProfit } from "$hooks";

export const calculateTotalChargeWithProfit = (costBeforeProfit: number) => {
  const { profit } = useProfit();
  const actualProfit = profit?.$user || 0;

  return Math.round((costBeforeProfit + (costBeforeProfit * actualProfit) / 100) * 100) / 100;
};
