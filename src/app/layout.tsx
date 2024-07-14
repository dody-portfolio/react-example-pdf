import "../style/index.scss";
import { pretendard } from "../provider/FontProvider";
import { customMetadata } from "../provider/MetadataProvider";

export const metadata = customMetadata;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* ko와 ko-KR 차이가 분명하다, 언어만 선언해놓을것인지, 아니면 지역까지 나타낼 것인지, 근데 뭐 한국어는 한국에서만 쓰니까 ko도 문제 없다. */}
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
