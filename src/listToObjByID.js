export const listToObjByID = ({ array, key, myObj }) =>
  array.length
    ? array.reduce((obj, item) => {
        return myObj !== undefined
          ? { ...obj, [item[myObj][key]]: item }
          : { ...obj, [item[key]]: item };
      }, {})
    : {};
