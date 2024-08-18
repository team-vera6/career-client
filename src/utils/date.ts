export const getCurrentWeek = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const day = now.getDate();
  const firstDay = new Date(now.setDate(1)).getDay();
  const week = Math.ceil((day + firstDay) / 7);

  return { year, month, week };
};
