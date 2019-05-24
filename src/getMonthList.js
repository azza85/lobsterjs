export const getMonthList = month => {
  const months = [
    { name: "January", abbrev: "Jan" },
    { name: "February", abbrev: "Feb" },
    { name: "March", abbrev: "Mar" },
    { name: "April", abbrev: "Apr" },
    { name: "May", abbrev: "May" },
    { name: "June", abbrev: "Jun" },
    { name: "July", abbrev: "Jul" },
    { name: "August", abbrev: "Aug" },
    { name: "September", abbrev: "Sep" },
    { name: "October", abbrev: "Oct" },
    { name: "November", abbrev: "Nov" },
    { name: "December", abbrev: "Dec" }
  ];
  return months[parseInt(month, 10)] !== undefined
    ? months[parseInt(month, 10)]
    : { name: "name", abbrev: "abbrev" };
};
