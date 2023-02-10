export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const stringDay = day < 10 ? `0${day}` : day;
  const stringmonth = month < 10 ? `0${month}` : month;
  // eslint-disable-next-line prettier/prettier
  return `${stringDay }.${stringmonth }.${year}`;
};
