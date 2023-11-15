export function addPercentage(baseNumber: number, percentage = 10) {
  return parseFloat((baseNumber + baseNumber * (percentage / 100)).toFixed(2));
}
