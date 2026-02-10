import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "하우스메이트 | 실시간 부동산 실거래가 대시보드",
  description: "국토교통부 실거래가 & 토지거래허가 실시간 리더보드 - 서울 및 수도권 부동산 투자 정보",
  keywords: "부동산, 실거래가, 토지거래허가, 서울, 수도권, 아파트, 투자",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
