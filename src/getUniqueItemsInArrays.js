export const getUniqueItemsInArrays = (arr1, arr2) =>
  arr1.filter(n => arr2.indexOf(n) === -1);
