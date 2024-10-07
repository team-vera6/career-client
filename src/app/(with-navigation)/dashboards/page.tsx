'use client';

import { AxiosError } from 'axios';
import { useAtom, useSetAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { DashboardDataResponse, getDashboardData } from '@/apis/dashboard/get';
import { currentTodoListAtom } from '@/app/review/stores';
import { useUser } from '@/hooks/useUser';
import useWeekParams from '@/hooks/useWeekParams';
import { displayWeekAtom } from '@/stores/week/displayWeek';
import { CurrentWeek } from '@/types/currentWeek';

import MemoList from './_components/MemoList';
import Metrics from './_components/Metrics';
import { SignUpSuccessModal } from './_components/SignUpSuccessModal';
import TodoList from './_components/TodoList';
import WeekNavigator from './_components/WeekNavigator';

export default function DashboardPage() {
  const {
    year: initialYear,
    month: initialMonth,
    week: initialWeek,
  } = useWeekParams();

  const setTodos = useSetAtom(currentTodoListAtom);
  const [currentWeek, setCurrentWeek] = useAtom(displayWeekAtom);

  const { userExpired } = useUser();

  const [data, setData] = useState<DashboardDataResponse>();

  useEffect(() => {
    getData({
      year: currentWeek.year,
      month: currentWeek.month,
      week: currentWeek.week,
    });
  }, [currentWeek]);

  useEffect(() => {
    if (!initialYear || !initialMonth || !initialWeek) return;

    const now = new Date(
      Number(initialYear),
      Number(initialMonth) - 1,
      Number(initialWeek) * 7,
    );

    setCurrentWeek({
      year: Number(initialYear),
      month: Number(initialMonth),
      week: Number(initialWeek),
      date: now.getDate(),
      day: now.getDay() === 0 ? now.getDay() : 4,
    });

    getData({
      year: Number(initialYear),
      month: Number(initialMonth),
      week: Number(initialWeek),
    });
  }, [initialYear, initialMonth, initialWeek, setCurrentWeek]);

  const getData = async ({ year, month, week }: CurrentWeek) => {
    try {
      const data = await getDashboardData({ year, month, week });
      setData(data);
      updateTodo(data.todos);
    } catch (error) {
      userExpired(error as AxiosError);
    }
  };

  const updateTodo = (todoFromDashboard: DashboardDataResponse['todos']) => {
    setTodos(
      todoFromDashboard.map((todo) => {
        return {
          week: 'current',
          isChecked: false,
          todo: todo.content,
          id: todo.id,
          isMoved: false,
        };
      }),
    );
  };

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Metrics
        weekStreak={data.laps}
        reviewCount={data.reviewCount}
        projectCount={data.projectCount}
      />

      <div className="w-full">
        <section className="flex items-center justify-between mb-6">
          <WeekNavigator />

          <button className="button-primary button-large">
            {data.isReviewed ? (
              <Link
                href={`/history/review?year=${currentWeek.year}&month=${currentWeek.month}&week=${currentWeek.week}`}
              >
                작성한 회고 보기
              </Link>
            ) : (
              <Link href="/review">회고하기</Link>
            )}
          </button>
        </section>

        <div className="flex gap-9">
          <TodoList />
          <MemoList />
        </div>
      </div>

      <SignUpSuccessModal />
    </div>
  );
}
