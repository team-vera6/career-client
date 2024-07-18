import TextLogo from '@/components/icons/TextLogo';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-dvh flex justify-center pt-60 bg-surface-foreground">
      <div className="flex flex-col items-center">
        <TextLogo />
        <main>{children}</main>
      </div>
    </div>
  );
}
