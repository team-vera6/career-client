import ReviewItem from './ReviewItem';

const dummy = [
  {
    year: 2024,
    month: 6,
    items: [
      {
        week: 4,
        content:
          '시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음',
        activeCount: 5,
      },
      {
        week: 3,
        content: '하이라이트 첫 문장',
        activeCount: 3,
      },
      {
        week: 2,
        content: '하이라이트 첫 문장',
        activeCount: 1,
      },
      {
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
        week: 4,
        content:
          '시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음',
        activeCount: 5,
      },
      {
        week: 3,
        content: '하이라이트 첫 문장',
        activeCount: 3,
      },
    ],
  },
];

const HistoryReviewContainer = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      {dummy.map(({ year, month, items }, index) => (
        <div className="flex flex-col gap-3" key={String(index)}>
          <p className="font-title-16 text-text-normal">
            {year}년 {month}월
          </p>
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <ReviewItem key={item.content} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryReviewContainer;
