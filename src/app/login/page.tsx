import Image from 'next/image';

import TextLogo from '@/assets/logos/TextLogo.svg';

// import Int02Page from './Int02Page';
// import Int03Page from './Int03Page';
// import Int04Page from './Int04Page';
import Int05Page from './Int05Page';

export default function LoginPage() {
  return (
    <div className="w-full h-full flex justify-center pt-60">
      <div className="flex flex-col items-center">
        {/* 컴포넌트로 변경 후 수정 필요 */}
        <Image src={TextLogo} alt="pitstoptext logo" />
        {/* <Int02Page /> */}
        {/* <Int03Page /> */}
        {/* <Int04Page /> */}
        <Int05Page />
      </div>
    </div>
  );
}
