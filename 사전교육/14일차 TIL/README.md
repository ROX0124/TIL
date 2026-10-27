# 14일차 - React 컴포넌트와 Props

## 📌 오늘 학습한 내용

- React의 기본 개념
- Component Based 방식
- Component 재사용성
- SPA와 React
- Component와 Element의 관계
- Props의 개념
- Function 기반 Component와 Class 기반 Component
- CRA(Create React Application)

---

## 1. React란?

React는 **Component Based 방식으로 개발하는 라이브러리**이다.

쉽게 생각하면 레고 블록을 하나씩 조립하여 하나의 결과물을 만드는 것처럼, 여러 Component를 조합하여 화면을 구성하는 방식이다.

```text
React
→ Library
→ Component Based
```

즉, 하나의 큰 화면을 한 번에 만드는 것이 아니라 여러 개의 Component로 나누어 개발할 수 있다.

---

## 2. Component Based

React에서는 화면을 여러 개의 Component로 나누어 구성한다.

강의에서는 이를 다음과 같이 비유하였다.

```text
Component
→ 레고 블록

여러 Component 조합
→ 하나의 화면 구성
```

이러한 Component Based 방식은 React의 대표적인 특징 중 하나이다.

---

## 3. Component Based의 장점

Component Based 방식의 장점 중 하나는 **재사용성**이다.

한 번 만들어 놓은 Component를 다른 곳에서도 다시 사용할 수 있기 때문에 동일한 기능이나 UI를 반복해서 만들 필요가 줄어든다.

다만 강의에서는 **독립성을 가지고 있는 Component만 재사용할 수 있다**는 점을 함께 학습하였다.

```text
독립적인 Component
        ↓
     재사용 가능
```

---

## 4. SPA와 React

React는 SPA(Single Page Application)를 개발할 때 사용할 수 있다.

```text
SPA
= Single Page Application
```

React에서는 Component를 기반으로 화면을 구성하며, Component를 통해 만들어진 결과가 브라우저에 표시된다.

---

## 5. Component와 Element

React에서는 Component와 Element라는 개념을 구분하여 이해할 수 있다.

강의에서는 이를 **붕어빵 틀과 붕어빵**에 비유하였다.

```text
Component
→ 붕어빵 틀

Element
→ 붕어빵
```

Component를 기반으로 만들어진 결과가 Element라고 이해할 수 있다.

강의에서는 브라우저에서 실제로 보이는 것을 Element라고 설명하였으며, 정확하게는 **Rendering Elements**라고 학습하였다.

---

## 6. Components and Props

React Component는 입력값으로 **Props**를 받고, 출력으로 **React Element**를 생성한다.

```text
Props
  ↓
Component
  ↓
React Element
```

강의 내용을 기준으로 정리하면 다음과 같다.

```text
Input  → Props
Process → Component
Output → React Element
```

---

## 7. Props

Props는 Component에 전달되는 값으로 이해할 수 있다.

강의에서는 Props를 HTML에서 사용했던 **속성(Attribute)**과 동일한 개념으로 설명하였다.

```text
Props
= 속성
= Attribute
```

또한 붕어빵 비유를 이어서 정리하면 다음과 같다.

```text
Component → 붕어빵 틀
Props     → 붕어빵 재료
Element   → 붕어빵
```

즉, 같은 Component라도 어떤 Props를 전달하느냐에 따라 다른 결과를 만들 수 있다고 이해할 수 있다.

---

## 8. JSX와 Component

강의에서는 React Component가 `.jsx` 파일 형식으로 작성될 수 있다는 내용을 학습하였다.

```text
React Component
→ JSX
```

React에서는 Component를 기반으로 화면의 여러 부분을 구성한다.

---

## 9. Function Component와 Class Component

React Component는 JavaScript Function을 이용해 만들 수 있다.

또한 Class 개념을 이용하여 Component를 만드는 것도 가능하다.

```text
React Component
├── Function 기반
└── Class 기반
```

강의에서는 최근에는 Class 기반 방식보다 **Function 기반 Component를 사용하는 추세**라고 학습하였다.

---

## 10. CRA

CRA는 **Create React Application**으로 학습하였다.

강의에서는 CRA를 Node.js 기반 프로젝트와 연결하여 설명하였다.

```text
CRA
→ Create React Application
→ Node.js 기반 프로젝트
```

React 프로젝트를 구성하기 위한 방법 중 하나로 이번 강의에서 소개되었다.

---

## 💡 새롭게 알게 된 점

이번 강의를 통해 React는 하나의 큰 화면을 한 번에 만드는 것이 아니라 **여러 Component를 조합하여 화면을 구성하는 Component Based 라이브러리**라는 점을 알게 되었다.

특히 Component를 붕어빵 틀, Element를 붕어빵, Props를 붕어빵 재료에 비유하니 각각의 역할을 쉽게 이해할 수 있었다.

또한 Component는 Props를 입력으로 받아 React Element를 출력하는 구조로 생각할 수 있다는 점을 알게 되었다.

React Component는 Function 방식과 Class 방식으로 만들 수 있지만 최근에는 Function 기반 Component를 사용하는 추세라는 점도 학습하였다.

---

## 🔎 추가로 공부할 내용

- React에서 Component를 실제로 만드는 방법
- JSX 문법
- Props를 전달하는 방법
- Component와 Element의 정확한 차이
- Function Component와 Class Component의 차이
- React에서 SPA가 동작하는 방식
- CRA를 이용한 React 프로젝트 생성 방법

---

## ✏️ 오늘의 한 줄 정리

> React는 Component를 조합하여 화면을 구성하는 Component Based 라이브러리이며, Component는 Props를 입력받아 React Element를 만들어낸다.