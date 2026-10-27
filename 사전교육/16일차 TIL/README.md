# 16일차 - React Component와 JSX

## 📌 오늘 학습한 내용

- React의 Component 기반 구조
- React 파일과 JavaScript
- JavaScript 내부에서 HTML 형태의 코드 사용
- JSX의 필요성

---

## 1. React와 Component

React는 **Component 기반으로 동작하는 라이브러리**이다.

화면을 여러 개의 Component로 나누어 구성하며, 각각의 Component를 조합하여 하나의 화면을 만들 수 있다.

이번 강의에서는 React에서 사용하는 파일과 JSX의 관계를 중심으로 학습하였다.

---

## 2. React와 JavaScript

React에서는 기본적으로 JavaScript를 기반으로 파일을 작성한다.

```text
React
→ Component 기반
→ JavaScript 기반
```

하지만 React에서는 JavaScript 코드 안에 HTML 형태의 문법을 함께 사용하게 된다.

---

## 3. JavaScript 안에서 HTML 사용

파일 자체는 Script 기반이지만, JavaScript 코드 내부에 HTML 형태의 코드가 포함되면서 이를 처리해야 하는 상황이 발생한다.

```text
JavaScript
    +
HTML 형태의 코드
    ↓
JSX 사용
```

즉, 일반적인 JavaScript만 작성하는 것이 아니라 React Component에서 화면을 표현하기 위해 HTML과 비슷한 문법을 함께 사용하게 된다.

---

## 4. JSX

이러한 구조를 위해 React에서는 **JSX(JavaScript Extension)**를 사용한다.

```text
JSX
= JavaScript Extension
```

JSX를 이용하면 JavaScript를 기반으로 하면서 HTML 형태의 문법을 함께 작성할 수 있다.

이번 강의에서는 React Component를 작성할 때 JSX가 필요한 이유를 학습하였다.

---

## 💡 새롭게 알게 된 점

이전에는 React가 Component 기반으로 동작한다는 것을 학습했다면, 이번 강의에서는 Component를 실제로 작성하는 과정에서 **JavaScript와 HTML 형태의 문법이 함께 사용된다는 점**을 알게 되었다.

특히 React 파일은 JavaScript를 기반으로 하지만 화면을 구성하기 위해 HTML 형태의 코드가 포함되기 때문에 JSX를 사용한다는 흐름을 이해할 수 있었다.

---

## 🔎 추가로 공부할 내용

- JSX의 기본 문법
- JSX와 HTML의 차이
- React Component 내부에서 JSX를 작성하는 방법
- JSX가 실제로 처리되는 과정

---

## ✏️ 오늘의 한 줄 정리

> React는 JavaScript 기반의 Component 구조를 사용하며, JavaScript 안에서 HTML 형태의 코드를 작성하기 위해 JSX를 사용한다.