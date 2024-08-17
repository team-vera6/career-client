import Image from 'next/image';

import PitstopLogo from '../../../assets/logos/Logo.png';

const Header = () => {
  return (
    <header className="py-8 bg-surface-foreground w-full">
      <Image
        src={PitstopLogo}
        alt="pitstop logo"
        width={164}
        height={25}
        priority
      />
    </header>
  );
};

export default Header;
