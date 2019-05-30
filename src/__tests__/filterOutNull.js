import { filterOutNull } from "../filterOutNull";

const arr1 = [1, 2, 3, 4, null];
const arr2 = [1, null, 2, 3, 4];
const expected = [1, 2, 3, 4];
it("filterOutNull", () => {
  expect(filterOutNull(arr1)).toEqual(expected);
});

it("filterOutNull", () => {
  expect(filterOutNull(arr2)).toEqual(expected);
});
