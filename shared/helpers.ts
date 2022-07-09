export const toDateString = (val: string): string => {
  const date = new Date(val);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');

  return `${day}.${month}.${date.getFullYear()} ${hour}:${minute}`;
};

export const currencyFormat = (num: number): string => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
};
