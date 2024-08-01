'use client';

import { useState } from 'react';

import { ReviewDetailSheet } from '../ReviewDetailSheet/ReviewDetailSheet';
import EmptyHistoryReview from './EmptyHistoryReview';
import ReviewItem from './ReviewItem';

const dummy = [
  {
    year: 2024,
    month: 6,
    items: [
      {
        id: '1',
        week: 4,
        content:
          '시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음',
        activeCount: 5,
      },
      {
        id: '2',
        week: 3,
        content: '하이라이트 첫 문장',
        activeCount: 3,
      },
      {
        id: '3',
        week: 2,
        content: '하이라이트 첫 문장',
        activeCount: 1,
      },
      {
        id: '4',
        week: 1,
        content: '하이라이트 첫 문장',
        activeCount: 7,
      },
    ],
  },
  {
    year: 2024,
    month: 5,
    items: [
      {
        id: '5',
        week: 4,
        content:
          '시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음',
        activeCount: 5,
      },
      {
        id: '6',
        week: 3,
        content: '하이라이트 첫 문장',
        activeCount: 3,
      },
    ],
  },
];

const HistoryReview = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedReview, setSelectedReview] = useState('');

  const onClickReview = (id: string) => {
    setSelectedReview(id);
    setShowDetail(true);
  };

  return (
    <>
      {dummy.length ? (
        <>
          <div className="w-full flex flex-col gap-8">
            {dummy.map(({ year, month, items }) => (
              <div className="flex flex-col gap-3" key={`${year}-${month}`}>
                <p className="font-title-16 text-text-normal">
                  {year}년 {month}월
                </p>

                {/* review Container */}
                <div className="flex flex-col gap-2">
                  {items.map((item) => (
                    <ReviewItem
                      key={item.id}
                      onClickReview={onClickReview}
                      {...item}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <EmptyHistoryReview />
      )}

      {showDetail && (
        <ReviewDetailSheet
          selectedReview={selectedReview}
          setShowDetail={setShowDetail}
        />
      )}
    </>
  );
};

export default HistoryReview;
