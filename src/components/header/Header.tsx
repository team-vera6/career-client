import TextLogo from '@/components/icons/TextLogo';

const Header = () => {
  return (
    <header className="h-[4.875rem] w-full sticky top-0 left-0 right-0 bg-surface-invert flex items-center justify-between px-12">
      <TextLogo />

      <div className="flex items-center gap-5">
        <div className="w-24 h-12 bg-red-10 flex items-center justify-center rounded-full">0/4</div>
        <div className="w-10 h-10 bg-surface-alternative rounded-[14px] flex items-center justify-center text-text-invert">
          이
        </div>
      </div>
    </header>
  );
};

export default Header;
