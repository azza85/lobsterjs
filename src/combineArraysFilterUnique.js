import { onlyUnique } from "./onlyUnique";

export const combineArraysFilterUnique = array =>
  array.reduce((arr, item) => {
    return [...arr, ...item].filter(onlyUnique);
  }, []);
