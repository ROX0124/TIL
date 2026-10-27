# 15일차 - React 개발 환경 구성과 프로젝트 생성

## 📌 오늘 학습한 내용

- React 개발 환경에서 Node.js와 npm 사용
- `npx`의 역할
- `create-react-app`을 이용한 React 프로젝트 생성
- Node.js 설치
- React 프로젝트 실행 및 동작 확인

---

## 1. React 개발 환경

이번 강의에서는 React를 실행하기 위한 개발 환경을 구성하였다.

강의에서는 React 개발 환경과 관련하여 다음 내용을 학습하였다.

```text
React
→ Node.js
→ npm(Node Package Manager)
```

React 프로젝트를 구성하고 실행하기 위해 Node.js와 npm을 활용한다.

---

## 2. npm

npm은 **Node Package Manager**의 약자이다.

이번 강의에서는 React 개발 환경에서 Node.js와 함께 npm을 사용한다는 내용을 학습하였다.

```text
Node.js
   ↓
  npm
   ↓
React 프로젝트
```

---

## 3. npx

`npx`를 사용하면 npm을 통해 프로젝트를 생성할 수 있다.

이번 강의에서는 `npx`를 이용하여 React 프로젝트를 만드는 방법을 실습하였다.

```bash
npx create-react-app project_name
```

위 명령어에서 `project_name` 부분에는 생성할 React 프로젝트의 이름을 입력한다.

---

## 4. React 프로젝트 생성

이번 강의에서는 다음 명령어를 이용하여 React 프로젝트를 생성하였다.

```bash
npx create-react-app project_name
```

전체적인 실습 흐름은 다음과 같이 정리할 수 있다.

```text
Node.js 설치
    ↓
npm 환경 사용
    ↓
npx 명령어 실행
    ↓
React 프로젝트 생성
    ↓
React 실행
    ↓
동작 확인
```

---

## 5. React 실행 실습

Node.js 설치 이후 직접 React 프로젝트를 생성하고 실행하는 실습을 진행하였다.

실습 결과 React가 정상적으로 실행되는 것을 확인하였다.

이번 강의를 통해 이전 강의에서 개념으로 배웠던 React를 실제 개발 환경에서 실행해보는 과정까지 진행하였다.

---

## 💡 새롭게 알게 된 점

이전 강의에서는 React의 Component와 Props처럼 React의 기본적인 개념을 학습했다면, 이번 강의에서는 실제 React 개발을 시작하기 위한 환경을 구성하였다.

React 프로젝트를 사용하기 위해 Node.js와 npm이 필요하며, `npx` 명령어를 통해 새로운 React 프로젝트를 생성할 수 있다는 점을 알게 되었다.

또한 직접 Node.js를 설치하고 React 프로젝트를 실행하여 개발 환경이 정상적으로 동작하는 것까지 확인하였다.

---

## 🔎 추가로 공부할 내용

- Node.js가 React에서 필요한 이유
- npm과 npx의 차이
- `create-react-app`으로 생성되는 프로젝트 구조
- 생성된 React 프로젝트의 주요 파일
- React 프로젝트를 실행하는 명령어

---

## ✏️ 오늘의 한 줄 정리

> React 개발을 위해 Node.js와 npm 환경을 구성하고, `npx create-react-app`을 이용하여 React 프로젝트를 생성한 뒤 정상적으로 실행되는 것을 확인하였다.