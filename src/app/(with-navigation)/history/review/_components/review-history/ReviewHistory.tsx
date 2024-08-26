'use client';

import { useEffect, useState } from 'react';

import { getReviewList, Review } from '@/apis/reports/get';
import { CurrentWeek } from '@/types/currentWeek';

import { ReviewDetailSheet } from '../ReviewDetailSheet/ReviewDetailSheet';
import EmptyReviewHistory from './EmptyReviewHistory';
import ReviewWeekGroup from './ReviewWeekGroup';

const ReviewHistory = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedReview, setSelectedReview] = useState(0);
  const [reviews, setReviews] = useState<
    { weekNumber: CurrentWeek; reviews: Omit<Review, 'weekNumber'>[] }[]
  >([]);

  const groupReviewsByWeek = (receivedReviews: Review[]) => {
    const groupedReviews = receivedReviews.reduce(
      (acc, cur) => {
        const { year, month, week } = cur.weekNumber;

        const item = {
          id: cur.id,
          like: cur.like,
          highlightSummary: cur.highlightSummary,
        };

        const key = `${year}-${month}-${week}`;
        if (acc[key]) {
          acc[key].reviews.push(item);
        } else {
          acc[key] = {
            weekNumber: cur.weekNumber,
            reviews: [item],
          };
        }

        return acc;
      },
      {} as Record<
        string,
        { weekNumber: CurrentWeek; reviews: Omit<Review, 'weekNumber'>[] }
      >,
    );

    return Object.values(groupedReviews).sort((a, b) => {
      if (a.weekNumber.year === b.weekNumber.year) {
        if (a.weekNumber.month === b.weekNumber.month) {
          return b.weekNumber.week - a.weekNumber.week;
        }
        return b.weekNumber.month - a.weekNumber.month;
      } else {
        return b.weekNumber.year - a.weekNumber.year;
      }
    });
  };

  useEffect(() => {
    (async () => {
      const response = await getReviewList();

      const sorted = groupReviewsByWeek(response.reviews);
      setReviews(sorted);
    })();
  }, []);

  const onClickReview = (id: number) => {
    setSelectedReview(id);
    setShowDetail(true);
  };

  if (!reviews.length) {
    return <EmptyReviewHistory />;
  }

  return (
    <>
      {reviews.map(({ weekNumber, reviews }) => (
        <ReviewWeekGroup
          key={`${weekNumber.year}-${weekNumber.month}-${weekNumber.week}`}
          weekNumber={weekNumber}
          reviews={reviews}
          onClickReview={onClickReview}
        />
      ))}

      <ReviewDetailSheet
        isOpen={showDetail}
        selectedReview={selectedReview}
        setShowDetail={setShowDetail}
      />
    </>
  );
};

export default ReviewHistory;
