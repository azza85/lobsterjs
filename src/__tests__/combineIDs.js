import { combineIDs } from "../combineIDs";

const one = 111;
const two = 222;

it("combineIDs 1", () => {
  expect(combineIDs(one, two)).toEqual("111-222");
});

it("combineIDs 2", () => {
  expect(combineIDs(two, one)).toEqual("111-222");
});
