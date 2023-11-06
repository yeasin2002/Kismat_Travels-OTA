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


export function isoToNormalDate(isoDate: string | undefined): string {
  if (!isoDate) {
    return "0:00";
  }
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}:${month}:${year}`;
}

export const isoDateConvert = (date: string | undefined) => {
  const normalTime = isoDateToHour(date);
  const normalDate = isoToNormalDate(date);

  return {
    normalTime,
    normalDate,
  };
};