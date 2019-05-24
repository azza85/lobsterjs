export const combineIDs = (id1, id2) => {
  const arr = [id1, id2].sort((a, b) => a - b);
  return `${arr[0]}-${arr[1]}`;
};
