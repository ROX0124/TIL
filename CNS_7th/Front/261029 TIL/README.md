# [Day 3] LG CNS AM Inspire Camp 7기 TIL

작성일: 2026.10.29 (목) | 과목: 프론트엔드 (Next.js, Atomic Design, Tailwind CSS)

## 오늘 학습한 주제

**Next.js를 이용한 아토믹 디자인과 Tailwind CSS 기반 웹 페이지 구성**

핵심 키워드: Next.js, Atomic Design, Tailwind CSS, React 컴포넌트, CSS Layout, Position, 반응형 웹, pnpm, npm, npx, Turborepo, shadcn/ui, Lucide

## 오늘 배운 것 — 나만의 언어로 설명

### 1. Next.js란?

Next.js는 쉽게 말하면 **React를 이용해서 웹 애플리케이션을 보다 체계적으로 개발할 수 있도록 도와주는 프레임워크**다.

React는 화면을 컴포넌트 단위로 만들 수 있게 도와주는 라이브러리다. 하지만 React만으로 프로젝트를 구성하려면 페이지 이동, 서버 렌더링, 데이터 처리 등 여러 기능을 추가로 설계해야 할 수 있다.

Next.js는 이러한 기능과 개발 규칙을 제공하기 위해 등장했다.

**React와 Next.js의 차이**

- React: 사용자 인터페이스를 만드는 데 집중한다.
- Next.js: React를 기반으로 페이지 구성, 라우팅, 서버 기능 등을 제공한다.

Next.js의 App Router에서는 `app` 폴더와 `page.tsx` 같은 파일을 이용해 페이지를 구성한다.

예시:

```text
app/
├── layout.tsx
├── page.tsx
└── about/
    └── page.tsx
```

- `app/page.tsx`: 메인 페이지(`/`)
- `app/about/page.tsx`: 소개 페이지(`/about`)
- `app/layout.tsx`: 여러 페이지가 공유할 수 있는 레이아웃

단, 위 구조는 Next.js의 App Router를 사용하는 경우에 해당한다.

### 2. Atomic Design이란?

아토믹 디자인은 쉽게 말하면 **웹 페이지를 작고 재사용 가능한 부품으로 나누어 만드는 설계 방법**이다.

웹 페이지 전체를 하나의 거대한 코드로 작성하면, 수정이 어렵고 비슷한 코드를 반복해서 작성할 가능성이 높아진다.

이러한 문제를 줄이기 위해 화면을 작은 단위로 나누고, 필요한 단위들을 조립해 큰 화면을 구성한다.

아토믹 디자인의 기본 5단계:

| 단계 | 의미 | 예시 |
|---|---|---|
| Atoms | 가장 작은 UI 요소 | 버튼, 입력창 |
| Molecules | 여러 Atom의 조합 | 검색 입력창 + 검색 버튼 |
| Organisms | 여러 요소를 조합한 영역 | 헤더, 검색 영역 |
| Templates | 페이지의 전체적인 배치 구조 | 대시보드 레이아웃 |
| Pages | 실제 콘텐츠가 들어간 완성 화면 | 사용자 대시보드 |

이 방식은 코드의 재사용성과 유지보수성을 높이는 데 도움이 된다.

**주의할 점:** Atomic Design은 컴포넌트를 설계하는 방법론이며, Next.js에서 반드시 사용해야 하는 규칙은 아니다.

### 3. Tailwind CSS란?

Tailwind CSS는 쉽게 말하면 **미리 정의된 작은 스타일 클래스들을 조합하여 화면을 디자인하는 CSS 도구**다.

일반 CSS에서는 별도의 스타일 규칙을 작성한다.

```css
.title {
  text-align: center;
  font-size: 24px;
  color: blue;
}
```

Tailwind CSS에서는 JSX의 `className`에 스타일을 직접 조합할 수 있다.

```tsx
<h1 className="text-center text-2xl text-blue-500">
  안녕하세요
</h1>
```

- `text-center`: 텍스트 가운데 정렬
- `text-2xl`: 글자 크기 설정
- `text-blue-500`: 글자 색상 설정

Tailwind CSS의 장점은 자주 사용하는 스타일을 빠르게 조합할 수 있다는 것이다.

다만 클래스가 많아지면 읽기 어려울 수 있으므로 컴포넌트를 적절히 분리하는 것이 중요하다.

### 4. text-align과 justify-content 차이

두 속성은 모두 정렬에 사용되지만 정렬 대상이 다르다.

**text-align**

블록 내부의 텍스트나 인라인 콘텐츠를 수평으로 정렬한다.

```css
.title {
  text-align: center;
}
```

**justify-content**

Flexbox나 Grid 등의 레이아웃에서 아이템을 주축 방향으로 정렬하거나 공간을 분배한다.

```css
.container {
  display: flex;
  justify-content: center;
}
```

여기서 중요한 점은 Flexbox의 주축 방향이 `flex-direction`에 따라 달라진다는 것이다.

- `flex-direction: row`: 기본적으로 가로 방향이 주축
- `flex-direction: column`: 세로 방향이 주축
- `align-items`: 주축과 교차하는 방향의 아이템 정렬

따라서 `justify-content`가 언제나 가로 정렬을 의미하는 것은 아니다.

### 5. CSS Layout과 position

CSS Layout은 웹 페이지에서 요소를 어떤 구조와 순서로 배치할지 결정하는 방법이다.

대표적인 방식은 Flexbox와 Grid가 있다.

- Flexbox: 한 방향의 요소 배치에 적합하다.
- Grid: 행과 열을 함께 구성하는 2차원 레이아웃에 적합하다.

`position`은 요소의 배치 기준을 지정한다.

| 속성 | 의미 |
|---|---|
| static | 일반적인 문서 흐름에 따라 배치 |
| relative | 원래 위치를 기준으로 상대적으로 이동 가능 |
| absolute | 일반적인 배치 흐름에서 벗어나 기준 컨테이너를 따라 위치 지정 |
| fixed | 일반적으로 화면의 뷰포트를 기준으로 고정 |
| sticky | 스크롤 위치에 따라 일반 배치와 고정 동작이 전환 |

**특히 기억해야 할 것은 relative와 absolute의 관계다.**

```tsx
<div className="relative h-40 bg-gray-200">
  <span className="absolute right-3 top-3">
    NEW
  </span>
</div>
```

부모에 `relative`를 지정하고 자식에 `absolute`를 지정하면, 자식의 위치를 부모 기준으로 설정할 수 있다.

주로 카드의 모서리에 배지를 붙이거나 이미지를 겹쳐 배치할 때 활용할 수 있다.

### 6. 반응형 웹 디자인

반응형 웹은 **화면 크기에 따라 콘텐츠의 배치나 크기가 적절하게 달라지는 웹 디자인**이다.

예를 들어 PC 화면에서는 콘텐츠를 가로로 배치하고, 모바일에서는 세로로 배치할 수 있다.

```tsx
<div className="flex flex-col md:flex-row">
  <div>첫 번째 영역</div>
  <div>두 번째 영역</div>
</div>
```

- `flex`: Flexbox 사용
- `flex-col`: 기본적으로 세로 방향 배치
- `md:flex-row`: 기본 설정 기준 768px 이상에서 가로 방향 배치

Tailwind CSS는 모바일 우선(Mobile-first) 방식으로 반응형 스타일을 작성할 수 있다.

### 7. npm, npx, pnpm의 차이

세 가지 도구는 이름이 비슷하지만 역할이 다르다.

**npm**

Node.js 프로젝트에서 패키지의 설치와 관리, 프로젝트 스크립트 실행 등을 담당하는 패키지 관리자다.

```bash
npm install
npm run dev
```

**npx**

패키지가 제공하는 실행 명령어를 쉽게 실행하는 도구다. 로컬에 설치된 명령어를 실행하거나 필요한 패키지를 내려받아 실행할 수 있다.

```bash
npx create-next-app@latest my-app
```

**pnpm**

npm처럼 패키지를 관리하는 도구다. 패키지 저장소를 효율적으로 활용하고 의존성 관리를 엄격하게 처리하는 특징이 있다.

```bash
pnpm install
pnpm dev
```

**정리**

- npm: 패키지 관리 및 스크립트 실행
- npx: 패키지가 제공하는 명령어 실행
- pnpm: npm을 대체할 수 있는 패키지 관리자
- pnpm dlx: npx와 유사하게 패키지 명령어를 실행

프로젝트에 `pnpm-lock.yaml`이 있으면 일반적으로 pnpm을 사용하는 것이 좋다. 여러 패키지 관리자를 이유 없이 섞어 사용하지 않도록 주의해야 한다.

### 8. Turborepo란?

Turborepo는 여러 프로젝트나 패키지를 하나의 저장소에서 관리할 때 빌드 및 작업 실행을 효율적으로 도와주는 도구다.

예를 들어 하나의 저장소에서 웹 애플리케이션, 관리자 페이지, 공통 UI 컴포넌트를 관리할 수 있다.

Turborepo는 작업 간 의존관계를 관리하고, 캐시를 활용해 불필요한 반복 작업을 줄일 수 있다.

**주의:** Turborepo는 여러 패키지의 작업을 관리하는 도구이고, Next.js에서 사용하는 Turbopack은 애플리케이션의 코드를 묶고 처리하는 번들러다. 서로 다른 역할을 한다.

### 9. shadcn/ui와 Lucide

**shadcn/ui**

애플리케이션에서 사용할 UI 컴포넌트 코드를 가져와 수정하고 활용할 수 있도록 지원하는 도구다.

버튼이나 카드, 입력창 등을 매번 처음부터 설계하지 않고 필요한 컴포넌트를 프로젝트에 추가할 수 있다.

Atomic Design과 관련하여 참고할 수 있지만, 둘은 동일한 개념이 아니다.

**Lucide**

웹 페이지에서 사용할 수 있는 아이콘 모음이다.

React 프로젝트에서는 `lucide-react`를 사용해 아이콘을 컴포넌트 형태로 배치할 수 있다.

```tsx
import { Heart } from "lucide-react";

<Heart size={24} color="red" />
```

단, 사용하려면 해당 패키지가 프로젝트에 설치되어 있어야 한다.

외부 이미지 주소를 사용할 때는 이미지의 실제 접근 가능 여부와 출처, `alt` 속성, Next.js 이미지 설정 등을 확인해야 한다.

### 10. 사용자 액션

프론트엔드에서 사용자 액션을 처리한다는 것은 버튼 클릭이나 입력 같은 사용자 행동에 따라 화면이나 데이터를 변경하는 것을 뜻할 수 있다.

예를 들어 React에서는 다음과 같이 버튼 클릭을 처리할 수 있다.

```tsx
<button onClick={() => alert("클릭했습니다!")}>
  클릭하기
</button>
```

Next.js App Router에서 이러한 브라우저 이벤트 핸들러를 사용하는 컴포넌트에는 클라이언트 컴포넌트 경계가 필요하다.

다만 수업 메모에 작성한 '액션'이 React 이벤트를 의미하는지, Next.js의 Server Actions를 의미하는지는 실제 교육 코드를 확인한 후 구분해야 한다.

---

## 오늘 직접 작성한 코드

**복습용 재작성 예제 — 실제 수업에서 작성한 코드와 동일한지는 미확인**

오늘 배운 Next.js, 컴포넌트 분리, Tailwind CSS, 반응형 레이아웃, 사용자 이벤트를 하나로 연결해 보는 실습이다.

### 1. 버튼 컴포넌트 만들기

파일: `components/atoms/ActionButton.tsx`

```tsx
"use client";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function ActionButton({
  label,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg bg-blue-500 px-4 py-2 text-white"
    >
      {label}
    </button>
  );
}
```

**코드 설명**

- `"use client"`: 브라우저에서의 상호작용이 필요한 클라이언트 컴포넌트로 지정한다.
- `type ButtonProps`: 전달받을 데이터의 타입을 정의한다.
- `label`: 버튼에 표시할 글자
- `onClick`: 버튼을 클릭했을 때 실행할 함수
- `className`: Tailwind CSS로 버튼의 모양을 설정한다.
- `export default`: 다른 파일에서 컴포넌트를 가져와 사용할 수 있도록 한다.

### 2. 메인 페이지에 버튼 연결하기

파일: `app/page.tsx`

```tsx
"use client";

import { useState } from "react";
import ActionButton from "../components/atoms/ActionButton";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="relative mx-auto max-w-xl rounded-xl bg-white p-6">
        <span className="absolute right-3 top-3 text-sm text-red-500">
          NEW
        </span>

        <h1 className="text-center text-2xl font-bold">
          나만의 페이지
        </h1>

        <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <p>클릭 횟수: {count}</p>

          <ActionButton
            label="클릭하기"
            onClick={() => setCount(count + 1)}
          />
        </div>
      </section>
    </main>
  );
}
```

**코드 설명**

- `useState(0)`: 클릭 횟수를 저장하기 위한 상태를 만든다.
- `setCount(count + 1)`: 클릭할 때마다 숫자를 하나 증가시킨다.
- `ActionButton`: 앞에서 만든 버튼 컴포넌트를 재사용한다.
- `relative`: 자식의 absolute 배치 기준을 만든다.
- `absolute right-3 top-3`: NEW 문구를 카드 오른쪽 위에 배치한다.
- `text-center`: 제목을 가운데 정렬한다.
- `flex-col md:flex-row`: 화면 크기에 따라 콘텐츠 배치 방향을 바꾼다.

**예상 실행 결과**

페이지를 실행하면 '나만의 페이지'라는 제목과 버튼이 나타나고, 버튼을 누를 때마다 클릭 횟수가 증가한다.

또한 창의 너비를 변경하면 클릭 횟수와 버튼이 세로 또는 가로 방향으로 배치된다.

※ 이 코드는 별도의 Next.js App Router 및 Tailwind CSS 설정이 완료되었다는 전제의 학습용 예제다. 실제 실행 검증은 별도로 필요하다.

---

## 어려웠던 점 & 해결 과정

### 문제 1. text-align과 justify-content의 차이

- **문제:** 둘 다 가운데 정렬에 사용하는 것처럼 보이지만 실제 역할을 구분하기 어려웠다.
- **시도:** 수업 메모에 차이를 기록하고 복습 항목으로 지정했다.
- **해결을 위한 정리:** `text-align`은 텍스트·인라인 콘텐츠 정렬이고, `justify-content`는 Flex/Grid의 아이템 및 공간 배치와 관련이 있다.
- **교훈:** CSS 속성은 적용 대상과 기준 축을 함께 이해해야 한다.

### 문제 2. position: absolute의 기준

- **문제:** absolute가 적용된 요소의 위치가 무엇을 기준으로 결정되는지 더 알아볼 필요가 있었다.
- **시도:** position과 layout을 별도의 복습 주제로 기록했다.
- **해결을 위한 정리:** 보통 부모에 `relative`를 지정하고 자식에 `absolute`를 적용해 원하는 위치를 잡을 수 있다.
- **교훈:** CSS 위치 속성은 단독으로 외우기보다 부모와 자식 요소의 관계를 함께 확인해야 한다.

※ 위 내용은 학습 메모에 남긴 질문을 정리한 것이며, 실제 실습 중 발생한 오류 및 해결 기록은 아니다.

---

## 내일 계획 & 아직 모르는 것

### 내일 이어서 할 내용

- [ ] Next.js 페이지 구조 다시 확인하기
- [ ] 작은 컴포넌트를 별도 파일로 만들어 연결하기
- [ ] props를 통해 데이터를 전달해 보기
- [ ] Tailwind CSS로 반응형 화면 만들어 보기
- [ ] relative와 absolute를 조합한 UI 구현하기
- [ ] GitHub 교육 코드를 참고하지 않고 핵심 화면 재구현하기

### 아직 흐릿한 것

- Turborepo와 Turbopack의 정확한 역할 차이
- npm, npx, pnpm 명령어의 사용 시점
- Atomic Design에서 Molecules와 Organisms를 구분하는 기준
- Flexbox에서 주축과 교차축이 바뀌는 조건
- Next.js의 서버 컴포넌트와 클라이언트 컴포넌트 차이
- 수업에서 언급한 '액션'의 구체적인 의미

### 오늘의 핵심 요약

오늘 배운 내용을 하나의 흐름으로 정리하면 다음과 같다.

**Next.js로 프로젝트를 구성하고 → Atomic Design으로 UI를 작은 컴포넌트로 나누고 → Tailwind CSS로 스타일과 레이아웃을 만들고 → 이벤트를 연결해 사용자와 상호작용하는 페이지를 구현한다.**

앞으로는 코드의 결과만 확인하는 것이 아니라 각 코드가 필요한 이유와 실행되는 원리를 이해하는 것을 목표로 한다.