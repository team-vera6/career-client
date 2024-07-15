const WeekInfo = () => {
  return (
    <div className="w-full flex flex-col w-[44.25rem] gap-6">
      <div className="flex justify-between items-center">
        <p className="font-head-24">
          6월 1주차<sup className="font-body-14 ml-2">6/3 ~ 6/7</sup>
        </p>
        점 3개
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-head-20">6월 1주차는 어떠셨나요?</p>
        <div>네모</div>
      </div>
    </div>
  );
};

export default WeekInfo;
