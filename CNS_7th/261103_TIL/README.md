# [Day 6] LG CNS AM Inspire Camp 7기 TIL

작성일: 2026.11.03 (화) | 과목: 프론트엔드 (Next.js, React, TypeScript)

## 오늘 학습한 주제

- NextAuth를 활용한 로그인과 사용자 인증
- OAuth와 Credentials 인증 방식의 차이
- React 상태 관리와 4단계 회원가입
- Zod를 활용한 입력값 검증
- Server Action, Prisma, MongoDB 연동

## 오늘 배운 것 — 나만의 언어로 설명

### 1. 사용자 인증(Authentication)이란?

인증은 쉽게 말하면 **"이 사람이 정말 본인이 맞는지 확인하는 과정"**이다.

예를 들어 사용자가 로그인 화면에 이메일과 비밀번호를 입력하면 서버는 데이터베이스에 저장된 사용자 정보를 확인한다.

- 정보가 일치하면 로그인 성공
- 정보가 일치하지 않으면 로그인 실패

이때 비밀번호를 데이터베이스에 그대로 저장하면 위험하므로 해시(Hash)라는 방법으로 변환해 저장한다.

인증과 함께 알아야 할 개념은 인가(Authorization)다.

- 인증: 누구인지 확인한다.
- 인가: 어떤 기능이나 데이터에 접근할 수 있는지 확인한다.

로그인에 성공했다고 모든 API에 접근할 수 있는 것은 아니다.

### 2. OAuth와 NextAuth

**OAuth**

OAuth는 다른 서비스의 자원에 접근할 수 있도록 권한을 위임하는 표준이다.

예를 들어 구글 계정으로 로그인하는 기능에서는 OAuth를 활용할 수 있다. OAuth 자체는 사용자 로그인 전체를 정의하는 기술은 아니다.

**NextAuth**

NextAuth는 Next.js에서 인증과 로그인 세션을 관리하도록 도와주는 라이브러리다.

로그인 처리, 세션 유지, 인증 공급자 연결 등의 기능을 제공한다.

오늘 GitHub에 구현된 로그인은 OAuth 방식이 아니라 `CredentialsProvider` 방식이다.

Credentials 방식은 사용자가 직접 입력한 이메일과 비밀번호를 서버에서 검증한다.

### 3. SSR과 Server Action

SSR(Server-Side Rendering)은 서버가 HTML을 생성해 브라우저로 보내는 방식이다.

Server Action은 브라우저에서 요청한 데이터 변경 등의 작업을 서버 함수로 처리하는 기능이다.

두 개념은 서로 다르다.

- SSR: 페이지를 어디에서 만들어 보여주는가?
- Server Action: 요청받은 함수를 어디에서 실행하는가?

일반적인 HTML `<form>`을 사용하기 위해 반드시 SSR이 필요한 것은 아니다.

다만 로그인, 회원가입 등 서버에서 처리해야 할 작업에는 서버 함수나 API가 필요할 수 있다.

오늘의 회원가입에서는 `actions.ts`에 `"use server"`가 선언되어 있다.

### 4. Client Component와 Server Component

**Client Component**

사용자의 클릭과 입력에 반응하는 컴포넌트다.

`"use client"`를 선언한 파일에서는 `useState`, `onClick`, `onChange` 등의 기능을 사용할 수 있다.

오늘 코드의 예시:

- `LoginForm.tsx`
- `SignupFields.tsx`

**Server Component**

서버에서 실행되는 React 컴포넌트다.

Next.js App Router에서는 기본적으로 컴포넌트가 Server Component로 취급된다.

오늘 코드의 예시:

- `app/(auth)/login/page.tsx`
- `component/providers/AuthShell.tsx`

서버 전용 데이터베이스 접근이나 비밀 정보 처리는 클라이언트 코드에 넣으면 안 된다.

### 5. 로그인 구현 과정

GitHub의 `LoginForm.tsx`에는 `useState`를 사용해 입력값, 에러, 로그인 진행 상태를 관리하는 코드가 있다.

1. 사용자가 이메일과 비밀번호를 입력한다.
2. `onChange`를 통해 상태를 변경한다.
3. Zod로 입력값의 유효성을 확인한다.
4. 로그인 버튼을 누르면 `handleSubmit`이 실행된다.
5. `signIn("credentials", ...)`가 호출된다.
6. NextAuth의 `authorize` 함수가 사용자 정보를 확인한다.
7. `userService.login`이 Prisma를 통해 MongoDB에서 사용자를 찾고 비밀번호를 검사한다.
8. 성공하면 NextAuth가 세션을 관리하고 홈 화면으로 이동한다.

오늘 코드에서 NextAuth는 `session: { strategy: "jwt" }`를 사용한다.

주의할 점은 `userService.login`이 생성하는 임의의 `accessToken`과 NextAuth가 관리하는 JWT 세션은 서로 다른 개념이라는 것이다.

### 6. 회원가입 구현 과정

회원가입은 총 네 단계로 구성되어 있다.

1. 아이디와 이메일 입력 및 중복 확인
2. 비밀번호 입력 및 검증
3. 관심사 입력
4. 프로필 사진 선택 및 가입 처리

`SignupFields.tsx`에서 `step`이라는 상태를 이용해 현재 회원가입 단계를 관리한다.

`SignupProgress.tsx`는 Props로 현재 단계를 전달받아 진행 상태를 표시한다.

이 과정에서 배운 핵심은 **부모 컴포넌트가 상태를 관리하고 자식 컴포넌트는 전달받은 데이터를 화면에 표시할 수 있다**는 것이다.

### 7. Zod를 이용한 유효성 검사

Zod는 사용자가 입력한 값이 정해진 조건에 맞는지 검사하는 도구다.

예를 들어 회원가입 조건은 다음과 같다.

- 아이디: 1~50자
- 이메일: 올바른 이메일 형식
- 비밀번호: 8자 이상
- 관심사: 최대 20개, 각 40자 이내
- 프로필 사진: 허용된 이미지 형식 및 크기 제한

`safeParse()`는 입력값 검증 결과를 반환한다.

검사가 성공하면 `success`가 `true`, 실패하면 `false`가 된다. 실패한 경우 `error.issues`에서 오류 내용을 확인할 수 있다.

클라이언트의 검증은 사용자가 실수를 빠르게 확인하도록 돕고, 서버의 검증은 잘못되거나 조작된 요청을 방어하는 역할을 한다.

### 8. Prisma와 MongoDB

Prisma는 TypeScript 코드에서 데이터베이스를 쉽게 다루도록 도와주는 도구다.

오늘은 MongoDB와 Prisma를 이용해 사용자 정보를 관리했다.

`User` 모델에 저장하는 주요 정보:

- `id`: 사용자를 구별하는 고유 번호
- `userId`: 로그인용 아이디
- `email`: 이메일
- `password`: 해시된 비밀번호
- `interests`: 관심사 목록
- `profileImageUrl`: 프로필 사진
- `createdAt`, `updatedAt`: 생성 및 수정 시각

`@unique`는 중복된 값이 저장되지 않도록 고유 제약을 설정할 때 사용한다.

## 오늘 직접 작성한 코드

### 실습 1. useState로 단계 변경하기

```tsx
"use client";

import { useState } from "react";

export default function SignupPractice() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <h1>회원가입 {step}단계</h1>

      <button onClick={() => setStep(1)}>
        처음으로
      </button>

      <button onClick={() => setStep(step + 1)}>
        다음
      </button>
    </div>
  );
}
```

**코드 해석**

- `useState(1)`: 현재 단계를 1로 시작한다.
- `step`: 현재 저장된 단계 값이다.
- `setStep`: 단계 상태를 변경하도록 요청하는 함수다.
- `onClick`: 사용자가 버튼을 클릭하면 실행되는 이벤트다.
- `{step}`: JavaScript 값을 JSX 화면에 표시한다.

실행 결과:

- 초기 화면: 회원가입 1단계
- 다음 버튼 클릭: 회원가입 2단계
- 다시 클릭: 회원가입 3단계
- 처음으로 클릭: 회원가입 1단계

실제 회원가입에서는 단계의 최댓값을 제한하는 조건도 필요하다.

### 실습 2. Props로 데이터 전달하기

부모 컴포넌트:

```tsx
<SignupProgress current={step} />
```

자식 컴포넌트:

```tsx
type SignupProgressProps = {
  current: number;
};

export default function SignupProgress({
  current,
}: SignupProgressProps) {
  return <p>현재 {current}단계입니다.</p>;
}
```

**코드 해석**

- `SignupProgressProps`: 부모로부터 전달받을 데이터의 타입을 정의한다.
- `current: number`: `current`는 숫자여야 한다.
- `{ current }`: 전달받은 Props에서 `current` 값을 꺼낸다.
- `current={step}`: 부모의 `step` 값을 자식에게 전달한다.

### 실습 3. Zod를 사용한 검사

```ts
import { z } from "zod";

const passwordSchema = z.string().min(8);

const result1 = passwordSchema.safeParse("1234");
const result2 = passwordSchema.safeParse("12345678");

console.log(result1.success); // false
console.log(result2.success); // true
```

비밀번호가 8자 미만이면 실패하고 8자 이상이면 성공한다.

### 실습 4. 로그인 요청

```tsx
const result = await signIn("credentials", {
  email: payload.userId,
  password: payload.password,
  redirect: false,
});

if (result?.ok) {
  router.replace("/");
  router.refresh();
} else {
  setFormError("이메일 또는 비밀번호가 올바르지 않습니다.");
}
```

**코드 해석**

- `await`: 비동기 작업의 결과를 기다린다.
- `signIn`: NextAuth 로그인 함수를 호출한다.
- `credentials`: 이메일과 비밀번호를 직접 확인하는 공급자를 선택한다.
- `redirect: false`: 자동 이동 대신 결과를 받아 직접 처리한다.
- `result?.ok`: 로그인 성공 여부를 확인한다.
- `router.replace("/")`: 성공하면 홈으로 이동한다.
- `setFormError`: 실패하면 오류 메시지를 표시한다.

이 코드는 실제 로그인 컴포넌트의 핵심 부분이며 단독 실행 코드는 아니다.

## 어려웠던 점 & 해결 과정

**1. OAuth와 NextAuth의 차이**

- 문제: 두 개념의 차이가 모호했다.
- 확인: 현재 저장소에서는 NextAuth의 CredentialsProvider를 사용한다.
- 정리: NextAuth는 인증 라이브러리이며 OAuth와 Credentials는 서로 다른 인증 방식이다.

**2. SSR과 form의 관계**

- 문제: `<form>`을 사용하려면 SSR이 필수인지 헷갈렸다.
- 확인: 기본 HTML form 자체는 SSR이 없어도 사용할 수 있다.
- 정리: 페이지 렌더링 방식과 서버에서 입력을 처리하는 방식은 구분해야 한다.

**3. Props와 상태 관리**

- 문제: `useState`로 관리하는 상태를 다른 컴포넌트에 어떻게 전달하는지 익숙하지 않다.
- 정리: 부모에서 상태를 생성하고, 자식에게 Props로 필요한 데이터를 전달한다.

**4. 회원가입 코드 점검**

- 확인할 문제: 회원가입 버튼이 속한 `<form>` 연결을 코드상에서 찾지 못했다.
- 예상 원인: `event.currentTarget.form`이 `null`일 가능성이 있다.
- 다음 작업: 브라우저에서 가입 버튼을 확인하고 필요하면 폼 구조를 수정한다.
- 현재 상태: 실행 검증 전이다.

## AI와 함께한 부분 (선택)

- 물어본 것: GitHub의 11월 3일 커밋을 바탕으로 로그인·회원가입의 동작 원리와 복습 우선순위 정리
- AI 답 중 검증한 것: NextAuth Credentials 설정, React 상태 관리, 회원가입 단계, Zod 스키마, Prisma 사용자 모델
- 아직 검증하지 못한 것: 실제 브라우저 회원가입 완료 여부 및 서버 실행 결과

## 내일 계획 & 아직 모르는 것

1. `useState`와 `setState`를 이용한 단계 변경을 직접 구현하기
2. Props의 타입을 선언하고 자식 컴포넌트로 전달하기
3. `onChange`, `onSubmit`, `preventDefault()`를 직접 사용하기
4. Zod의 `safeParse()`로 입력값 검사하기
5. NextAuth 로그인 흐름을 다른 사람에게 설명할 수 있을 정도로 이해하기

**오늘의 핵심 요약**

- 로그인은 사용자가 누구인지 확인하는 과정이다.
- NextAuth는 인증과 세션을 관리하도록 도와준다.
- 현재 프로젝트의 로그인은 OAuth가 아닌 Credentials 방식이다.
- React 상태는 `useState`로 관리한다.
- Props는 부모에서 자식으로 전달하는 데이터다.
- Zod는 입력값을 검사한다.
- Server Action은 서버에서 실행되는 함수다.
- Prisma는 데이터베이스를 다루도록 도와준다.