import TextLogo from '@/components/icons/TextLogo';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex justify-center pt-60">
      <div className="flex flex-col items-center">
        {/* 컴포넌트로 변경 후 수정 필요 */}
        <TextLogo />
        {children}
      </div>
    </div>
  );
}
