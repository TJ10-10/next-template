import '../styles/global.css';

export const metadata = {
  title: "Next Template",
  description: "Next.js + Tailwind CSS + TypeScript + Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
