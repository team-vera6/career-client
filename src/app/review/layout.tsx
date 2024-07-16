import TextLogo from '@/components/icons/TextLogo';

export default function ReviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full px-12 max-w-[106rem] min-w-[74.25rem] pt-10">
      <header>
        <TextLogo />
      </header>
      <main>{children}</main>
    </div>
  );
}
