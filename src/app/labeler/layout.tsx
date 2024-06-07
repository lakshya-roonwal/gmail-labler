export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full px-8 flex justify-center">
      {children}
    </main>
  );
}
