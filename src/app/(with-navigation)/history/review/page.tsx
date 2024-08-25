'use client';

import { useEffect } from 'react';

import { getReviewList } from '@/apis/reports/get';

import Category from '../_components/Category';
import ReviewHistory from './_components/review-history/ReviewHistory';

export default function ReviewHistoryPage() {
  useEffect(() => {
    (async () => {
      const response = await getReviewList();
      console.log(response);
    })();
  }, []);

  return (
    <div className="w-[60rem]">
      <Category />

      <section className="flex flex-col gap-8">
        <ReviewHistory />
      </section>
    </div>
  );
}
