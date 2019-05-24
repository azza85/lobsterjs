import { splitString } from "./splitString";

export const splitDate = dateString => {
  const yyyy = splitString("-", dateString, 0);
  const mm = splitString("-", dateString, 1);
  const mmString = mm - 1 > 9 ? mm - 1 : `0${mm - 1}`;
  const dd = splitString("-", dateString, 2);
  return new Date(yyyy, mmString, dd);
};
