# [Day 5] LG CNS AM Inspire Camp 7기 TIL

작성일: 2026.11.02 (월) | 과목: 프론트엔드 — Next.js, React, REST API, Prisma/MongoDB

## 오늘 학습한 주제

**Next.js 로그인 화면의 컴포넌트 설계와 서버·데이터베이스 연결**

- 핵심 키워드: **SSR/CSR와 Hydration**, **FormData → Server Action → REST API → Prisma → MongoDB**
- 함께 다룬 기술: Tailwind CSS, shadcn/ui, HTTP Stateless, `router.replace()`
- 참고: [11월 2일 GitHub 실습 저장소](https://github.com/ROX0124/CNS7th_Frontend) — `lgcns-dev-7th-fe/lgcns-fe-next`

## 오늘 배운 것 — 나만의 언어로 설명

### 1. Tailwind CSS와 shadcn/ui

- **Tailwind CSS는 쉽게 말하면** CSS를 별도 파일에 일일이 적는 대신 `flex`, `p-4`, `rounded-md`처럼 기능별 클래스를 조합해 디자인하는 방식이다.
- **shadcn/ui는 쉽게 말하면** 버튼이나 입력창처럼 자주 쓰는 UI 부품의 코드를 프로젝트에 가져와 수정·재사용할 수 있게 해 주는 도구다.
- **왜 쓰는가?** 같은 디자인을 여러 화면에서 쉽게 재사용하고, 화면 구성에 드는 시간을 줄이기 위해서다.

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

<div className="flex flex-col gap-4 p-4">
  <Input placeholder="아이디" />
  <Button type="button">확인</Button>
</div>
```

`gap-4`는 요소 사이 간격, `p-4`는 안쪽 여백이다. `{ Button }`처럼 중괄호가 있는 import는 해당 파일의 **이름 있는 export**를 가져온다는 뜻이다.

### 2. 큰 화면을 작은 컴포넌트로 나누는 이유

- **컴포넌트 설계는 쉽게 말하면** 로그인 화면 전체를 한 파일에 몰아넣지 않고 역할에 따라 작은 부품으로 나누는 것이다.
- **왜 쓰는가?** 오류를 찾거나 UI를 수정할 때 필요한 부분만 확인하고, 같은 부품을 다른 화면에서도 쓰기 위해서다.

| 구분 | 강의 코드 파일 | 역할 |
| --- | --- | --- |
| Atom | `component/atoms/ErrorMessage.tsx` | 오류 문구 표시 |
| Molecule | `component/molecules/FormField.tsx` | 입력창·아이콘 버튼·오류 문구 조합 |
| Organism | `component/organisms/LoginForm.tsx` | 로그인 입력값과 제출 버튼 관리 |
| Template | `component/templates/LoginSection.tsx` | `<form>`으로 로그인 폼 감싸기 |
| Page | `app/(auth)/login/page.tsx` | `/login` 페이지와 서버 함수 |

여기서 `(auth)`는 URL에 나타나지 않는 **라우트 그룹**이므로 실제 주소는 `/login`이다.

### 3. SSR과 CSR, 하이드레이션

- **SSR은 쉽게 말하면** 서버가 화면의 초기 HTML을 만들어 브라우저에 전달하는 방식이다.
- **CSR은 쉽게 말하면** 브라우저의 JavaScript가 화면을 만들어 관리하는 방식이다.
- **Server Component는** 서버에서 실행할 로직에, **Client Component는** `useState`, 클릭·입력 이벤트 같은 상호작용에 사용한다.
- **Hydration은 쉽게 말하면** 서버가 먼저 보낸 HTML에 브라우저의 React가 이벤트 기능을 연결해 실제로 조작 가능한 화면으로 만드는 과정이다.

**구분할 점:** `"use client"`가 있다고 해서 초기 HTML을 서버에서 전혀 만들지 않는 것은 아니다. Next.js는 첫 요청의 Client Component도 서버에서 미리 렌더링하고 이후 하이드레이션할 수 있다.

**궁금했던 점 — 하이드레이션이 왜 계속 생길까?**

일반적인 입력값 변경은 `useState`에 의한 **재렌더링**이지 매번 하이드레이션되는 것이 아니다. 반면 새로고침·새 문서 로딩에서는 초기 연결 과정이 다시 일어날 수 있다. 서버 HTML과 브라우저의 첫 렌더링 결과가 다르면 *hydration mismatch* 오류가 날 수 있다. 수업 당시의 정확한 오류 화면이 없어 어느 경우였는지는 아직 확인이 필요하다.

### 4. HTTP Stateless와 REST API

- **HTTP Stateless는 쉽게 말하면** 각각의 HTTP 요청이 독립적이어서, 서버가 이전 요청의 로그인 상태를 자동으로 기억하는 것은 아니라는 뜻이다.
- **REST API는 쉽게 말하면** URL로 다룰 대상을 표현하고 `GET`·`POST` 같은 HTTP 메서드로 어떤 작업을 할지 나타내는 API 설계 방식이다.
- 로그인 상태를 이어가려면 쿠키·토큰과 함께 서버의 적절한 **검증**이 필요하다.

| 메서드와 주소 | 강의 프로젝트에서 하는 일 | 주요 상태 코드 |
| --- | --- | --- |
| `GET /api/user` | 사용자 목록 조회 | `200` 성공 |
| `POST /api/user` | 사용자 생성 | `201` 생성, `400` 입력 오류, `409` 이메일 중복 |
| `POST /api/auth/login` | 이메일·비밀번호 확인 | `200` 성공, `400` 입력 오류, `401` 인증 실패 |

**JSON은 쉽게 말하면** 서로 다른 프로그램이 데이터를 주고받을 때 사용하는 정해진 텍스트 형식이다. 객체를 요청 본문으로 보낼 때는 `JSON.stringify()`로 문자열로 바꾸고, 서버에서 `request.json()`으로 읽을 수 있다.

### 5. 로그인 입력 → 서버 → 데이터베이스 연결

**오늘 가장 중요한 흐름은 다음과 같다.**

1. `LoginForm.tsx`의 입력창에 아이디와 비밀번호를 입력한다.
2. `useState`가 화면 입력값을 관리하고, Zod가 값이 비어 있는지 검사한다.
3. `<form action={handleSubmit}>`을 제출하면 `name`이 있는 입력값들이 `FormData`로 전달된다.
4. `app/(auth)/login/page.tsx`의 `"use server"` 함수가 `formData.get("userId")` 등으로 값을 읽는다.
5. 서버 함수가 `fetch`로 `POST /api/auth/login`에 JSON을 보낸다.
6. API Route Handler가 요청을 검사하고, `userService.login()`이 Prisma를 통해 MongoDB의 사용자 정보를 조회한다.
7. 비밀번호 확인에 성공하면 응답으로 받은 토큰을 쿠키에 저장하고 메인 페이지로 이동한다.

**Prisma는 쉽게 말하면** TypeScript/JavaScript에서 데이터베이스를 편리하게 조회하도록 도와주는 도구이고, **MongoDB는** 사용자 데이터가 저장되는 데이터베이스다.

**실무 주의:** 지금 저장소의 인증 로직은 교육용이다. 쿠키 값의 존재 여부만으로 로그인 상태를 표시하며, 발급한 토큰의 서명이나 저장 여부를 확인하는 완전한 인증 검증 구조는 아니다. 입력한 비밀번호를 콘솔에 출력하는 실습 코드도 실제 서비스에서는 제거해야 한다.

### 6. `router.push()`와 `router.replace()`

- **`push`는 쉽게 말하면** 방문 기록에 새 페이지를 추가하면서 이동한다.
- **`replace`는 쉽게 말하면** 현재 방문 기록을 새 페이지로 바꾸면서 이동한다.
- 따라서 `replace`가 **모든 히스토리를 삭제하는 것은 아니다.** 현재 기록을 대체하므로 뒤로 가기 동작이 `push`와 달라지는 것이다.

실제 강의 코드의 `LoginForm.tsx`에서는 로그인 상태가 참이면 `useEffect` 안에서 `router.replace("/")`를 호출한다. 서버 함수에서는 `redirect("/")`를 사용한다.

## 오늘 직접 작성한 코드

> 아래는 **11월 2일 GitHub에 올라온 강의 코드 중 핵심 부분을 발췌·축약한 것**이다. 어떤 줄을 내가 직접 타이핑했는지는 아직 확인하지 못했으므로, 복습 후 직접 작성한 코드와 구분해서 기록할 예정이다.

### 코드 1. `useState`로 입력값 관리

파일: `app/(auth)/client-login/page.tsx`

```tsx
"use client";
import { useState } from "react";

const [userId, setUserId] = useState("");

const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUserId(e.target.value);
};

// JSX 입력 필드의 핵심 부분
<Input value={userId} onChange={handleUserIdChange} />
```

- `userId`: 현재 상태값
- `setUserId`: 상태를 새로운 값으로 갱신하도록 요청하는 함수
- `onChange`: 사용자가 입력할 때 실행되는 이벤트
- `value`: 입력창에 현재 상태값을 표시하는 속성

**예상 결과:** 입력창에 `hello`를 입력하면 상태값 `userId`가 `"hello"`로 업데이트된다.

### 코드 2. 서버 함수에 폼 데이터 전달

파일: `component/templates/LoginSection.tsx`, `app/(auth)/login/page.tsx`

```tsx
// LoginSection.tsx의 핵심 부분
<form action={handleSubmit}>
  <LoginForm />
</form>

// login/page.tsx의 서버 함수 일부
async function handleSubmit(formData: FormData) {
  "use server";
  const userId = formData.get("userId");
  const password = formData.get("password");
  // 이후 로그인 API 호출
}
```

**예상 결과:** 입력 필드에 `name="userId"`, `name="password"`가 있으면 서버 함수에서 그 이름으로 제출값을 읽을 수 있다. `FormData.get()`은 React의 `useState` 자체를 읽는 함수가 아니다.

### 코드 3. JSON API 요청

파일: `app/(auth)/login/page.tsx`의 일부를 이해하기 쉽게 축약한 예시

```tsx
const response = await fetch(loginApiUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: userId, password }),
});
const data = await response.json();
```

- `JSON.stringify`: JavaScript 객체를 JSON 문자열로 변환
- `await`: 비동기 요청 결과를 기다림
- `response.json()`: 서버 응답의 JSON 데이터를 읽음

**예상 결과:** API가 요청값을 검사하고 성공·실패에 따라 JSON 응답과 상태 코드를 반환한다. 실제 DB 연결 및 계정 유무에 따라 로그인 결과는 달라진다.

## 어려웠던 점 & 해결 과정

### 1. MongoDB 연결 및 `@prisma/client` 문제

- **문제:** 로그인 실습에서 MongoDB 연결·데이터베이스 생성과 `@prisma/client` 관련 문제가 발생했다.
- **시도:** 강의 저장소에는 `npm install`, Prisma 버전 맞추기, `npx prisma generate`, `npx prisma db push`의 설정 절차가 정리되어 있다. 내가 당시 어떤 명령을 실행했는지는 필기에 남아 있지 않다.
- **해결:** 정확한 오류 메시지가 없어 **실제로 무엇이 원인이었고 어떻게 해결됐는지는 미확인**이다. 다시 문제가 생기면 프로젝트 폴더, 패키지 버전, Client 생성 여부, `DATABASE_URL`을 순서대로 확인한다.
- **교훈:** `npx prisma generate`는 클라이언트 코드를 만드는 작업이고, `npx prisma db push`는 실제 DB 구조를 바꿀 수 있는 별도 작업이다. DB 주소·비밀번호는 GitHub에 올리지 않는다.

### 2. JSON Input 문제

- **문제:** JSON 입력 과정에서 문제가 있었다.
- **시도/해결:** 원본 입력과 에러 로그가 없어 해결 여부는 알 수 없다. JSON 문법, `Content-Type: application/json`, `JSON.stringify()`, 서버의 `request.json()` 및 Zod 검증을 순서대로 점검한다.
- **교훈:** JavaScript 객체와 JSON 문자열은 다르며, 요청을 보내는 쪽과 읽는 쪽의 형식을 맞춰야 한다.

### 3. `replace()`와 Hydration 개념이 헷갈렸음

- **문제:** `replace`를 쓰면 모든 방문 기록이 사라지는지, 하이드레이션이 왜 반복되는지 헷갈렸다.
- **해결:** 공식 문서로 확인한 결과, `replace`는 **현재 기록을 대체**하고, 하이드레이션은 **초기 HTML에 React의 동작을 연결**하는 과정이다.
- **교훈:** 상태 변경에 따른 재렌더링과 하이드레이션을 같은 것으로 생각하지 말자.

## AI와 함께한 부분 (선택)

- **물어본 것:** 필기 키워드를 바탕으로 SSR/CSR, Hydration, HTTP Stateless, `replace`, Prisma·MongoDB를 초보자도 이해할 수 있게 풀어 설명하고, 실제 GitHub 코드와 연결해 달라고 요청했다.
- **AI 답 중 검증한 것:** Next.js 공식 문서의 Server/Client Component, `router.replace()`, Route Handler 설명과 React 공식 문서의 Hydration·폼 상태 설명을 대조했다.
- **AI가 틀렸던 것:** 구체적으로 확인된 오답은 기록하지 않았다. 특히 Prisma·JSON 오류 원인은 로그 없이 추측하지 않기로 했다.

참고 문서:

- [Next.js Server/Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Next.js useRouter](https://nextjs.org/docs/app/api-reference/functions/use-router)
- [Next.js Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers)
- [React Hydration](https://react.dev/reference/react-dom/client/hydrateRoot)
- [React useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus)
- [Prisma MongoDB](https://www.prisma.io/docs/orm/overview/databases/mongodb)

## 내일 계획 & 아직 모르는 것

### 직접 타이핑해서 복습할 순서

| 순서 | 중요도 | 할 일 | 확인할 결과 |
| --- | --- | --- | --- |
| 1 | **필수** | 새 연습 페이지에서 `useState` 입력창 만들기 | 입력할 때 화면의 글자가 바뀜 |
| 2 | **필수** | `InputField` 컴포넌트를 별도 파일로 만들고 Props 전달 | 부모 상태가 자식 입력창에 반영됨 |
| 3 | **필수** | `FormData`와 `"use server"`로 서버 함수 호출 | `name` 기준 입력값을 서버에서 읽음 |
| 4 | **필수** | `app/api/review/route.ts`에 `POST` 구현 | JSON 요청·응답과 상태 코드 확인 |
| 5 | **권장** | Zod와 `useFormStatus` 추가 | 유효성 검사·로딩 버튼 확인 |
| 6 | **코드 읽기** | `schema.prisma`, `lib/prisma.ts`, `userService.ts` 순서로 따라가기 | DB 조회가 이루어지는 위치 설명 |

새 연습 파일은 **`lgcns-fe-next/app/review-login/page.tsx`**로 만들고 기존 강의 코드는 덮어쓰지 않는다. 1단계는 `"use client"` 선언 → `useState` import → 입력창의 `value`/`onChange` 연결 → 아래에 현재 입력값 출력 순서로 연습한다.

### 아직 흐릿한 것

- 서버 컴포넌트와 클라이언트 컴포넌트를 **언제** 나누어 써야 하는가?
- `import`는 어느 파일에 적고, Props 타입은 어디에서 선언해야 하는가?
- `FormData`와 `useState`는 각각 어디에서 값을 관리하는가?
- `POST` API와 Prisma를 연결할 때 요청 데이터가 어떤 순서로 이동하는가?
- 실제 수업에서 발생했던 Prisma 및 JSON 오류의 **정확한 메시지와 원인**은 무엇이었는가?

**오늘의 한 줄 정리:** 로그인 화면은 단순한 입력창이 아니라, 작은 컴포넌트가 데이터를 관리하고 서버 함수와 API가 그 데이터를 처리한 뒤 데이터베이스와 연결되는 하나의 흐름이다.
