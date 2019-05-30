import { getCommonItemsInArrays } from "../getCommonItemsInArrays";

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 2, 6, 7, 8];
const commonItems = [2, 3];
it("getCommonItemsInArrays", () => {
  expect(getCommonItemsInArrays(arr1, arr2)).toEqual(commonItems);
});
