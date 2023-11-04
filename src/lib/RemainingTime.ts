export function remainingHour(isoDate: string | null): string {
  if (!isoDate) {
    return "00:00";
  }
  let date: Date = new Date(isoDate);
  let hours: number = date.getUTCHours();
  let minutes: number = date.getUTCMinutes();

  let hoursStr: string = hours < 10 ? "0" + hours.toString() : hours.toString();
  let minutesStr: string = minutes < 10 ? "0" + minutes.toString() : minutes.toString();

  let regularHour: string = hoursStr + ":" + minutesStr;

  return regularHour;
}
