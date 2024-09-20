export const getRandomNumber = () => {
  const initialString = Math.random().toString();
  const result = initialString.split('.')[1];
  return result;
};
