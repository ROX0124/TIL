# 4강 - 프론트엔드 기술 스택과 SPA

## 📌 오늘 학습한 내용

- 프론트엔드의 역할
- HTML, CSS, JavaScript의 역할
- 반응형 웹 디자인
- SPA의 기본 개념
- SPA의 장점과 단점
- React와 Vue.js의 특징
- 프론트엔드에서 사용되는 보완 기술

---

## 1. 프론트엔드란?

프론트엔드(Front-end)는 브라우저를 통해 **사용자에게 실제로 보여지는 부분을 기획하고 구현하는 영역**이다.

사용자가 웹사이트에 접속했을 때 보는 화면과 버튼, 메뉴, 입력창 등 사용자와 직접 상호작용하는 부분을 담당한다.

프론트엔드의 기본적인 기술로는 다음 세 가지가 있다.

- HTML
- CSS
- JavaScript

각 기술은 서로 다른 역할을 담당하면서 하나의 웹 화면을 구성한다.

---

## 2. HTML

HTML은 **HyperText Markup Language**의 약자로 웹 페이지의 기본적인 구조를 만드는 역할을 한다.

쉽게 생각하면 웹 페이지의 **뼈대**를 만드는 기술이다.

### Semantic Tag

HTML에서는 다음과 같은 시멘틱 태그를 사용할 수 있다.

```html
<header>
<article>
<footer>
```

시멘틱 태그는 단순히 화면을 구분하는 것뿐 아니라 각 영역이 어떤 의미를 가지고 있는지를 표현한다.

이러한 구조는 다음과 같은 부분에서 중요하다.

- SEO(Search Engine Optimization)
- Accessibility(접근성)

즉, HTML은 단순히 화면을 구성하는 역할뿐 아니라 웹 문서의 의미와 구조를 전달하는 역할도 한다.

---

## 3. CSS

CSS는 **Cascading Style Sheets**의 약자로 웹 페이지의 UI를 스타일링하는 역할을 한다.

HTML이 웹 페이지의 구조를 담당한다면 CSS는 그 구조를 사용자에게 어떻게 보여줄지를 결정한다.

### 반응형 디자인

CSS에서는 **Media Query**를 이용해 화면 크기에 따라 UI가 달라지는 반응형 디자인을 구현할 수 있다.

예를 들어 데스크톱에서 보이던 화면을 스마트폰의 작은 화면에서도 자연스럽게 사용할 수 있도록 화면 구성을 변경할 수 있다.

### CSS 관련 기술

강의에서는 다음과 같은 CSS 관련 개념도 소개되었다.

- Flexbox
- Grid Layout
- CSS Variable
- CSS-in-JS

CSS Variable은 다음과 같이 사용할 수 있다.

```css
--primary-color
```

CSS-in-JS 방식과 관련된 기술로는 다음이 있다.

- styled-components
- emotion

---

## 4. JavaScript

JavaScript는 웹 페이지에서 **동적인 기능을 구현하는 역할**을 한다.

HTML과 CSS만으로 구성된 화면에 사용자와 상호작용할 수 있는 기능을 추가한다.

JavaScript에서는 대표적으로 다음과 같은 작업을 수행할 수 있다.

- 이벤트 처리
- DOM 조작
- 서버와 통신

예를 들어 사용자가 버튼을 클릭했을 때 특정 동작을 실행하거나 서버 API를 호출하여 새로운 데이터를 가져오는 기능을 구현할 수 있다.

JavaScript는 ECMAScript 표준을 기반으로 한다.

---

## 5. Bootstrap

Bootstrap은 반응형 웹 페이지를 만들 때 사용할 수 있는 템플릿을 제공한다.

미리 만들어진 UI 요소와 구조를 활용하여 반응형 웹 페이지를 구성하는 데 사용할 수 있다.

---

## 6. SPA

SPA는 **Single Page Application**의 약자이다.

한 번 로드된 HTML, CSS, JavaScript 파일을 기반으로 동작하며, 브라우저에서 하나의 페이지를 중심으로 화면을 구성한다.

기존 방식처럼 새로운 페이지로 이동할 때마다 전체 페이지를 다시 불러오는 것이 아니라 **필요한 데이터만 서버에서 받아와 화면을 동적으로 변경한다.**

전체적인 흐름은 다음과 같이 이해할 수 있다.

```text
초기 페이지 로드
      ↓
HTML / CSS / JavaScript 로드
      ↓
사용자 Action
      ↓
필요한 데이터만 서버에 요청
      ↓
화면의 필요한 부분만 갱신
```

---

## 7. SPA의 장점

SPA는 전체 페이지를 계속 새로 불러오지 않기 때문에 다음과 같은 장점이 있다.

### 빠른 화면 전환

페이지 전체를 다시 로드하지 않고 필요한 부분만 갱신하기 때문에 빠르게 화면을 전환할 수 있다.

### 앱과 비슷한 UX

화면 전체가 새로고침되는 과정이 줄어들기 때문에 모바일 앱과 비슷한 사용자 경험을 제공할 수 있다.

### 서버 부하 감소

필요한 데이터만 서버와 주고받기 때문에 서버의 부담을 줄일 수 있다.

---

## 8. SPA의 단점

SPA에도 다음과 같은 단점이 존재한다.

### 초기 로딩 속도

처음 실행할 때 필요한 HTML, CSS, JavaScript 파일을 불러오기 때문에 초기 로딩 속도가 느릴 수 있다.

### SEO 문제

SPA는 검색 엔진 최적화인 SEO가 어려울 수 있다.

이를 보완하기 위해 **SSR(Server-Side Rendering)**을 사용할 수 있다.

---

## 9. React

React는 UI 구현에 특화된 **라이브러리**이다.

Facebook에서 개발했으며 컴포넌트 기반으로 화면을 구성한다.

### Component

React에서는 화면을 여러 개의 Component로 나누어 구성할 수 있다.

컴포넌트 기반으로 개발하면 다음과 같은 장점이 있다.

- 재사용성
- 유지보수성

강의에서는 React의 컴포넌트를 `.jsx` 형태의 파일과 연결해서 설명했다.

### Virtual DOM

React는 Virtual DOM을 기반으로 화면을 처리하며 이를 통해 성능을 최적화한다.

### React와 함께 사용되는 기술

React에서는 필요한 기능을 추가하기 위해 여러 기술을 함께 사용할 수 있다.

#### 상태 관리

- Redux
- Recoil
- Zustand

#### Routing

- React Router

#### Build 및 관련 도구

- CRA(Create React App)
- Vite
- Next.js

Next.js는 SSR을 지원하는 기술로 소개되었다.

---

## 10. Vue.js

Vue.js는 **프레임워크 성격**을 가진 프론트엔드 기술이다.

React와 마찬가지로 SPA를 구현할 때 활용할 수 있다.

Vue.js의 특징으로는 다음과 같은 것들이 있다.

### 낮은 진입장벽

비교적 가볍고 쉽게 접근할 수 있다는 특징이 있다.

### Template 기반 문법

HTML, JavaScript, CSS를 함께 사용할 수 있는 템플릿 기반의 구조를 사용할 수 있다.

### Reactivity

Vue.js는 반응성(Reactivity) 시스템을 제공한다.

데이터가 변경되면 변경된 데이터를 기반으로 UI가 자동으로 갱신된다.

### Vue와 함께 사용되는 기술

#### Routing

- Vue Router

#### 상태 관리

- Pinia
- Vuex

#### SSR / SSG

- Nuxt.js

Nuxt.js는 SSR과 SSG를 지원하는 기술로 소개되었다.

---

## 11. React와 Vue.js

강의에서 소개된 내용을 기준으로 정리하면 다음과 같다.

| 구분 | React | Vue.js |
| --- | --- | --- |
| 성격 | 라이브러리 | 프레임워크 성격 |
| 주요 목적 | UI 구현 | UI 및 웹 애플리케이션 구성 |
| 개발 방식 | 컴포넌트 기반 | 템플릿 기반 |
| 특징 | Virtual DOM | Reactivity |
| 라우팅 | React Router | Vue Router |
| 상태 관리 | Redux, Recoil, Zustand | Pinia, Vuex |
| SSR 관련 기술 | Next.js | Nuxt.js |

두 기술 모두 SPA를 개발할 때 활용할 수 있지만 사용하는 방식과 함께 활용하는 기술에 차이가 있다는 것을 알 수 있었다.

---

## 💡 새롭게 알게 된 점

이번 강의를 통해 프론트엔드가 단순히 화면을 예쁘게 만드는 영역이 아니라 **HTML로 구조를 만들고, CSS로 화면을 디자인하며, JavaScript로 동적인 기능을 구현하는 영역**이라는 것을 다시 정리할 수 있었다.

특히 SPA에서는 페이지를 이동할 때마다 새로운 페이지 전체를 불러오는 것이 아니라, 처음 불러온 페이지를 기반으로 필요한 데이터만 서버에서 받아 화면을 동적으로 변경한다는 점을 이해했다.

또한 React와 Vue.js 모두 SPA를 개발할 때 활용할 수 있지만, React는 라이브러리이고 Vue.js는 프레임워크 성격을 가진다는 차이가 있다는 것을 알게 되었다.

React와 Vue.js 자체만 사용하는 것이 아니라 라우팅, 상태 관리, SSR 등을 위해 다양한 기술을 함께 사용한다는 점도 새롭게 알게 되었다.

---

## 🔎 추가로 공부할 내용

- DOM과 Virtual DOM의 차이
- SPA에서 화면이 실제로 변경되는 과정
- CSR과 SSR의 차이
- React의 Component 개념
- React의 상태 관리가 필요한 이유
- Library와 Framework의 차이
- React와 Vue.js의 개발 방식 차이

---

## ✏️ 오늘의 한 줄 정리

> 프론트엔드는 HTML로 구조를 만들고 CSS로 화면을 디자인하며 JavaScript로 동작을 구현하고, React나 Vue.js와 같은 기술을 활용해 SPA 형태의 웹 서비스를 개발할 수 있다.