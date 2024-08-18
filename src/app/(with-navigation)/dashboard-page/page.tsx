'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { getDashboardData } from '@/apis/get-dashboard/get';

import MemoList from './_components/MemoList';
import Metrics from './_components/Metrics';
import TodoList from './_components/TodoList';
import WeekNavigator from './_components/WeekNavigator';

export default function DashboardPage() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await getDashboardData({ year: 2024, month: 7, week: 4 });
    console.log(response);
  };

  return (
    <div>
      <Metrics weekStreak={12} reviewCount={17} projectCount={3} />

      <div className="w-full">
        <section className="flex items-center justify-between mb-6">
          <WeekNavigator month={7} week={4} />

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
