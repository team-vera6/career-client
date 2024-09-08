import {
  eachDayOfInterval,
  endOfMonth,
  isThursday,
  startOfMonth,
} from 'date-fns';

// 현재 기준 년, 월, 주차 정보
const getCurrentDate = (initialDate?: Date) => {
  const date = initialDate ?? new Date();

  // 주차 계산을 위한 필요한 날짜 정보 추출
  const targetDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  const dayOfWeek = targetDate.getDay() === 0 ? 7 : targetDate.getDay(); // 일요일(0)을 월요일(1)로 변환

  // 기준 주 계산 - ISO 기준으로 목요일이 기준이므로 4를 기준으로 한다.
  targetDate.setDate(targetDate.getDate() + (4 - dayOfWeek));

  // ISO 기준으로 몇 주차인지 계산
  const firstDayOfMonth = new Date(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    1,
  );
  const firstDayOfWeek =
    firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay(); // 월요일 시작

  // 월의 첫째 주의 목요일을 포함하는 날짜 찾기
  const offsetDays = (firstDayOfWeek <= 4 ? 1 : 8) - firstDayOfWeek;
  const firstThursday = new Date(
    firstDayOfMonth.setDate(firstDayOfMonth.getDate() + offsetDays),
  );

  // 주차 계산 (ISO 기준으로 주의 첫 날을 목요일로 계산)
  const diffDays = Math.floor(
    (targetDate.getTime() - firstThursday.getTime()) / (1000 * 60 * 60 * 24),
  );
  const weekNumber = Math.floor(diffDays / 7) + 1;

  return {
    year: targetDate.getFullYear(),
    month: targetDate.getMonth() + 1,
    week: weekNumber,
  };
};

// 해당 월의 총 주차 : 목요일 총 개수
const countThursdaysInMonth = ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  const startDate = startOfMonth(new Date(year, month - 1));
  const endDate = endOfMonth(startDate);

  const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });

  const thursdayCount = daysInMonth.filter((day) => isThursday(day)).length;

  return thursdayCount;
};

// 해당 주차의 시작일
const getStartDateInfo = (initialDate?: Date) => {
  const date = initialDate ?? new Date();

  // 현재 요일과 월요일까지의 차이 계산
  const daysFromMonday = date.getDay() === 0 ? 6 : Math.abs(date.getDay() - 1);

  // 시작일, 현재 요일 - 월요일까지의 차
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - daysFromMonday);

  const newStartDate = startDate.toISOString().split('T')[0];
  const [startYear, startMonth, startDay] = newStartDate.split('-');

  return {
    startDate,
    startYear,
    startMonth,
    startDay,
  };
};

// 해당 주차의 종료일
const getEndDateInfo = (initialDate?: Date) => {
  const date = initialDate ?? new Date();

  const { startDate } = getStartDateInfo(date);

  // 종료일, 시작일 + 6일
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 6);

  const newEndDate = endDate.toISOString().split('T')[0];
  const [endYear, endMonth, endDay] = newEndDate.split('-');

  return { endDate, endYear, endMonth, endDay };
};

// 주차 관련 정보 return
export const getCurrentWeek = (initialDate?: Date) => {
  const date = initialDate ?? new Date();

  const { year, month, week } = getCurrentDate(date);

  const totalWeek = countThursdaysInMonth({ year, month });
  const { startDate, startYear, startMonth, startDay } =
    getStartDateInfo(initialDate);

  const { endDate, endYear, endMonth, endDay } = getEndDateInfo(initialDate);

  return {
    year,
    month,
    week,
    totalWeek,
    startDate,
    startYear,
    startMonth,
    startDay,
    endDate,
    endYear,
    endMonth,
    endDay,
  };
};

// 다음주 주차 정보
export const getNextWeek = (initialDate?: Date) => {
  const date = initialDate ?? new Date();

  const { endDate } = getCurrentWeek(date);

  const nextDate = new Date();
  nextDate.setDate(endDate.getDate() + 1);

  const { year, month, week } = getCurrentDate(nextDate);

  return { nextYear: year, nextMonth: month, nextWeek: week };
};

// 이전주 주차 정보
export const getPrevWeek = (initialDate?: Date) => {
  const date = initialDate ?? new Date();

  const { startDate } = getCurrentWeek(date);

  const prevDate = new Date();
  prevDate.setDate(startDate.getDate() - 1);

  const { year, month, week } = getCurrentDate(prevDate);

  return { prevYear: year, prevMonth: month, prevWeek: week };
};

export const getMemoCreateDate = (createdAt: string) => {
  const [date, time] = createdAt.split(' ');

  const [year, month, day] = date.split('-');

  return `${month}.${day}`;
};
