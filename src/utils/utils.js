export const format = (date) => {
  const myDate = new Date(date);
  const year = myDate.getFullYear();
  const month = myDate.getMonth() + 1;
  const day = myDate.getDate();
  return `${year}-${month}-${day}`;
};