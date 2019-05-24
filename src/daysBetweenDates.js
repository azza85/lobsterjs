import { splitDate } from "./splitDate";

export const daysBetweenDates = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = splitDate(date1);
  const secondDate = splitDate(date2);
  return Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  );
};
