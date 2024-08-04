import Link from 'next/link';

import TextLogo from '@/components/icons/TextLogo';

const Logo = () => {
  return (
    <Link href="/">
      <TextLogo />
    </Link>
  );
};

export default Logo;
