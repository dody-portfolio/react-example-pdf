// 글꼴 로딩 및 스타일을 세밀하게 제어해야 하거나 Next.js를 사용하지 않는 경우 @import 또는 @font-face를 직접 사용하는 것이 더 적합할 수 있습니다.

// 반면, 단순성, 자동 최적화 및 사전 로드가 필수적이라면 특히 Next.js 생태계 내에서는 next/fonts 모듈이 편리한 솔루션이 될 수 있습니다.

import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../static/fonts/Pretendard-Black.subset.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../static/fonts/Pretendard-Black.subset.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../static/fonts/Pretendard-ExtraBold.subset.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../static/fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../static/fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../static/fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../static/fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../static/fonts/Pretendard-Light.subset.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../static/fonts/Pretendard-ExtraLight.subset.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../static/fonts/Pretendard-Thin.subset.woff2",
      weight: "100",
      style: "normal",
    },
  ],
});

export { pretendard };
