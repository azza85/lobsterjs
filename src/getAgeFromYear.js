export const getAgeFromYear = date => {
  var ageDifMs = Date.now() - new Date(date).getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
