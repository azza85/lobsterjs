import { combineArraysFilterUnique } from "../combineArraysFilterUnique";

it("combineArraysFilterUnique", () => {
  const aaa = [[1, 2, 3], [3, 1, 4, 6]];
  const bbb = [1, 2, 3, 4, 6];
  expect(combineArraysFilterUnique(aaa)).toEqual(bbb);
});
