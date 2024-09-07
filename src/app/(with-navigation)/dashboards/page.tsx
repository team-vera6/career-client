'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { DashboardDataResponse, getDashboardData } from '@/apis/dashboard/get';
import { getCurrentWeek } from '@/utils/date';

import MemoList from './_components/MemoList';
import Metrics from './_components/Metrics';
import TodoList from './_components/TodoList';
import WeekNavigator from './_components/WeekNavigator';

const { year, month, week } = getCurrentWeek();

export default function DashboardPage() {
  const [data, setData] = useState<DashboardDataResponse>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDashboardData({ year, month, week });
    setData(data);
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
