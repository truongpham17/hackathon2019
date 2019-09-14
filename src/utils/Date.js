export function getDate(date) {
  const dateTime = new Date(date);
  return `${dateTime.getDate()} - ${dateTime.getMonth() +
    1} - ${dateTime.getFullYear()}`;
}
