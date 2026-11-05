# [Day 8] LG CNS AM Inspire Camp 7기 TIL

작성일: 2026.11.05 (목) | 과목: 프론트엔드 (Next.js · TypeScript)

## 오늘 학습한 주제-

- **Search and Filter**: 원하는 데이터를 검색하고 조건에 맞는 데이터만 보여 주기
- **CRUD와 Cache**: 데이터를 읽는 작업(Read)과 변경하는 작업(Write)을 구분하고, 조회 결과를 재사용하기
- 함께 살펴본 개념: `searchParams`, 정렬(Sort), 페이지네이션(Pagination), Server Action, 캐시 무효화

## 오늘 배운 것 — 나만의 언어로 설명

### 1. Search와 Filter는 무엇이 다를까?

- **Search(검색)**는 쉽게 말하면 **입력한 검색어와 관련된 데이터를 찾는 것**이다.
  - 예: 검색창에 `React`라고 입력하면 제목이나 본문에 `React`가 들어간 게시글을 찾는다.
- **Filter(필터)**는 쉽게 말하면 **정해진 조건에 맞는 데이터만 골라 보여 주는 것**이다.
  - 예: 전체 게시글에서 `작성자=홍길동`인 글만 남기거나 `좋아요 10개 이상`인 글만 선택한다.
- **Sort(정렬)**는 **결과의 순서만 바꾸는 것**이다.
  - 예: 최신순(`DESC`)과 오래된순(`ASC`)으로 나열한다. 정렬은 일반적으로 검색 결과의 개수를 줄이지 않는다.
- **Pagination(페이지네이션)**은 **결과를 여러 페이지로 나누는 것**이다.
  - 예: 게시글이 100개여도 한 화면에 20개씩만 가져와서 1~5페이지로 나눈다.

| 구분 | 질문으로 기억하기 | 예시 |
| --- | --- | --- |
| Search | **무엇을 찾을까?** | `React`라는 단어가 포함된 글 |
| Filter | **어떤 조건에 맞아야 할까?** | 좋아요 10개 이상인 글 |
| Sort | **어떤 순서로 볼까?** | 최신순 / 오래된순 |
| Pagination | **몇 개씩 나눠 볼까?** | 한 페이지에 20개 |

**왜 사용할까?** 데이터가 많아질수록 사용자가 원하는 정보를 한 번에 찾기 어렵기 때문이다. 검색·필터로 필요한 데이터를 좁히고, 정렬·페이지네이션으로 보기 편하게 만든다.

> **실제 GitHub 코드와 구분하기:** `/feed`에서는 URL의 `page`, `limit`, `sort`, `search` 값을 읽어서 화면에 보여 준다. 그러나 이 값으로 DB를 실제 검색·필터링하는 기능까지 구현된 것은 아니다. 반면 `/posts`에는 최신순/오래된순 **정렬**과 **페이지네이션**이 구현되어 있다.

### 2. CRUD: 데이터를 읽는 작업과 변경하는 작업

**CRUD**는 애플리케이션에서 데이터를 다루는 네 가지 기본 작업이다.

| CRUD | 뜻 | 분류 | 게시판 예시 | 저장 데이터가 바뀔까? |
| --- | --- | --- | --- | --- |
| **C** | Create: 생성 | Write | 게시글 작성 | 예 |
| **R** | Read: 조회 | Read | 게시글 목록/상세 보기 | 아니요 |
| **U** | Update: 수정 | Write | 게시글 내용 수정 | 예 |
| **D** | Delete: 삭제 | Write | 게시글 삭제 | 예 |

- **Write(쓰기)** = Create + Update + Delete: 데이터를 새로 만들거나, 바꾸거나, 제거한다.
- **Read(읽기)** = Read: 이미 저장된 데이터를 가져온다.
- **Search와 Filter도 데이터를 찾고 보여 주는 과정**이므로 기본적으로 Read 쪽에 속한다.
- **Cache는 CRUD의 다섯 번째 작업이 아니다.** 주로 **Read를 더 효율적으로 처리하기 위해** 조회 결과를 저장하고 재사용하는 방법이다.

쉽게 기억하면 **게시글을 올리면 Write, 게시글을 보면 Read**다.

### 3. `searchParams`: URL 뒤의 조건 읽기

예를 들어 아래 주소를 보자.

```text
/posts?page=2&sort=ASC
```

- `?` 뒤에 오는 부분이 **쿼리 문자열(query string)**이다.
- `page=2`는 **2페이지를 보여 달라**는 뜻이다.
- `&`는 여러 조건을 구분한다.
- `sort=ASC`는 **오래된순으로 보여 달라**는 뜻이다.

오늘의 Next.js 코드에서는 `searchParams`로 이 값을 받아 서버 컴포넌트에서 사용한다. Next.js 16의 이 페이지에서 `searchParams`는 **Promise**이므로 `await`로 값을 꺼낸다.

```tsx
// app/(post)/posts/page.tsx 의 핵심 흐름을 단순화한 예시
async function PostsContent({ searchParams }: {
  searchParams: Promise<{ page?: string; sort?: string }>;
}) {
  const { page, sort } = await searchParams;
  const pageNumber = Number(page ?? 1);
  const sortOrder = sort === "ASC" ? "ASC" : "DESC";

  // 페이지 번호와 정렬 조건에 따라 목록을 읽는다.
  const postList = getCachedPosts(pageNumber, sortOrder);
  // ... 화면에 목록 표시
}
```

**주의:** 위 코드는 흐름 설명을 위한 축약 예시다. 실제 저장소에서는 `readPage()`가 잘못된 페이지 번호를 1로 바꾸고, `readSort()`가 잘못된 정렬 값을 `DESC`로 처리한다. 숫자 변환만 해서는 `NaN`, 0, 소수 등의 잘못된 입력을 모두 막을 수 없다.

### 4. Cache: 같은 데이터를 매번 DB에서 읽어야 할까?

**캐시(Cache)**는 쉽게 말하면 **한 번 읽어 온 결과를 잠시 보관했다가 다음에 다시 사용하는 것**이다.

예를 들어 사용자가 같은 게시글 목록을 여러 번 연다고 하자.

- **캐시가 없으면**: 화면 요청 → 매번 DB 조회 → 결과 표시
- **캐시가 있으면**: 첫 요청 → DB 조회 후 결과 저장 → 같은 조건의 다음 요청 → 저장된 결과 재사용

이렇게 하면 같은 조회를 반복할 때 DB 부담을 줄이고 응답을 빠르게 할 수 있다. 단, **모든 Read가 자동으로 캐시되는 것은 아니며**, 저장된 값이 오래되면 최신 데이터와 달라질 수 있다.

이번 저장소의 핵심 코드는 다음과 같다.

```ts
// lgcns-fe-next/lib/postCache.ts에서 발췌
import { cacheLife, cacheTag } from "next/cache";

export async function getCachedPosts(
  pageNumber: number,
  sortOrder: "ASC" | "DESC",
) {
  "use cache";
  cacheTag("posts");
  cacheLife("max");

  return postService.listPosts(pageNumber, sortOrder);
}
```

| 코드 | 쉽게 말하면 |
| --- | --- |
| `"use cache"` | 이 함수의 반환 결과를 캐시하도록 지정 |
| `cacheTag("posts")` | 캐시에 `posts`라는 이름표를 붙임 |
| `cacheLife("max")` | `max`라는 캐시 수명 설정을 사용 |
| `listPosts(pageNumber, sortOrder)` | 필요한 페이지와 정렬 조건으로 게시글 조회 |

**핵심:** `getCachedPosts(1, "DESC")`와 `getCachedPosts(2, "DESC")`는 전달한 인자가 다르므로 **서로 다른 캐시 항목**이 된다. 현재 프로젝트는 `next.config.ts`에서 `cacheComponents: true`를 설정하고 있다.

### 5. Write를 했다면 캐시를 갱신해야 한다

다음 상황을 생각해 보자.

1. 내가 `/posts`를 열어서 게시글 10개를 조회하고 결과가 캐시에 저장된다.
2. 다른 사용자가 새 게시글 1개를 작성해서 DB에는 11개가 된다.
3. 캐시를 무효화하지 않으면, 다음 조회에 **이전의 10개짜리 결과**가 보일 수 있다.

그래서 오늘의 코드에서는 **Write가 성공하면 관련 Read 캐시를 만료**시킨다.

```ts
// lgcns-fe-next/actions/postActions.ts의 createPost 핵심 부분
const result = await postService.createPost({
  authorId: user.id,
  authorName: user.name,
  body: String(formData.get("body") ?? ""),
});

if (!result.ok) return;
updateTag("posts");
redirect(`/postdetail/${result.id}`);
```

- `postService.createPost(...)`: DB에 게시글을 저장하는 **Write**.
- `if (!result.ok) return`: 저장에 실패했다면 캐시를 불필요하게 무효화하지 않음.
- `updateTag("posts")`: `posts`라는 이름표가 붙은 캐시를 **즉시 만료**시킴.
- `redirect(...)`: 새로 작성한 글의 상세 페이지로 이동.

**`updateTag`는 이번 Next.js 코드에서 Server Action 안에서만 사용하는 기능**이다. `"use cache"` 함수 안에서 `searchParams`나 `cookies()` 같은 요청별 값을 직접 읽지 않도록 주의해야 한다. 그런 값은 캐시 밖에서 읽고, 필요한 값을 인자로 전달한다.

정리하면 이번 코드의 데이터 흐름은 다음과 같다.

```text
게시글 조회(Read) → 캐시에 같은 조건의 결과가 있나?
                 ├─ 있음 → 캐시 결과 사용
                 └─ 없음 → DB 조회 → 결과 캐시에 저장

게시글 작성·수정·삭제(Write) → DB 저장 성공 → updateTag("posts")
                                             ↓
                                       다음 Read에서 새로 조회
```

### 6. 현재 프로젝트의 역할 분담

| 파일 | 하는 일 |
| --- | --- |
| `app/(main)/feed/page.tsx`, `component/templates/FeedContent.tsx` | URL의 `page`, `limit`, `sort`, `search`를 읽고 표시하는 연습 |
| `app/(post)/posts/page.tsx` | 페이지·정렬 값 읽기, 최신순/오래된순 링크 만들기 |
| `service/postService.ts` | Prisma로 게시글 조회/작성/수정/삭제 등의 실제 DB 작업 |
| `lib/postCache.ts` | 조회 결과에 `"use cache"`와 `posts` 태그 적용 |
| `actions/postActions.ts` | 글 작성/수정/삭제 후 `updateTag("posts")` 호출 |

**코드 확인 메모:** 현재 `service/postService.ts`의 `pageSize`는 **20**이다. 일부 강의 설명 문서에 적힌 50과 다르므로, 현재 실행 코드를 읽을 때는 20을 기준으로 이해한다.

## 오늘 직접 작성한 코드

> 아래 코드는 **내가 직접 다시 타이핑해 볼 복습 코드**다. 강의 저장소에 있는 기능과 별개인 학습용 예시는 따로 표시했다. 실제로 내가 타이핑하여 실행했는지는 복습 후 체크한다.

### 실습 A. 배열에서 Search와 Filter 차이 체험하기 (학습용 예제)

`posts`라는 간단한 배열을 만들고, `filter()`와 `includes()`를 직접 사용해 보자.

```ts
const posts = [
  { id: 1, title: "React 기초", category: "frontend" },
  { id: 2, title: "Next.js 라우팅", category: "frontend" },
  { id: 3, title: "SQL 기초", category: "database" },
];

// Search: 제목에 "기초"라는 글자가 들어간 글 찾기
const searched = posts.filter((post) => post.title.includes("기초"));

// Filter: 카테고리가 "frontend"인 글만 고르기
const filtered = posts.filter((post) => post.category === "frontend");

console.log(searched.map((post) => post.title));
console.log(filtered.map((post) => post.title));
```

예상 출력:

```text
[ 'React 기초', 'SQL 기초' ]
[ 'React 기초', 'Next.js 라우팅' ]
```

- `filter(...)`: 조건이 `true`인 항목만 **새 배열**로 만든다. 원본 배열은 바꾸지 않는다.
- `includes("기초")`: 해당 문자열이 제목에 포함되어 있으면 `true`를 반환한다.
- `===`: 좌우 값이 일치하는지 비교한다.
- `map(...)`: 각 객체에서 제목만 꺼내 새 배열로 만든다.

**직접 바꿔 보기:** 검색어를 `Next`로 바꾸고, 카테고리를 `database`로 바꿔서 출력이 어떻게 달라지는지 확인한다.

### 실습 B. URL의 정렬 값 읽기 (프로젝트 코드 복습)

```ts
// app/(post)/posts/page.tsx의 readSort 함수
function readSort(sort: string | string[] | undefined): "ASC" | "DESC" {
  const raw = Array.isArray(sort) ? sort[0] : sort;
  return raw === "ASC" ? "ASC" : "DESC";
}

console.log(readSort("ASC"));       // ASC
console.log(readSort("DESC"));      // DESC
console.log(readSort(undefined));   // DESC
```

- `string | string[] | undefined`: 하나의 문자열, 문자열 배열 또는 값 없음이 들어올 수 있다는 뜻이다.
- `Array.isArray(sort)`: 배열이면 첫 번째 값을 꺼낸다.
- `조건 ? 참일 때 : 거짓일 때`: 삼항 연산자다.

**복습 순서:** ① 실습 A를 타이핑 → ② 실습 B를 타이핑 → ③ 저장소의 `posts/page.tsx` → `postCache.ts` → `postActions.ts`를 따라 읽는다.

## 어려웠던 점 & 해결 과정

> 오늘 실제 오류를 재현하거나 해결한 기록은 없으므로, 아래는 **복습 중 특히 헷갈리기 쉬운 부분**을 정리한 것이다.

- **문제:** Search, Filter, Sort가 모두 목록을 보여 주는 기능이라 구분이 어렵다.
  - **시도:** 결과가 줄어드는지, 순서만 바뀌는지 생각했다.
  - **해결:** Search=단어로 찾기 / Filter=조건으로 고르기 / Sort=순서 바꾸기로 나눠 기억한다.
  - **교훈:** 이름이 비슷해도 데이터에 하는 일이 다르다.
- **문제:** 캐시가 Read에 속한다면 Write 후에는 왜 추가 작업이 필요할까?
  - **시도:** "기존 조회 결과가 남아 있을 수 있다"는 상황을 가정했다.
  - **해결:** DB 저장 성공 후 `updateTag("posts")`로 관련 캐시를 만료시키는 코드를 확인했다.
  - **교훈:** 캐시는 조회를 빠르게 하지만 **최신 데이터와 일치하도록 관리**해야 한다.
- **문제:** `searchParams` 값을 곧바로 `"use cache"` 함수 안에서 읽어도 될까?
  - **시도:** 페이지와 캐시 함수의 역할을 나눠 보았다.
  - **해결:** 페이지에서 `await searchParams`로 읽고, 캐시 함수에 `pageNumber`와 `sortOrder`를 인자로 전달한다.
  - **교훈:** 요청마다 달라지는 값을 읽는 위치와 캐시하는 위치를 분리한다.

## AI와 함께한 부분 (선택)

- **물어본 것:** 오늘의 Search and Filter, CRUD의 Read/Write 구분, Cache의 위치를 초보자 관점으로 정리하고 GitHub의 실제 코드와 연결해 달라고 요청했다.
- **AI 답 중 검증한 것:** 2026-11-05 커밋의 `posts/page.tsx`에서 정렬과 페이지네이션, `postCache.ts`에서 `"use cache"`/`cacheTag`, `postActions.ts`에서 성공 후 `updateTag`를 확인했다. Next.js 공식 문서에서도 캐시 함수의 인자·캐시 무효화 동작을 대조했다.
- **AI가 틀렸던 것:** 이번 정리에서 확인된 AI 설명 오류는 없다. 다만 강의 문서 일부에는 페이지당 50개라고 적혀 있으나 **현재 코드의 실제 값은 20**이므로 코드 우선으로 정리했다.
- **검증 범위:** 코드와 문서를 읽어 확인했으며, 앱 실행이나 DB 연동 테스트까지 진행한 것은 아니다.

## 내일 계획 & 아직 모르는 것

- **내일 이어서 할 내용**
  1. `filter()`와 `includes()` 예제를 직접 타이핑하고 검색어·카테고리를 바꿔 본다.
  2. `/feed?page=1&limit=20&sort=DESC&search=React` 주소에서 각각의 값이 화면에 어떻게 표시되는지 확인한다.
  3. `/posts` 페이지에서 최신순/오래된순을 눌러 URL과 게시글 순서가 바뀌는지 확인한다.
  4. 여유가 있다면 현재는 표시만 하는 `search` 값을 이용해 **실제 글 검색 기능**을 만드는 방법을 알아본다.
- **아직 흐릿한 것 (스스로 답해 보기)**
  1. `Search`와 `Filter`는 어떻게 다른가?
  2. 게시글에 댓글을 작성하면 CRUD의 어느 작업인가?
  3. 캐시는 왜 Read와 관련이 있으며 CRUD에 별도로 넣지 않는가?
  4. 게시글을 수정한 후 `updateTag("posts")`를 하지 않으면 어떤 일이 생길 수 있는가?
  5. `?page=2&sort=ASC`에서 `page`와 `sort`는 각각 무엇을 뜻하는가?

**오늘의 한 줄 정리:** Search와 Filter는 원하는 데이터를 찾는 **Read** 작업이고, Cache는 Read 결과를 재사용하는 방법이며, Create·Update·Delete 같은 **Write** 후에는 캐시가 낡지 않도록 관리해야 한다.

참고 자료: [강의 GitHub 저장소](https://github.com/ROX0124/CNS7th_Frontend) · [Next.js `use cache`](https://nextjs.org/docs/app/api-reference/directives/use-cache) · [Next.js `searchParams`](https://nextjs.org/docs/app/api-reference/functions/use-search-params) · [Next.js `updateTag`](https://nextjs.org/docs/app/api-reference/functions/updateTag)
