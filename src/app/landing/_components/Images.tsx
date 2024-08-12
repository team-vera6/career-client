const Images = () => {
  return (
    <section className="grid grid-rows-2 grid-cols-2 gap-10 mb-[6.25rem] mobile:flex mobile:flex-col mobile:gap-5 mobile:mb-[4.5rem]">
      <div className="bg-surface-foregroundOn rounded-3xl h-[23.25rem] mobile:h-[13.25rem]" />
      <div className="bg-surface-foregroundOn rounded-3xl h-[23.25rem] mobile:h-[13.25rem]" />
      <div className="bg-surface-foregroundOn rounded-3xl h-[23.25rem] mobile:h-[13.25rem] col-span-2" />
    </section>
  );
};

export default Images;
