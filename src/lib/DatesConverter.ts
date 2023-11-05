export function convertMinutes(minutes: string): string {
  const minutesNum = Number(minutes);
  const hours = Math.floor(minutesNum / 60);
  const remainingMinutes = minutesNum % 60;
  return `${hours} Hour ${remainingMinutes} Minutes`;
}
