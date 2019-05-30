import { daysBetweenDates } from "../daysBetweenDates";

const date1 = "2019-01-01";
const date2 = "2019-05-05";

it("daysBetweenDates 0", () => {
  expect(daysBetweenDates(date1, date1)).toEqual(0);
});

it("daysBetweenDates negative", () => {
  expect(daysBetweenDates(date2, date1)).toEqual(124);
});

it("daysBetweenDates positve", () => {
  expect(daysBetweenDates(date1, date2)).toEqual(124);
});
