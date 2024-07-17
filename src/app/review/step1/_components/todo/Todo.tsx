export const Todo = () => {
  return (
    <div className="rounded-2xl bg-surface-foreground p-9 flex flex-col gap-7">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-title-16">이번주 할 일</p>
          {/* <AddTodo week="current" /> */}
        </div>
      </div>
    </div>
  );
};
