import PlusIcon from '@/components/icons/PlusIcon';

const AddButton = () => {
  return (
    <div className="w-full flex items-center justify-between mb-[1.875rem]">
      <p className="font-head-20 text-text-strong">프로젝트</p>
      <button className="button-primary button-medium">
        <PlusIcon size={20} stroke="#fff" />
        <p className="font-body-14 text-text-invert">추가</p>
      </button>
    </div>
  );
};

export default AddButton;
