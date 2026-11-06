# [Day 9] LG CNS AM Inspire Camp 7기 TIL

작성일: 2026.11.06 (금) | 과목: 프론트엔드 (Next.js / React / TypeScript)

## 오늘 학습한 주제

**게시물 검색과 정렬(Search & Filter), 실시간 알림(SSE), 로그인 후 원래 페이지로 복귀, 댓글 토글, 배너 캐러셀**

- 사용자가 게시물을 **검색·정렬**하면 URL의 쿼리 문자열로 조건을 전달한다.
- 다른 사용자가 내 게시물에 **좋아요·댓글**을 남기면 알림이 만들어지고, SSE로 화면에 전달될 수 있다.
- 로그인이 필요한 동작을 비회원이 시도하면, 현재 주소를 저장해 **로그인 후 복귀**한다.
- 댓글의 열기/닫기는 React 상태 없이 **HTML 체크박스 + CSS**만으로도 가능하다.
- 배너를 좌우로 넘기는 UI는 **Carousel**을 이용한다.

## 오늘 배운 것 — 나만의 언어로 설명

### 1. Search & Filter: 검색어를 URL에 담아 서버로 전달하기

**Search(검색)는 원하는 글을 찾는 것**, **Filter(필터링)는 조건에 맞는 글만 남기는 것**, **Sort(정렬)는 글의 순서를 바꾸는 것**이다.

예를 들어 `/posts?q=react&sort=DESC&page=1`이라는 주소를 분해하면 다음과 같다.

| 쿼리 | 뜻 | 예시 |
| --- | --- | --- |
| `q` | 검색어 | `react`가 들어간 글 검색 |
| `sort` | 정렬 방향 | `DESC`는 최신순, `ASC`는 오래된순 |
| `page` | 페이지 번호 | 첫 번째 페이지 |

**작동 순서**

1. 검색창에 `react`를 입력한 뒤 **검색** 버튼을 누른다.
2. `<form action="/posts">`가 브라우저의 기본 **GET 요청**을 보낸다. (`method`를 생략하면 GET)
3. 주소가 `/posts?q=react&sort=DESC`처럼 변한다.
4. Next.js 서버 페이지가 `searchParams`에서 `q`, `sort`, `page`를 읽는다.
5. `getCachedPosts(pageNumber, sortOrder, keyword)`가 검색 조건에 맞는 목록을 가져온다.
6. 화면에 검색 결과와 페이지네이션을 표시한다.

저장소의 `PostSearchForm.tsx`에는 검색어를 담는 `name="q"` 입력창과 정렬을 유지하는 `name="sort"` 숨은 입력창이 있다. `posts/page.tsx`는 `await searchParams`로 값을 읽는다.

**여기서 알아둘 개념**

- `GET`: 주로 데이터를 조회할 때 사용한다. 검색 조건이 URL에 드러나기 때문에 주소를 공유하거나 새로고침하기 편하다.
- `searchParams`: `?` 뒤에 붙는 `q=...&sort=...` 같은 값을 읽는 방법이다.
- `defaultValue`: 처음 표시할 입력값을 정한다. 검색 뒤에도 검색어를 보여줄 때 유용하다.
- `encodeURIComponent` / `URLSearchParams`: 공백, 한글, 특수문자가 포함된 검색 조건을 안전하게 URL 형식으로 만든다.

> **주의:** 이 저장소의 검색 대상은 게시물의 **작성자 이름** 또는 **본문**이다. 댓글 본문까지 검색하는 구현은 아니다. 검색어는 앞뒤 공백 제거, 연속 공백 정리, 최대 100자 제한을 거친다.

### 2. SSE: 서버가 새로운 알림을 브라우저에 보내는 방식

**SSE(Server-Sent Events)는 쉽게 말해 서버가 브라우저에 새 소식을 계속 알려주는 단방향 통신**이다.

일반적인 요청·응답은 브라우저가 요청하면 서버가 한 번 답하고 끝난다. SSE는 브라우저가 연결을 열어 두고, 서버가 변화가 있을 때 추가 메시지를 보낸다.

이 프로젝트의 알림 흐름:

1. 다른 사용자가 내 글에 좋아요를 누르거나 댓글을 작성한다.
2. 서버가 데이터베이스에 `Notification` 정보를 저장한다. **내가 내 글에 한 행동은 알림을 만들지 않는다.**
3. MongoDB **Change Stream**이 알림 데이터의 변경을 감지한다.
4. 서버의 `/api/notifications/stream`이 **SSE 형식**으로 해당 사용자에게 이벤트를 보낸다.
5. 브라우저의 `EventSource`가 이벤트를 받아 알림 목록, 안 읽은 개수, 토스트 메시지를 갱신한다.

| 용어 | 초보자용 설명 | 프로젝트 속 역할 |
| --- | --- | --- |
| `EventSource` | 브라우저에서 SSE 연결을 만드는 객체 | 알림 스트림에 접속 |
| `text/event-stream` | 서버가 SSE라고 알려주는 응답 형식 | 끊지 않고 이벤트 전달 |
| `ReadableStream` | 데이터를 조금씩 이어 보내는 통로 | 서버 응답으로 이벤트 출력 |
| MongoDB Change Stream | DB 데이터가 바뀌는 것을 감시하는 기능 | 새 알림·읽음·삭제 변경 감지 |
| `useEffect` | 컴포넌트가 표시된 뒤 외부 시스템과 연결하고 정리하는 곳 | 연결 열기·닫기 |

**알림 이벤트 예시**

- `snapshot`: 최초 접속 시 알림 목록과 안 읽은 개수를 전달한다.
- `insert`: 새 알림을 목록에 추가한다.
- `read`: 해당 알림을 읽음 상태로 바꾼다.
- `delete`: 삭제된 알림을 목록에서 뺀다.

**SSE와 WebSocket은 무엇이 다를까?**

- SSE: 서버 → 브라우저로 메시지를 보내는 데 적합하다. 브라우저는 `EventSource`로 수신한다.
- WebSocket: 브라우저 ↔ 서버가 같은 연결에서 양방향으로 실시간 메시지를 교환한다.
- 이 프로젝트의 **실시간 알림은 SSE**를 사용한다. WebSocket이나 브라우저 푸시 알림 구현과 혼동하지 말자.

**코드에서 확인한 세부 사항**

- 브라우저 탭이 보일 때 SSE를 열고, 숨기거나 컴포넌트가 사라지면 연결을 닫는다.
- 서버는 연결 후 최초 `snapshot`을 보내고, 약 **25초마다 `: ping`**을 보내 연결을 유지한다. 이 `ping`은 화면 알림이 아니다.
- `retry: 10000`은 연결이 끊겼을 때 브라우저의 재연결 대기 시간 **10,000ms(10초)**를 설정한다.
- 로그인하지 않은 사용자는 SSE 엔드포인트에서 **401 응답**을 받는다.
- MongoDB Change Stream은 일반적으로 **레플리카 셋 환경**이 필요하다. 단독 MongoDB에서는 실시간 변경 감지가 동작하지 않을 수 있다.

### 3. Cache와 주기적 새로고침: 어제 배운 Read와 연결하기

어제 배운 것처럼 **캐시는 자주 읽는 데이터를 잠시 보관해 재사용하는 기능**이다.

이 프로젝트는 게시물 목록을 조회할 때 `getCachedPosts`의 `"use cache"`, `cacheTag("posts")`, `cacheLife("max")`를 사용한다. 같은 검색·정렬 조건의 조회 결과를 재사용할 수 있다.

그런데 `PostLiveRefresh.tsx`는 브라우저 탭이 보이는 동안 약 **5초마다 `router.refresh()`**를 호출한다. 이것은 **게시물 화면 새로고침**이지, 알림을 5초마다 가져오는 방식이 아니다.

- `router.refresh()`: 현재 경로의 서버 컴포넌트 데이터를 다시 요청한다.
- `revalidateTag("posts", { expire: 0 })`: 글 생성·수정 등 변경이 생겼을 때 `posts` 캐시를 무효화한다.
- **중요:** `router.refresh()`만으로 서버 데이터 캐시가 무조건 무효화되는 것은 아니다. 데이터 변경 후에는 캐시 갱신 전략이 별도로 필요하다.

즉, **게시물 목록 = 캐시 + 갱신**, **알림 = SSE 실시간 이벤트**라는 차이를 기억하자.

### 4. 로그인 후 원래 페이지로 복귀: `returnTo` 쿠키

**`returnTo`는 쉽게 말해 '로그인하고 나서 돌아갈 주소를 적어 두는 메모'**다.

예를 들어 `/postdetail/123`에서 좋아요를 누르려는데 로그인이 필요하다면:

1. 앱이 돌아갈 경로를 `returnTo` 쿠키에 저장한다.
2. 사용자를 `/login` 페이지로 보낸다.
3. 로그인이 성공하면 `/auth/continue`로 이동한다.
4. 서버가 쿠키를 읽고 삭제한 뒤 원래 경로로 다시 보낸다.

이 저장소에서는 쿠키에 `httpOnly`, `sameSite: "lax"`, `maxAge: 60 * 30` 등의 설정을 사용한다. `httpOnly`이므로 브라우저의 `document.cookie`로 값을 직접 읽지 못한다.

**왜 주소 검사가 필요할까?** 아무 주소나 복귀 대상으로 허용하면 의도하지 않은 외부 사이트로 사용자를 보내는 문제가 생길 수 있다. `safeCallbackPath`는 `/`로 시작하는 내부 경로인지 등을 확인하고, 잘못된 값은 `/`로 돌린다.

### 5. 댓글 열기/닫기: React 상태 없이도 가능하다

**체크박스는 켜짐·꺼짐 상태를 브라우저가 이미 관리한다.** 이 상태를 이용하면 `useState` 없이 댓글 목록을 접었다 펼 수 있다.

- `<input type="checkbox">`: 댓글이 열린 상태인지 기억한다.
- `<label htmlFor="...">`: 라벨을 클릭하면 같은 `id`의 체크박스가 바뀐다.
- Tailwind의 `group-has-[.comments-toggle:checked]/comments:flex`: 그룹 안에 체크된 `.comments-toggle`이 있을 때 댓글 영역을 `flex`로 보이게 한다.
- `defaultChecked={full}`: 상세 화면에서는 처음부터 댓글이 열리도록 만든다.

여기서 `group-has`는 CSS `:has()` 선택자를 이용한다. **화면 표시만 바꾸는 간단한 UI는 반드시 React 상태가 필요한 것은 아니다.** 하지만 댓글 **등록·수정·좋아요** 같은 서버 데이터 변경은 별도의 로직이 필요하다.

### 6. Swiper 느낌의 배너: 실제 라이브러리는 Embla Carousel

**Carousel(캐러셀)은 여러 배너를 한 장씩 가로로 넘겨 보는 UI**다. 오늘 저장소의 `HeroSwiperBanner.tsx`는 `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`를 조합했다.

- `opts={{ loop: true, align: "start" }}`: 마지막 배너 뒤에 처음 배너가 이어지도록 설정한다.
- `slides.map(...)`: 배너 개수만큼 `CarouselItem`을 만든다.
- `useCarousel()`: 현재 슬라이드와 캐러셀 제어 API를 가져온다.
- `api.selectedScrollSnap()`: 현재 선택된 배너 위치를 확인한다.
- `api.scrollTo(index)`: 특정 배너로 이동한다.

> **정확히 구분하기:** 커밋 메시지에는 `swiper`라고 적혀 있지만, `package.json`에 설치된 의존성은 **`embla-carousel-react`**이다. `Swiper`라는 별도 라이브러리를 사용했다고 기록하지 않는다.

## 오늘 직접 작성한 코드

> 아래는 **직접 다시 타이핑할 복습용 최소 예제**다. 저장소의 핵심 패턴을 학습하기 쉽게 줄였으며, 실제로 직접 타이핑·실행했다면 아래 체크박스에 표시한다.

### 실습 ① 검색 폼: URL에 조건 전달하기 (약 10분)

`PostSearchForm.tsx`의 구조를 참고해 작성한다.

```tsx
type Props = {
  keyword: string;
  sortOrder: "ASC" | "DESC";
};

export default function SearchPractice({ keyword, sortOrder }: Props) {
  return (
    <form action="/posts">
      <input type="hidden" name="sort" value={sortOrder} />
      <input
        name="q"
        defaultValue={keyword}
        maxLength={100}
        placeholder="작성자 또는 글 내용 검색"
      />
      <button type="submit">검색</button>
    </form>
  );
}
```

**예상 결과:** `react` 입력 후 검색하면 `/posts?q=react&sort=DESC`와 같은 주소로 이동한다. 쿼리 순서는 달라질 수 있다.

**직접 설명해 보기**

- `name="q"`가 없다면 검색어가 URL에 어떻게 전달될까?
- 왜 정렬값 `sort`는 `type="hidden"`으로 보내는 걸까?
- `defaultValue`와 `value`는 어떻게 다를까?

- [ ] 코드를 직접 타이핑했다.
- [ ] 검색어가 URL에 표시되는지 확인했다.

### 실습 ② SSE 수신: `useEffect`에서 연결하고 정리하기 (약 15분)

이 예제는 **로그인한 상태에서 알림 API가 실행되는 프로젝트 환경**을 전제로 한다. 스트림을 받는 **클라이언트 부분만** 연습하는 코드다.

```tsx
"use client";

import { useEffect, useState } from "react";

export default function NotificationPractice() {
  const [status, setStatus] = useState("알림 대기 중");

  useEffect(() => {
    const source = new EventSource("/api/notifications/stream");

    source.onmessage = (message) => {
      const event = JSON.parse(message.data) as {
        type: string;
        unreadCount?: number;
      };

      if (event.type === "snapshot") {
        setStatus(`안 읽은 알림: ${event.unreadCount ?? 0}개`);
      } else {
        setStatus(`새 이벤트: ${event.type}`);
      }
    };

    return () => source.close();
  }, []);

  return <p>{status}</p>;
}
```

**예상 결과:** 서버가 `snapshot` 이벤트를 보내면 안 읽은 알림 수가 표시된다. 이벤트가 없거나 서버·DB 연결이 준비되지 않았다면 메시지가 바뀌지 않을 수 있다.

**원본과의 차이:** 실제 `NotificationStream.tsx`는 `enabled`로 로그인 여부를 확인하고, 탭이 숨겨지면 연결을 닫으며, 이벤트 파싱 실패도 처리한다. 복습이 끝나면 이 세 가지를 예제에 추가해 보자.

- [ ] `"use client"`를 쓰는 이유를 설명했다.
- [ ] `useEffect`의 `return () => source.close()`가 필요한 이유를 설명했다.
- [ ] `EventSource`와 `fetch()`의 쓰임 차이를 설명했다.

### 실습 ③ 체크박스로 댓글 열기/닫기 (약 5분)

Tailwind CSS가 설정된 프로젝트에서 연습한다.

```tsx
export default function CommentTogglePractice() {
  return (
    <div className="group/comments">
      <input
        id="comment-open"
        type="checkbox"
        className="comments-toggle sr-only"
      />
      <label htmlFor="comment-open" className="cursor-pointer">
        댓글 보기 / 닫기
      </label>
      <div className="hidden group-has-[.comments-toggle:checked]/comments:block">
        댓글 목록이 보입니다.
      </div>
    </div>
  );
}
```

**예상 결과:** `댓글 보기 / 닫기`를 누를 때마다 아래 문장이 나타났다 사라진다. `useState`는 사용하지 않았다.

- [ ] 체크박스와 `htmlFor`/`id` 연결을 확인했다.
- [ ] `group-has-...` 부분을 제거했을 때의 차이를 확인했다.

## 어려웠던 점 & 해결 과정

> 오늘 직접 겪었다고 알려 준 오류 기록은 없으므로, 아래는 **코드를 읽을 때 혼동하기 쉬운 점과 확인 방법**으로 남긴다.

| 헷갈리기 쉬운 문제 | 확인 또는 시도 | 해결할 이해 포인트 | 교훈 |
| --- | --- | --- | --- |
| `async function`과 `<script async>`가 같은 의미인가? | 서버의 `async` 함수와 HTML 스크립트 로딩 속성을 비교 | 전자는 비동기 함수, 후자는 스크립트 로딩·실행 속성 | 같은 단어라도 문맥이 다르다 |
| SSE가 5초마다 알림을 가져오는 것인가? | `NotificationStream`과 `PostLiveRefresh` 비교 | 알림은 SSE, 5초 갱신은 게시물 화면 | **실시간 전달**과 **주기적 조회**를 구분한다 |
| 새 글이 생겼는데 `router.refresh()`만 호출하면 DB 결과가 무조건 최신인가? | `use cache`, `cacheTag`, `revalidateTag` 확인 | 서버 캐시 무효화와 페이지 새 요청은 다른 일 | 캐시를 쓰면 갱신 조건도 설계한다 |
| 댓글 토글에 항상 `useState`가 필요한가? | `label`, `checkbox`, `group-has` 코드 확인 | 단순 표시 전환은 HTML/CSS로 구현할 수 있다 | 브라우저 기본 동작을 먼저 이해한다 |
| `swiper`와 Embla가 같은 라이브러리인가? | `package.json` 확인 | 실제 설치된 것은 `embla-carousel-react` | 이름보다 의존성과 코드를 보고 판단한다 |

## AI와 함께한 부분 (선택)

- **물어본 것:** 11월 6일 GitHub 변경사항을 첨부한 TIL 양식에 맞춰 초보자도 이해할 수 있도록 정리하고, 복습할 코드를 제안해 달라고 요청했다.
- **AI 답 중 검증한 것:** 저장소의 11월 6일 커밋, `docs/2026-11-06-*.md`, `PostSearchForm.tsx`, SSE 라우트, `NotificationStream.tsx`, `PostLiveRefresh.tsx`, `HeroSwiperBanner.tsx`, `package.json` 등을 서로 비교했다.
- **AI가 틀렸던 것 / 유의점:** 실시간 알림을 WebSocket으로 설명하거나, 5초 새로고침을 알림 폴링이라고 설명하거나, 사용 라이브러리를 `swiper`로 단정하면 실제 코드와 다르다. **이 TIL에서는 해당 내용을 구분해 작성했다.**
- **아직 검증하지 않은 것:** 실제 앱 실행 결과, DB 연결 상태, 개인 실습 중 발생한 오류. 실행·확인 후 체크박스 및 오류 기록을 업데이트할 것.

## 내일 계획 & 아직 모르는 것

### 다음 복습 순서 (약 30~40분)

1. **10분:** 검색 폼을 직접 타이핑하고 `q`/`sort`가 URL에 어떻게 담기는지 보기.
2. **15분:** `EventSource` 실습을 타이핑하고 `useEffect`, 이벤트 수신, 연결 종료를 말로 설명하기.
3. **5분:** 댓글 토글에서 `label`, 체크박스, `group-has` 역할 구분하기.
4. **5~10분:** `HeroSwiperBanner.tsx`에서 `map`, `selectedScrollSnap`, `scrollTo`를 찾아 연결해 보기.

### 스스로 답할 질문

1. **Q.** 검색할 때 `GET`을 쓰면 무엇이 편할까?  
   **A.** 검색 조건이 URL에 들어가 새로고침·공유가 쉽다.
2. **Q.** `EventSource`는 무슨 역할일까?  
   **A.** 서버가 보내는 SSE 메시지를 브라우저가 계속 수신하도록 연결한다.
3. **Q.** 왜 SSE 연결을 닫는 정리 코드가 필요할까?  
   **A.** 컴포넌트가 사라진 뒤 불필요한 연결이나 이벤트 처리가 남지 않도록 하기 위해서다.
4. **Q.** 캐시와 `router.refresh()`의 차이는?  
   **A.** 캐시는 데이터를 재사용하는 것이고, `router.refresh()`는 현재 경로 데이터를 다시 요청하는 것이다. 서버 캐시 무효화는 별도다.
5. **Q.** `returnTo`는 왜 필요한가?  
   **A.** 로그인이 끝나면 사용자가 원래 하려고 했던 작업 위치로 돌아가기 위해서다.
6. **Q.** 댓글 토글에 `useState`가 없는 이유는?  
   **A.** 체크박스의 켜짐·꺼짐 상태와 CSS 조건 선택자로 표시를 바꿀 수 있기 때문이다.

### 아직 흐릿한 부분

- [ ] `searchParams`를 서버에서 `await`해 읽는 이유와 입력값 처리 과정
- [ ] SSE의 `snapshot`과 `insert` 이벤트 차이
- [ ] MongoDB Change Stream을 쓰기 위한 서버 환경
- [ ] `use cache`와 `revalidateTag`가 함께 작동하는 방식
- [ ] `useCarousel()`의 `api`와 React `useState`의 역할 차이

### 참고한 실제 코드

- [검색 폼 — `PostSearchForm.tsx`](https://github.com/TheUNIONGraphix/lgcns-dev-7th-fe/blob/main/lgcns-fe-next/component/molecules/PostSearchForm.tsx)
- [글 목록 페이지 — `posts/page.tsx`](https://github.com/TheUNIONGraphix/lgcns-dev-7th-fe/blob/main/lgcns-fe-next/app/%28post%29/posts/page.tsx)
- [알림 SSE 수신 — `NotificationStream.tsx`](https://github.com/TheUNIONGraphix/lgcns-dev-7th-fe/blob/main/lgcns-fe-next/component/molecules/NotificationStream.tsx)
- [알림 SSE 서버 — `route.ts`](https://github.com/TheUNIONGraphix/lgcns-dev-7th-fe/blob/main/lgcns-fe-next/app/api/notifications/stream/route.ts)
- [게시물 화면 갱신 — `PostLiveRefresh.tsx`](https://github.com/TheUNIONGraphix/lgcns-dev-7th-fe/blob/main/lgcns-fe-next/component/organisms/PostLiveRefresh.tsx)
- [캐러셀 — `HeroSwiperBanner.tsx`](https://github.com/TheUNIONGraphix/lgcns-dev-7th-fe/blob/main/lgcns-fe-next/component/organisms/HeroSwiperBanner.tsx)
- [11월 6일 상세 학습 문서](https://github.com/TheUNIONGraphix/lgcns-dev-7th-fe/blob/main/docs/2026-11-06-login-search-sse.md)

---

**오늘의 한 줄 요약:** 검색은 **URL로 조건을 전달**하고, 알림은 **SSE로 실시간 전달**하며, 화면 갱신·로그인 복귀·댓글 표시·캐러셀은 **각기 다른 역할의 도구**로 해결한다.
