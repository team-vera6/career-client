const SettingAccount = () => {
  return (
    <div className="flex flex-col gap-16 w-full">
      <div>
        <p className="font-body-14 text-text-strong mb-4">이용약관</p>
        <p className="font-body-14 text-text-strong">개인정보 처리방침</p>
      </div>

      <div className="flex gap-2">
        <button className="button-line button-medium text-state-negative flex-1">회원탈퇴</button>
        <button className="button-line button-medium text-text-strong flex-1">로그아웃</button>
      </div>
    </div>
  );
};

export default SettingAccount;
