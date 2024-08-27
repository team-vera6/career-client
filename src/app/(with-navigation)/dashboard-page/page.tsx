'use client';

import { useSetAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { DashboardData, getDashboardData } from '@/apis/get-dashboard/get';
import { currentTodoListAtom } from '@/app/review/stores';
import { getCurrentWeek } from '@/utils/date';

import MemoList from './_components/MemoList';
import Metrics from './_components/Metrics';
import TodoList from './_components/TodoList';
import WeekNavigator from './_components/WeekNavigator';

const { year, month, week } = getCurrentWeek();

export default function DashboardPage() {
  const setTodos = useSetAtom(currentTodoListAtom);

  const [data, setData] = useState<DashboardData>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDashboardData({ year, month, week });
    setData(data);

    updateTodo(data.todos);
  };

  const updateTodo = (todoFromDashboard: DashboardData['todos']) => {
    setTodos(
      todoFromDashboard.map((todo) => {
        return {
          week: 'current',
          isChecked: false,
          todo: todo.content,
          id: String(todo.id),
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

          <Link href="/review/step1">
            <button className="button-primary button-large">회고하기</button>
          </Link>
        </section>

        <div className="flex gap-9">
          <TodoList />
          <MemoList />
        </div>
      </div>
    </div>
  );
}
