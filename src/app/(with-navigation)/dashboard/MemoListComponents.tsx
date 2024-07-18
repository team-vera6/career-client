import Image from 'next/image';

import EmptyMemoImage from '@/assets/images/memo-empty.png';
import PlusIcon from '@/components/icons/PlusIcon';

const MemoListComponents = () => {
  return (
    <section className="shrink-0 min-w-[252px]">
      <div className="flex items-center justify-between w-full">
        <p className="font-title-16 text-text-strong">이번 주 메모</p>
        <button className="button-line button-small h-8">
          <PlusIcon size={20} />
          <p className="font-body-13 text-text-strong">추가</p>
        </button>
      </div>

      {/* <div className="flex flex-col gap-3 mt-4">
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
            </div> */}
      <div className="w-[15.75rem] flex items-center flex-col gap-5 mt-[3.75rem]">
        <p className="font-body-16 text-text-normal">남긴 메모가 없어요</p>
        <Image src={EmptyMemoImage} width={100} height={100} alt="no memo" />
      </div>
    </section>
  );
};

export default MemoListComponents;
