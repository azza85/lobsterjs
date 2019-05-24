import { onlyUnique } from "./onlyUnique";

export const combineArrayFilterUnique = array =>
  array.reduce((arr, item) => {
    return [...arr, ...item].filter(onlyUnique);
  }, []);
