import { useProfit } from "$hooks";

export const calculateTotalChargeWithProfit = (costBeforeProfit: number) => {
  const { profit } = useProfit();
  const actualProfit = profit?.$user || 0;

  return costBeforeProfit + (costBeforeProfit * actualProfit) / 100;
};
