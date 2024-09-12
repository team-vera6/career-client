export const getRandomNumber = (initialRange?: number) => {
  const range = initialRange ?? 10000;
  return Math.ceil(Number(Math.random() * range) + 1);
};
