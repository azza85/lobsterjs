import { getAgeFromYear } from "../getAgeFromYear";

it("getAgeFromYear", () => {
  expect(getAgeFromYear("2000-01-01")).toEqual(19);
});

it("getAgeFromYear", () => {
  expect(getAgeFromYear("2000-10-10")).toEqual(18);
});
