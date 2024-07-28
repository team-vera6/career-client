export const prefixZeros = (num: number) => {
  if (num.toString().length > 1) {
    return num.toString();
  }

  return num.toString().padStart(2, '0');
};
