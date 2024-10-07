/* eslint-disable @typescript-eslint/no-explicit-any */
export const isSameObject = (obj1: any, obj2: any) => {
  const obj1Sorted = Object.keys(obj1)
    .sort()
    .reduce(
      (acc, key) => {
        acc[key] = obj1[key];
        return acc;
      },
      {} as Record<string, unknown>,
    );

  const obj2Sorted = Object.keys(obj2)
    .sort()
    .reduce(
      (acc, key) => {
        acc[key] = obj2[key];
        return acc;
      },
      {} as Record<string, unknown>,
    );

  return JSON.stringify(obj1Sorted) === JSON.stringify(obj2Sorted);
};
