export const getCurrentWeek = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const currentDayOfWeek = now.getDay(); // 현재 요일 숫자로 가져옴, 0-일요일

  // 현재 요일에서 월요일까지 일수 계산. 오늘 0(일요일)일 경우 월요일까지 6일, 나머지는 현재 요일 - 1
  const daysToMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;

  const startDate = new Date(now);
  startDate.setDate(now.getDate() - daysToMonday); // 이번주 월요일 날짜

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6); // 이번주 일요일 날짜, 월요일 + 6일

  const startMonth = startDate.getMonth() + 1;
  const startDay = startDate.getDate();
  const endMonth = endDate.getMonth() + 1;
  const endDay = endDate.getDate();

  const firstDayOfMonth = new Date(year, month - 1, 1); // 이번달 1일
  const firstDay = firstDayOfMonth.getDay(); // 이번달 1일의 요일
  const daysFromFirstDayToMonday = firstDay === 0 ? 6 : firstDay - 1; // 1일부터 첫번째 월요일까지 일수

  const week = Math.ceil((startDay + daysFromFirstDayToMonday) / 7); // 현재 주차 정보.

  const lastDayOfMonth = new Date(year, month, 0);
  const totalWeek = Math.ceil(lastDayOfMonth.getDate() / 7);

  return {
    year,
    month: startMonth,
    week,
    totalWeek,
    startMonth,
    startDay,
    endMonth,
    endDay,
  };
};

export const getNextWeek = () => {
  const { year, month, week, totalWeek } = getCurrentWeek();
  const isNextWeek = week + 1 > totalWeek ? 1 : 0;
  const isNextMonth = month + isNextWeek > 12 ? 1 : 0;

  const nextYear = year + isNextMonth;
  const nextMonth = month + isNextWeek;
  const nextWeek = isNextWeek ?? week + 1;

  return { nextYear, nextMonth, nextWeek };
};
