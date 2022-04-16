const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const getFormattedDate = (value: string): string => {

  const parsedDate: Date = new Date(value);
  const date = parsedDate.getDate();
  const month = MONTHS[parsedDate.getMonth()];
  const year = parsedDate.getFullYear();

  return `${month} ${date}, ${year}`;
}

export default getFormattedDate;