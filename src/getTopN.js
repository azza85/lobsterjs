export const getTopN = (obj, sortField, limit) =>
  Object.keys(obj)
    .map(item => obj[item])
    .sort((a, b) => b[sortField] - a[sortField])
    .slice(0, limit);
