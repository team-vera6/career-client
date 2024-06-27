import StarIcon from '@/components/icons/StarIcon';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-state-caution w-11 h-11" />

      <StarIcon width={100} height={100} fill="red" stroke="blue" />
      <StarIcon size={20} />
      <p className="font-title-16">폰트 테스트</p>
      <p className="font-designer">designer font test 012012</p>
    </main>
  );
}
