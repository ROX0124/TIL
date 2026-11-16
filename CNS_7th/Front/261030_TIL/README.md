# [Day 4] LG CNS AM Inspire Camp 7기 TIL
작성일: 2026.10.30 (금) | 과목: Next.js 기초
## 오늘 학습한 주제- 
Next.js / 동적 라우팅, params와 searchParams, 서버·클라이언트 컴포넌트
## 오늘 배운 것 — 나만의 언어로 설명
- DOM은 쉽게 말하면 브라우저가 HTML을 JavaScript로 읽고 바꿀 수 있게 만든 객체 트리이다.
- 호이스팅은 쉽게 말하면 선언을 현재 스코프에 미리 등록하는 규칙이다. 코드나 DOM을 실제로 위로 옮기는 것은 아니다.
- `async` 스크립트는 쉽게 말하면 HTML을 읽는 동안 병렬로 내려받다가 준비되는 즉시 실행하는 방식이고, `defer`는 HTML 해석이 끝난 뒤 문서 순서대로 실행하는 방식이다.
- 동적 라우팅은 쉽게 말하면 폴더 이름의 `[blogId]` 같은 자리에 들어온 URL 값을 이용해 여러 페이지를 하나의 코드로 처리하는 방법이다.
- `params`는 쉽게 말하면 `/blog/hello`의 `hello`처럼 경로에서 얻는 값이고, `searchParams`는 `/feed?page=2`의 `page=2`처럼 `?` 뒤에서 얻는 값이다.
- `[...productCategoryName]`은 쉽게 말하면 여러 개의 경로 조각을 문자열 배열로 한꺼번에 받는 catch-all 라우트이다.
- `Suspense`는 쉽게 말하면 비동기 값을 기다리는 부분을 감싸고, 그동안 대신 보여 줄 화면을 정하는 경계이다.
- 서버 컴포넌트는 URL 값을 읽고 HTML을 만드는 일을 담당하고, `"use client"` 컴포넌트는 클릭이나 `useRouter`처럼 브라우저 상호작용을 담당한다.
- `cn`은 JavaScript 기본 문법이 아니라 여러 CSS 클래스 문자열을 조건에 따라 합치는 도우미이다. Tailwind가 찾을 수 있도록 클래스 이름은 소스에 완성된 문자열로 작성하는 것이 안전하다.
- minification은 공백과 주석을 없애고 변수 이름을 줄이는 소스 코드 변환이다. 소스에 메모리 주소가 들어 있는 것이 아니며, 메모리는 실행 시점에 브라우저가 할당한다.
- `iframe`은 쉽게 말하면 현재 문서 안에 다른 HTML 문서를 별도의 영역으로 넣는 요소이다.
## 오늘 직접 작성한 코드
```tsx
// app/(main)/blog/[blogId]/page.tsx
import { Suspense } from "react"
import BlogContent from "@/component/templates/BlogContent"

export default function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>
}) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BlogContent params={params} />
    </Suspense>
  )
}

// component/templates/BlogContent.tsx
export default async function BlogContent({
  params,
}: {
  params: Promise<{ blogId: string }>
}) {
  const { blogId } = await params
  return <p>현재 글: {blogId}</p>
}
```

```tsx
// component/molecules/FeedNextButton.tsx
"use client"

import { useRouter } from "next/navigation"

export default function FeedNextButton({ page }: { page: string }) {
  const router = useRouter()

  return (
    <button onClick={() => router.push(`/feed?page=${Number(page) + 1}`)}>
      Next
    </button>
  )
}
```
## 어려웠던 점 & 해결 과정
- 문제: `params`와 `searchParams`의 차이가 흐릿했다. / 시도: 같은 URL에서 `/`로 나뉜 부분과 `?` 뒤의 부분을 따로 표시했다. / 해결: 경로 조각은 `params`, 쿼리 문자열은 `searchParams`라고 구분했다. / 교훈: URL의 모양부터 보면 어떤 props로 들어오는지 예측할 수 있다.
- 문제: `params`가 일반 객체처럼 보이는데 왜 `await`하는지 헷갈렸다. / 시도: 프로젝트의 Next.js 버전과 실제 타입을 확인했다. / 해결: 현재 저장소의 Next.js 16에서는 `params`와 `searchParams`가 `Promise`이며, `Suspense` 내부의 자식 컴포넌트에서 `await`했다. / 교훈: 프레임워크 버전에 따라 API 형태가 달라질 수 있으므로 실제 프로젝트 타입을 확인해야 한다.
- 문제: 버튼에서만 `"use client"`가 필요한 이유가 어려웠다. / 시도: 서버가 담당하는 URL 읽기와 브라우저가 담당하는 클릭 이벤트를 나누어 보았다. / 해결: URL 값 출력은 서버 컴포넌트에 두고 `useRouter`와 `onClick`만 클라이언트 컴포넌트로 분리했다. / 교훈: 상호작용이 필요한 가장 작은 부분만 클라이언트 컴포넌트로 만드는 것이 좋다.
## 내일 계획 & 아직 모르는 것
- 내일 이어서 할 내용 / 아직 흐릿한 것: 세 동적 라우트를 보지 않고 다시 작성하고, 쿼리 값이 없을 때의 기본값과 같은 키가 여러 번 등장할 때의 배열 처리를 연습한다. `generateStaticParams`, 캐싱, 실제 API `fetch`와 서버 렌더링의 연결은 아직 더 공부할 필요가 있다.
