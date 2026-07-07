import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Партнер шин | Гомель",
  description:
    "Партнер шин в Гомеле: шиномонтаж, автомагазин, автоэлектрика и кузовной ремонт на улице Барыкина 155.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
