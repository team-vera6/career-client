import { Achievement } from './_components/achievement/Achievement';
import { Todo } from './_components/todo/Todo';

export default function Step1Page() {
  return (
    <>
      <section className="flex flex-col gap-4 mb-10">
        <p className="font-head-20 text-text-strong">6월 1주차는 어떠셨나요?</p>
        <Achievement />
      </section>

      <section className="flex flex-col gap-4">
        <p className="font-head-20 text-text-strong">
          이번 주 한 일을 체크하고 다음 주를 계획해 보세요.
        </p>
        <Todo />
      </section>
    </>
  );
}
