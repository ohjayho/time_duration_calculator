import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "주차 시간 계산기",
  description: "주차 시간 계산"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
