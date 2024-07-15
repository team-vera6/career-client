import TextLogo from '@/components/icons/TextLogo';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex justify-center pt-60">
      <div className="flex flex-col items-center">
        <TextLogo />
        <main>{children}</main>
      </div>
    </div>
  );
}
