export const maskCardNumber = (number: string) => {
  return "************" + number.slice(-4);
};
