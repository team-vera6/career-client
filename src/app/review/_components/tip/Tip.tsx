interface Props {
  category: 'highLight' | 'lowLight';
}

export const Tip = ({ category }: Props) => {
  return (
    <div className="ml-5 mb-8">
      <p className="font-body-14 text-text-strong">
        {category === 'highLight' ? '하이라이트' : '로우라이트'} 작성 Tip
      </p>
      <p className="font-body-13 text-text-normal whitespace-pre-wrap">
        <span className="font-body-14">→ </span>
        인정받은 것이 있다면 어떤 노력을 했는지 떠올려 보세요.{`\n`}
        <span className="font-body-14">→ </span>
        주목할만한 성취가 아니어도 괜찮아요.
      </p>
    </div>
  );
};
