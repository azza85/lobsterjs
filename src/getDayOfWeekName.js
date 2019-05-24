import { getDayOfWeek } from "./getDayOfWeek";

export const getDayOfWeekName = dateStr => {
  const day = getDayOfWeek(dateStr);
  const days = [
    { short: "Sun", full: "Sunday" },
    { short: "Mon", full: "Monday" },
    { short: "Tue", full: "Tuesday" },
    { short: "Wed", full: "Wednesday" },
    { short: "Thu", full: "Thursday" },
    { short: "Fri", full: "Friday" },
    { short: "Sat", full: "Saturday" }
  ];
  return days[day] !== undefined ? days[day] : days[0];
};
