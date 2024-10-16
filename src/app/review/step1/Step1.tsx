import { Achievement } from './_components/achievement/Achievement';
import { PagingButton } from './_components/paging-button/PagingButton';
import { Todo } from './_components/todo/Todo';

export const Step1 = () => {
  return (
    <>
      <section className="flex flex-col gap-4 mb-10">
        <p className="font-head-20 text-text-strong">
          이번 주 레이스는 어떠셨나요?
        </p>
        <Achievement />
      </section>

      <section className="flex flex-col gap-4 mb-8">
        <p className="font-head-20 text-text-strong">
          이번 주 할 일을 점검해 보세요
        </p>
        <Todo />
      </section>

      <PagingButton />
    </>
  );
};
