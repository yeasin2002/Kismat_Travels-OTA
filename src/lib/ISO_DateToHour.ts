export const isoDateToHour = (isoDate: string | undefined) => {
  if (!isoDate) {
    return "0:00";
  }

  let dateStr: string = isoDate;
  let date: Date = new Date(dateStr);
  let hours: number = date.getHours();
  let minutes: number | string = date.getMinutes();
  let ampm: string = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let regularHour: string = hours + ":" + minutes + " " + ampm;

  return regularHour;
};
