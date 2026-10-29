# [LG CNS AM Inspire Camp] 본교육 1일차 TIL (2026.10.27)

## 주제: 프론트엔드의 이해와 웹 기술의 등장 배경

> **Today's Learning**  
> 프론트엔드 개발에 사용되는 HTML, CSS, JavaScript, Node.js, React, Next.js, TypeScript, Tailwind CSS의 역할과 특징을 이해하고, **각 기술이 왜 등장했는지** 연결해서 정리한다.
>
> **작성 기준:** 수업 중 필기한 키워드를 중심으로 정리했다. 각 기술의 등장 배경, 상세 개념, 예제 코드, 비교표는 이해를 돕기 위해 **추가로 조사·보충한 학습 내용**이다. 따라서 아래의 모든 예제가 실제 수업 실습이었다는 뜻은 아니다.

---

## 1. 프론트엔드(Frontend)란?

### 1-1. 개념

**프론트엔드**는 사용자가 웹사이트나 웹 애플리케이션에서 **직접 보고 조작하는 화면과 기능**을 개발하는 영역이다.

예를 들어 쇼핑몰을 사용할 때 보이는 상품 목록, 장바구니 버튼, 검색창 등이 프론트엔드에 해당한다.

반대로 **백엔드(Backend)**는 서버에서 로그인 정보를 확인하거나, 데이터베이스에서 상품을 조회하고, 주문을 저장하는 작업을 처리한다.

| 구분 | 프론트엔드 | 백엔드 |
|---|---|---|
| 주된 역할 | 사용자 화면과 상호작용 구현 | 데이터 처리와 서버 로직 구현 |
| 실행되는 대표적인 위치 | 사용자의 웹브라우저 | 서버 |
| 예시 | 버튼, 화면 배치, 입력 폼 | 로그인 검증, 주문 저장, DB 조회 |
| 대표 기술 | HTML, CSS, JavaScript, React | Java, Spring, Node.js 등 |

> **주의:** 프론트엔드에서 사용하는 JavaScript도 Node.js 같은 실행 환경에서는 서버에서 동작할 수 있다. 즉, **언어 자체와 실행되는 장소는 다른 개념**이다.

### 1-2. 웹페이지가 나타나는 간단한 과정

1. 사용자가 웹브라우저에 주소를 입력한다.
2. 브라우저가 서버에 페이지 또는 데이터를 요청한다.
3. 서버가 필요한 파일이나 응답을 전달한다.
4. 브라우저가 HTML로 구조를 파악하고, CSS로 꾸미고, JavaScript로 기능을 실행한다.
5. 사용자가 버튼을 클릭하는 등의 동작을 하면 JavaScript가 화면을 변경하거나 서버에 추가 요청을 보낼 수 있다.

이때 기억할 핵심은 다음과 같다.

- **HTML = 뼈대(구조와 의미)**
- **CSS = 겉모습(디자인과 배치)**
- **JavaScript = 동작(상호작용과 로직)**

---

## 2. 웹 표준(Web Standards)

### 2-1. 웹 표준은 왜 필요할까?

웹을 사용하는 사람은 Chrome, Safari, Firefox 등 다양한 브라우저를 사용한다. 그런데 브라우저마다 HTML이나 CSS를 서로 다르게 해석한다면, 같은 웹사이트라도 화면과 기능이 제각각일 수 있다.

이러한 문제를 줄이기 위해 웹 기술의 동작 방식과 작성 규칙을 공통으로 정의하는 **웹 표준**이 필요하다. 대표적으로 W3C, WHATWG 등의 표준화 활동이 있다.

### 2-2. 웹 표준을 지키면 얻는 이점

| 항목 | 쉬운 설명 |
|---|---|
| 브라우저 호환성 | 여러 브라우저에서 비교적 일관되게 동작하도록 돕는다. |
| 웹 접근성(Accessibility) | 장애가 있는 사람을 포함한 다양한 사용자가 웹을 이용하기 쉽게 만든다. |
| 검색 엔진 최적화(SEO) | 검색 엔진이 페이지의 구조와 콘텐츠를 이해하는 데 도움이 될 수 있다. |
| 유지보수 | 표준화된 구조를 사용해 코드를 이해하고 수정하기 쉬워진다. |

**SEO(Search Engine Optimization)**는 검색 결과에서 웹페이지가 잘 발견되고 이해되도록 개선하는 작업이다. 올바른 HTML 구조는 SEO에 도움이 되지만, **웹 표준을 지켰다고 검색 순위가 자동으로 올라가는 것은 아니다.**

**웹 접근성**은 예를 들어 키보드만으로 버튼을 조작하거나, 화면 낭독기(스크린 리더)로 화면 내용을 읽을 수 있도록 설계하는 것이다.

### 2-3. 시맨틱 태그(Semantic Tag)

**시맨틱(Semantic)**은 '의미가 있는'이라는 뜻이다. 시맨틱 태그는 해당 영역이 어떤 역할인지 이름 자체로 설명하는 HTML 태그다.

| 태그 | 역할 |
|---|---|
| `<header>` | 문서나 영역의 머리말 |
| `<nav>` | 메뉴와 탐색 링크 영역 |
| `<main>` | 페이지의 주요 콘텐츠 |
| `<section>` | 주제별 콘텐츠 묶음 |
| `<article>` | 독립적으로 구분할 수 있는 콘텐츠 |
| `<footer>` | 문서나 영역의 꼬리말 |

**예시: 의미를 알기 어려운 코드**

```html
<div class="menu">메뉴</div>
<div class="content">본문 내용</div>
```

**개선: 역할이 드러나는 코드**

```html
<nav aria-label="주 메뉴">메뉴</nav>
<main>본문 내용</main>
```

- `div`는 범용 컨테이너이므로 이름만 보고 의미를 알기 어렵다.
- `nav`와 `main`은 웹브라우저 및 보조 기술에 영역의 역할을 알려준다.
- `aria-label`은 이 탐색 영역에 알아보기 쉬운 이름을 제공한다.

> 시맨틱 태그는 접근성에 **도움이 되지만**, 태그만 바꾼다고 접근성이 완성되지는 않는다. 적절한 제목 구조, 이미지 대체 텍스트, 키보드 조작 등도 함께 고려해야 한다.

---

## 3. HTML — 웹페이지의 뼈대

### 3-1. HTML이란?

**HTML(HyperText Markup Language)**은 웹페이지에서 제목, 문단, 이미지, 링크, 버튼과 같은 요소의 **구조와 의미를 정의하는 마크업 언어**다.

- **HyperText(하이퍼텍스트):** 다른 문서로 이동할 수 있는 링크로 연결된 텍스트
- **Markup(마크업):** 태그를 사용해 내용에 구조와 의미를 부여하는 방식
- **Language(언어):** 정해진 문법을 가진 표현 체계

HTML은 일반적으로 JavaScript나 Java처럼 조건과 반복을 수행하는 **프로그래밍 언어로 분류하지 않는다.**

### 3-2. HTML은 왜 만들어졌을까?

초기 웹은 서로 다른 컴퓨터에 있는 연구 자료나 문서를 쉽게 공유하고, 문서 안의 링크를 따라 다른 문서로 이동하려는 필요에서 출발했다. 팀 버너스리(Tim Berners-Lee)는 이러한 웹의 구상을 발전시키면서 HTML을 정의했다.

핵심 목적은 **문서를 일정한 구조로 표현하고 서로 연결하는 것**이었다. 이후 웹이 발전하면서 다양한 페이지 구성 요소와 시맨틱 태그도 확장되었다.

### 3-3. HTML의 특징

1. **태그 기반:** `<h1>`, `<p>`, `<a>`와 같은 요소를 사용한다.
2. **구조와 의미 담당:** 어떤 내용이 제목이고 본문인지 구분한다.
3. **링크 연결:** `<a>` 태그로 다른 페이지나 문서로 이동한다.
4. **시맨틱 구조:** 검색 엔진 및 보조 기술이 콘텐츠의 역할을 이해하는 데 도움이 된다.
5. **다른 기술과 결합:** CSS로 꾸미고 JavaScript로 동작하게 만든다.

### 3-4. 예제 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>나의 첫 웹페이지</title>
</head>
<body>
  <header>
    <h1>안녕하세요!</h1>
  </header>

  <main>
    <p>HTML은 웹페이지의 구조를 담당합니다.</p>
    <a href="https://developer.mozilla.org/ko/">HTML 공부하기</a>
  </main>
</body>
</html>
```

**코드 해설**

- `<!DOCTYPE html>`: HTML 문서임을 브라우저에 알린다.
- `<html lang="ko">`: 문서의 최상위 요소이고, 주 언어를 한국어로 지정한다.
- `<head>`: 문서의 설정 및 메타데이터를 작성하는 곳이다.
- `<title>`: 브라우저 탭 등에 나타나는 문서 제목이다.
- `<body>`: 사용자에게 표시되는 콘텐츠가 들어간다.
- `<h1>`: 페이지의 주요 제목을 나타낸다.
- `<p>`: 문단을 나타낸다.
- `<a href="...">`: 클릭하면 지정된 주소로 이동하는 링크다.

**한 줄 정리:** HTML은 웹페이지가 **무엇으로 구성되는지** 알려주는 기술이다.

---

## 4. CSS — 웹페이지의 디자인과 배치

### 4-1. CSS란?

**CSS(Cascading Style Sheets)**는 HTML로 만든 문서를 화면에서 **어떻게 보여줄지 결정하는 스타일 언어**다.

글자 색상, 글씨 크기, 배경색, 간격, 요소의 배치, 반응형 디자인, 애니메이션 등을 설정할 수 있다.

### 4-2. CSS는 왜 만들어졌을까?

초기 웹에서는 문서의 내용과 화면 표현을 한데 섞어 작성하는 일이 많았다. 페이지가 많아지면서 디자인을 수정할 때 여러 문서를 반복해서 고쳐야 하는 문제가 생겼다.

그래서 **HTML은 구조와 의미를, CSS는 디자인을 담당하도록 분리**할 필요가 생겼다. 이를 통해 여러 페이지에 공통 스타일을 적용하고 유지보수하기 쉬워졌다.

### 4-3. CSS의 특징

1. **스타일 지정:** 색상·글꼴·크기·여백 등을 조절한다.
2. **레이아웃 구성:** `Flexbox`, `Grid` 등을 활용해 요소를 배치한다.
3. **반응형 웹:** 화면 너비 등 환경에 맞춰 스타일을 다르게 적용한다.
4. **재사용:** 하나의 스타일 규칙을 여러 HTML 요소에 적용할 수 있다.
5. **캐스케이딩(Cascading):** 여러 스타일 규칙이 충돌할 때 정해진 우선순위 규칙에 따라 적용할 값을 결정한다.

### 4-4. 예제 코드

**HTML**

```html
<h1 class="title">LG CNS 교육</h1>
<button class="btn">시작하기</button>
```

**CSS**

```css
.title {
  color: royalblue;
  text-align: center;
}

.btn {
  background-color: navy;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
}
```

**코드 해설**

- `.title`: `class="title"`인 요소를 선택한다.
- `color`: 글자 색상이다.
- `text-align`: 텍스트 정렬 방식이다.
- `background-color`: 배경색이다.
- `padding`: 요소 내부의 여백이다.
- `border-radius`: 모서리를 둥글게 만든다.

**한 줄 정리:** CSS는 HTML로 만든 뼈대를 **어떻게 꾸미고 배치할지** 결정한다.

---

## 5. Tailwind CSS — 미리 정의된 작은 스타일 도구 모음

### 5-1. Tailwind CSS란?

**Tailwind CSS**는 짧은 **유틸리티 클래스(utility class)**를 조합해 화면 스타일을 만드는 **CSS 프레임워크**다.

예를 들어 `text-center`는 글자를 가운데 정렬하고, `p-4`는 내부 여백을 설정하는 식이다.

### 5-2. Tailwind CSS는 왜 등장했을까?

일반 CSS로 화면을 작성하다 보면 새로운 클래스 이름을 계속 만들고, CSS 파일을 찾아 수정하고, 다른 화면에도 영향을 주는 스타일 충돌을 관리해야 할 수 있다.

Tailwind CSS는 **미리 정해진 작은 기능의 클래스를 조합해서 빠르고 일관된 디자인을 만들도록** 등장했다.

### 5-3. Tailwind CSS의 특징

- **Utility-first:** 큰 스타일 묶음 하나보다 작고 독립적인 클래스를 여러 개 조합한다.
- **빠른 개발:** 간단한 디자인을 위해 별도의 CSS 규칙을 매번 작성할 필요가 줄어든다.
- **일관성:** 미리 정의된 간격·색상·크기 체계를 활용할 수 있다.
- **반응형 및 상태 스타일:** `md:`, `hover:`처럼 조건을 붙여 사용할 수 있다.
- **주의점:** 클래스 이름이 많아지면 HTML이나 JSX 코드가 길어질 수 있다.

### 5-4. 일반 CSS와 비교

**일반 CSS 방식**

```html
<button class="primary-button">확인</button>
```

```css
.primary-button {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
}
```

**Tailwind CSS 방식**

```html
<button class="bg-blue-600 text-white px-4 py-2 rounded-lg">
  확인
</button>
```

- `bg-blue-600`: 파란색 배경
- `text-white`: 흰색 글자
- `px-4`: 좌우 안쪽 여백
- `py-2`: 위아래 안쪽 여백
- `rounded-lg`: 둥근 모서리

두 방식 모두 스타일을 적용하지만, **Tailwind 방식은 클래스 자체에 스타일의 역할이 드러난다.**

> **실행 주의:** 위 Tailwind 예제는 Tailwind CSS가 설정된 프로젝트에서 동작한다. 순수 HTML 파일에 코드만 붙여 넣으면 Tailwind 스타일이 자동 적용되는 것은 아니다.

**한 줄 정리:** Tailwind CSS는 **CSS를 대체하는 새로운 프로그래밍 언어가 아니라**, CSS 작성과 재사용을 돕는 프레임워크다.

---

## 6. JavaScript — 웹페이지에 동작을 추가하는 프로그래밍 언어

### 6-1. JavaScript란?

**JavaScript(JS)**는 웹페이지의 상호작용과 프로그램 로직을 구현하는 **프로그래밍 언어**다.

HTML과 CSS만으로도 페이지의 내용과 디자인을 표현할 수 있다. 하지만 '버튼을 누르면 숫자가 증가한다', '입력한 내용을 검사한다', '서버에서 데이터를 받아 목록을 바꾼다' 같은 동작은 JavaScript를 통해 구현할 수 있다.

### 6-2. JavaScript는 왜 만들어졌을까?

초기의 웹페이지는 주로 문서를 보여주는 정적인 형태였다. 사용자 행동에 따라 화면이 바로 반응하도록 만들 필요가 커지면서 브라우저 안에서 동작할 스크립트 언어로 JavaScript가 만들어졌다.

이후 JavaScript의 역할이 확대되면서 복잡한 웹 애플리케이션을 만들고, Node.js 같은 실행 환경을 통해 서버 프로그램에도 사용하게 되었다.

### 6-3. JavaScript의 특징

1. **동적 타입:** 변수의 타입을 미리 엄격하게 선언하지 않고 값을 다룰 수 있다.
2. **이벤트 처리:** 클릭·입력·스크롤 같은 사용자 행동에 대응한다.
3. **DOM 조작:** HTML 요소를 찾거나 내용을 변경할 수 있다.
4. **비동기 처리:** 서버 통신이나 파일·네트워크 작업의 완료를 기다리는 동안 다른 작업을 수행하도록 구성할 수 있다.
5. **다양한 실행 환경:** 브라우저뿐 아니라 Node.js에서도 실행할 수 있다.

**DOM(Document Object Model)**은 브라우저가 HTML 문서를 객체 형태로 표현한 구조다. JavaScript는 DOM을 이용해 화면의 내용을 변경할 수 있다.

### 6-4. 예제 코드: 버튼을 누르면 숫자 증가

```html
<!DOCTYPE html>
<html lang="ko">
<body>
  <p id="count">0</p>
  <button id="increase">+1</button>

  <script>
    let count = 0;

    document.getElementById("increase").addEventListener("click", () => {
      count += 1;
      document.getElementById("count").textContent = count;
    });
  </script>
</body>
</html>
```

**실행 과정**

1. `<p>`에 숫자 `0`이 표시된다.
2. `getElementById("increase")`로 버튼 요소를 찾는다.
3. `addEventListener("click", ...)`로 클릭 시 실행할 동작을 등록한다.
4. 버튼을 클릭하면 `count`가 1 증가한다.
5. `textContent`를 변경하여 화면에 `1`, `2`, `3` 등이 표시된다.

**한 줄 정리:** JavaScript는 웹페이지를 **사용자의 행동에 따라 반응하도록** 만드는 언어다.

---

## 7. Node.js — 브라우저 밖에서 JavaScript를 실행하는 환경

### 7-1. Node.js란?

**Node.js는 JavaScript 자체가 아니라 JavaScript 실행 환경(Runtime)**이다.

원래 웹 개발에서 JavaScript는 주로 브라우저에서 실행됐다. Node.js를 사용하면 브라우저 밖에서 JavaScript 프로그램을 실행할 수 있어 서버 개발, 개발 도구 실행, 파일 처리 등을 수행할 수 있다.

### 7-2. Node.js는 왜 만들어졌을까?

웹서비스에서는 여러 사용자의 요청을 동시에 처리해야 한다. 특히 파일·네트워크·데이터베이스 작업 결과를 기다리는 시간이 많다.

Node.js는 **이벤트 기반·비동기 I/O** 모델을 활용해 이러한 네트워크 애플리케이션을 효율적으로 개발하도록 설계되었다. 또한 JavaScript를 서버에서도 활용할 수 있게 되었다.

**비동기 I/O를 쉽게 이해하면:**

- 동기 방식의 기다림: 주문한 커피가 완성될 때까지 카운터 앞에서 다른 일을 하지 않고 기다리는 상황
- 비동기 방식: 커피를 주문해 두고 다른 일을 하다가 준비 완료 신호를 받고 찾아가는 상황

이는 개념을 이해하기 위한 비유다. 실제 Node.js에서는 이벤트 루프 및 운영체제 등의 기능이 비동기 작업 처리를 돕는다.

### 7-3. Node.js의 특징

- **브라우저 밖에서 JS 실행:** 터미널에서 `.js` 파일을 실행할 수 있다.
- **서버 개발 가능:** HTTP 요청을 받는 서버를 만들 수 있다.
- **비동기 작업에 강점:** 다수의 네트워크 요청을 처리하는 데 적합하다.
- **npm 생태계:** 패키지 관리 도구를 통해 다양한 라이브러리와 개발 도구를 사용할 수 있다.
- **주의점:** CPU를 오랫동안 점유하는 무거운 동기 작업은 이벤트 루프를 막아 응답성을 떨어뜨릴 수 있다.

### 7-4. 예제 코드: 간단한 HTTP 서버

```javascript
// server.js
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("안녕하세요! Node.js 서버입니다.");
});

server.listen(3000, () => {
  console.log("서버 실행: http://localhost:3000");
});
```

터미널에서 Node.js가 설치된 환경이라면 다음 명령어로 실행한다.

```bash
node server.js
```

브라우저에서 `http://localhost:3000`에 접속하면 문구가 나타난다.

- `require("node:http")`: Node.js의 HTTP 모듈을 가져온다.
- `createServer(...)`: 클라이언트의 요청에 응답하는 서버를 만든다.
- `res.end(...)`: 응답 내용을 보내고 종료한다.
- `listen(3000)`: 3000번 포트에서 요청을 기다린다.

> **중요:** `JavaScript = 언어`, `Node.js = 그 언어를 실행해 주는 환경`이다. Node.js 자체가 곧 백엔드 프레임워크인 것은 아니다.

**한 줄 정리:** Node.js는 **JavaScript를 브라우저 밖에서도 사용할 수 있도록** 해 주는 실행 환경이다.

---

## 8. React — 화면을 컴포넌트 단위로 구성하는 라이브러리

### 8-1. React란?

**React는 사용자 인터페이스(UI)를 만들기 위한 JavaScript 라이브러리**다.

큰 웹페이지를 버튼, 검색창, 상품 카드 같은 작은 **컴포넌트(Component)**로 나누어 만들고 재사용할 수 있다.

**컴포넌트란?**

화면의 일부를 구성하는 독립적인 부품이라고 생각하면 쉽다. 예를 들어 쇼핑몰 페이지에는 `Header`, `SearchBar`, `ProductCard`, `Footer` 같은 컴포넌트가 있다.

### 8-2. React는 왜 만들어졌을까?

웹사이트가 점점 복잡해지면서 JavaScript로 여러 HTML 요소를 직접 찾고 수정하는 코드가 많아졌다. 화면에 표시되는 데이터와 실제 DOM을 일일이 맞춰 관리하기도 어려워졌다.

React는 **데이터나 상태가 바뀌면 그에 맞게 화면을 선언적으로 표현**하고, 화면을 **재사용 가능한 컴포넌트**로 관리하기 위해 등장했다.

### 8-3. React의 특징

1. **컴포넌트 기반:** 화면을 작은 단위로 분리하고 재사용한다.
2. **선언형 UI:** 화면이 어떤 상태여야 하는지 코드로 표현한다.
3. **상태(State) 관리:** 사용자의 조작 등으로 변하는 데이터를 관리한다.
4. **JSX:** JavaScript 코드 안에서 HTML과 비슷한 문법으로 UI를 표현한다.
5. **효율적인 화면 갱신:** React가 변경 사항을 계산해 필요한 DOM 업데이트를 수행한다.

### 8-4. 예제 코드: React 카운터

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 숫자: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

**코드 해설**

- `Counter()`: 화면의 일부를 만드는 React 컴포넌트다.
- `useState(0)`: 처음 값이 `0`인 상태를 만든다.
- `count`: 현재 상태의 값이다.
- `setCount(...)`: 상태를 변경할 때 사용하는 함수다.
- `onClick`: 버튼을 클릭했을 때 실행할 코드를 연결한다.
- `{count}`: JavaScript 값을 JSX에 표시한다.

버튼을 클릭하면 상태가 변경되고, React가 그 상태에 맞게 화면을 갱신한다.

> **실행 주의:** 이 코드는 React 프로젝트의 컴포넌트 예제다. 일반 `.html` 파일에 그대로 붙여 넣는 방식으로 실행되는 코드는 아니다.

**한 줄 정리:** React는 **복잡한 화면을 작은 부품으로 나누어 만들고 관리하기 쉽게** 해 주는 라이브러리다.

---

## 9. Next.js — React 앱 개발에 필요한 기능을 통합한 프레임워크

### 9-1. Next.js란?

**Next.js는 React를 기반으로 한 웹 애플리케이션 프레임워크**다.

React가 주로 **화면 UI를 구성하는 방법**을 제공한다면, Next.js는 여기에 **페이지 이동(라우팅), 서버 렌더링, 데이터 처리, 빌드 및 배포에 필요한 기능** 등을 통합해서 제공한다.

### 9-2. Next.js는 왜 만들어졌을까?

React만으로도 웹사이트를 만들 수 있지만, 규모가 커지면 다음 문제에 대해 별도 도구를 조합하고 설정해야 할 수 있다.

- 주소(URL)에 따라 어떤 페이지를 보여줄 것인가?
- 서버에서 HTML을 미리 만들 것인가?
- 초기 화면 로딩과 검색 엔진의 콘텐츠 인식을 어떻게 개선할 것인가?
- 서버에서 데이터를 가져오거나 API를 처리하는 구조를 어떻게 만들 것인가?

Next.js는 이러한 요구에 대해 **정리된 개발 구조와 기본 기능을 제공하기 위해** 등장했다.

### 9-3. Next.js의 특징

1. **React 기반:** React의 컴포넌트 방식을 그대로 활용한다.
2. **파일 시스템 기반 라우팅:** 파일·폴더 구조로 페이지 경로를 정의할 수 있다.
3. **서버와 클라이언트 렌더링 지원:** 필요한 위치에서 화면을 생성하도록 구성할 수 있다.
4. **풀스택 기능:** 서버에서 실행하는 로직과 일부 API 기능도 구현할 수 있다.
5. **프로젝트 구조 제공:** 여러 웹 개발 기능을 한 프레임워크 안에서 사용할 수 있다.

### 9-4. 예제 코드: 페이지 만들기 (App Router 기준)

**파일 구조**

```text
app/
 ├─ page.tsx
 └─ about/
     └─ page.tsx
```

**`app/page.tsx`**

```tsx
export default function HomePage() {
  return <h1>메인 페이지입니다.</h1>;
}
```

**`app/about/page.tsx`**

```tsx
export default function AboutPage() {
  return <h1>소개 페이지입니다.</h1>;
}
```

Next.js 개발 서버를 실행한 상태에서:

- `/`로 접속하면 `HomePage`가 표시된다.
- `/about`으로 접속하면 `AboutPage`가 표시된다.

여기서 **라우팅(Routing)**은 URL에 따라 보여줄 페이지나 처리할 동작을 결정하는 기능이다.

### 9-5. 서버 컴포넌트와 클라이언트 컴포넌트

최신 Next.js의 **App Router**에서는 기본적으로 서버 컴포넌트를 활용한다. 클릭 이벤트나 React 상태처럼 브라우저에서 실행되어야 할 기능에는 클라이언트 컴포넌트를 사용한다.

클라이언트 컴포넌트 파일의 위쪽에는 다음과 같이 적는다.

```tsx
"use client";

import { useState } from "react";

export default function ClickButton() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

- `"use client"`: 이 파일을 클라이언트 컴포넌트의 진입점으로 표시한다.
- `useState`·`onClick`: 브라우저 상호작용이 필요한 부분이다.

> **주의:** Next.js를 사용한다고 SEO가 자동으로 완성되는 것은 아니다. 어떤 내용을 어떻게 렌더링하고 메타데이터를 설정하는지에 따라서도 결과가 달라진다. 또한 Next.js의 세부 구조는 App Router와 Pages Router에 따라 다를 수 있다.

**프로젝트 적용 메모:** 오늘 필기에 적은 것처럼, 향후 프로젝트에서 Next.js 사용을 검토할 수 있다. 다만 React, JavaScript, HTML, CSS의 기본 개념을 먼저 이해하는 것이 도움이 된다.

**한 줄 정리:** Next.js는 **React로 실제 웹서비스를 만들 때 자주 필요한 기능과 개발 구조를 제공하는 프레임워크**다.

---

## 10. TypeScript — JavaScript에 타입 검사를 더한 언어

### 10-1. TypeScript란?

**TypeScript(TS)는 JavaScript를 확장해 정적 타입 검사 기능을 추가한 프로그래밍 언어**다.

여기서 **타입(Type)**이란 숫자(`number`), 문자열(`string`), 참·거짓(`boolean`)처럼 값의 종류를 뜻한다.

### 10-2. TypeScript는 왜 만들어졌을까?

JavaScript는 변수를 유연하게 사용할 수 있지만, 프로젝트가 커지면 함수에 잘못된 종류의 값을 전달하거나 객체의 속성 이름을 틀리는 문제가 생길 수 있다.

이러한 문제는 코드를 실행하기 전에는 발견하기 어려운 경우도 있다. TypeScript는 **개발 도중 코드의 타입을 확인하여 실수를 더 일찍 찾아내고, 큰 프로젝트와 협업에서 코드를 이해하기 쉽게 만들기 위해** 등장했다.

### 10-3. TypeScript의 특징

1. **정적 타입 검사:** 실행 전에 타입 관련 오류를 확인할 수 있다.
2. **타입 명시:** 변수나 함수 매개변수에 타입을 지정할 수 있다.
3. **타입 추론:** 상황에 따라 직접 타입을 적지 않아도 값을 바탕으로 추론한다.
4. **편집기 지원:** 자동완성 및 리팩터링에 도움이 된다.
5. **JavaScript와의 호환성:** 기존 JS 문법을 바탕으로 작성하며 보통 JavaScript로 변환해 실행한다.

### 10-4. JavaScript와 TypeScript 비교

**JavaScript**

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(10, "20")); // "1020"
```

JavaScript의 `+`는 피연산자 중 하나가 문자열이면 문자열을 이어 붙이는 동작을 할 수 있다. 따라서 `10 + "20"`의 결과는 숫자 `30`이 아니라 문자열 `"1020"`이다.

**TypeScript**

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));   // 30
// add(10, "20");          // 타입 검사 오류: 두 번째 값은 문자열
```

**코드 해설**

- `a: number`: 첫 번째 인자는 숫자여야 한다.
- `b: number`: 두 번째 인자도 숫자여야 한다.
- `): number`: 함수가 숫자를 반환한다는 뜻이다.
- 숫자가 필요한 자리에 문자열을 전달하면 타입 검사 오류가 발생한다.

> **중요:** TypeScript가 모든 오류를 막는 것은 아니다. TypeScript의 타입 정보는 보통 JavaScript로 변환하는 과정에서 제거되므로, **실행 중에 외부에서 들어오는 데이터까지 자동으로 검증해 주는 것은 아니다.**

**한 줄 정리:** TypeScript는 **JavaScript로 개발할 때 타입과 관련된 실수를 사전에 줄여 주는 언어**다.

---

## 11. 각 기술은 어떻게 연결되는가?

### 11-1. 먼저 종류부터 구분하기

오늘 필기에는 여러 이름이 등장하지만, **모두가 '프로그래밍 언어'인 것은 아니다.**

| 기술 | 분류 | 역할 | 등장 배경을 한 문장으로 |
|---|---|---|---|
| HTML | 마크업 언어 | 콘텐츠 구조와 의미 | 웹 문서를 구조화하고 연결하기 위해 |
| CSS | 스타일 언어 | 디자인과 레이아웃 | 문서 구조와 화면 표현을 분리하기 위해 |
| JavaScript | 프로그래밍 언어 | 상호작용과 로직 | 정적인 웹페이지를 동적으로 만들기 위해 |
| Node.js | JS 실행 환경 | 브라우저 외부에서 JS 실행 | 효율적인 네트워크 서버 및 JS 실행 환경을 위해 |
| React | JS 라이브러리 | 컴포넌트 기반 UI | 복잡한 화면의 상태와 재사용을 쉽게 관리하기 위해 |
| Next.js | React 프레임워크 | 라우팅·렌더링 등 앱 구조 | React 앱 개발에 필요한 여러 기능을 통합하기 위해 |
| TypeScript | 프로그래밍 언어 | JS 코드의 정적 타입 검사 | 대규모 JS 코드의 오류와 유지보수 문제를 줄이기 위해 |
| Tailwind CSS | CSS 프레임워크 | 유틸리티 클래스 스타일링 | 빠르고 일관되게 스타일을 작성하기 위해 |

### 11-2. 기술 관계도

```text
웹 애플리케이션
│
├─ HTML ──────────── 화면의 구조와 의미
├─ CSS ───────────── 화면의 디자인
│  └─ Tailwind CSS ─ CSS 스타일 작성 방식 지원
└─ JavaScript ────── 화면의 동작과 로직
   ├─ TypeScript ─── 타입 검사를 추가하여 개발
   ├─ React ──────── 컴포넌트 방식으로 UI 작성
   │  └─ Next.js ─── React 기반 앱 개발 프레임워크
   └─ Node.js ────── 브라우저 밖의 JS 실행 환경
```

이 그림은 **개념을 이해하기 위한 관계도**이다. 예를 들어 Next.js 프로젝트에서도 HTML·CSS·JavaScript의 기본 개념을 사용하고, TypeScript와 Tailwind CSS를 함께 사용할 수 있다. 또한 Node.js는 React 전용 기술이 아니며 독립적으로 서버 개발에도 사용된다.

### 11-3. 실무 프로젝트를 예로 들면

**'할 일 목록 웹서비스'**를 만든다고 가정해 보자.

- **HTML:** 제목, 입력창, 추가 버튼의 구조를 표현한다.
- **CSS:** 목록의 크기, 여백, 글자색, 화면 배치를 조절한다.
- **JavaScript:** 추가 버튼 클릭 시 새로운 할 일을 목록에 넣는다.
- **TypeScript:** 할 일 데이터의 타입을 정의해 잘못된 값 사용을 줄인다.
- **React:** 입력창·할 일 항목·목록을 각각 컴포넌트로 구성한다.
- **Next.js:** `/tasks` 같은 페이지 경로와 웹앱 구조를 만든다.
- **Tailwind CSS:** 미리 정의된 클래스로 화면 스타일을 빠르게 만든다.
- **Node.js:** JavaScript 기반 개발 서버나 별도의 백엔드 서버를 실행하는 데 사용할 수 있다.

모든 기술을 반드시 한 프로젝트에 전부 사용해야 하는 것은 아니다. **프로젝트의 요구사항에 맞게 선택한다.**

---

## 12. 초보자가 헷갈리기 쉬운 질문

### Q1. HTML, CSS도 프로그래밍 언어인가?

일반적으로 HTML은 **마크업 언어**, CSS는 **스타일 언어**라고 부른다. JavaScript·TypeScript와는 목적과 역할이 다르다.

### Q2. Java와 JavaScript는 같은 언어인가?

**아니다.** 이름이 비슷하지만 서로 다른 프로그래밍 언어다.

### Q3. JavaScript를 알면 Node.js도 같은 언어로 작성하나?

**그렇다.** Node.js에서 JavaScript를 사용한다. 다만 브라우저와 Node.js가 제공하는 API는 서로 다르다. 예를 들어 브라우저의 `document` 객체는 일반적인 Node.js 서버 환경에서 기본 제공되지 않는다.

### Q4. React를 사용하려면 Next.js가 필수인가?

**아니다.** React만으로도 UI를 만들 수 있고, Next.js는 React 앱을 개발하는 여러 방식 중 하나다.

### Q5. TypeScript를 쓰면 JavaScript를 몰라도 되나?

**아니다.** TypeScript는 JavaScript를 기반으로 확장한 언어이기 때문에 JavaScript 기본 문법을 먼저 이해하는 것이 좋다.

### Q6. Tailwind CSS를 쓰면 CSS를 몰라도 되나?

**아니다.** Tailwind의 클래스가 실제로 어떤 CSS 속성에 해당하는지 알아야 문제를 해결하고 원하는 디자인을 만들 수 있다.

---

## 13. 공식 문서 및 학습 자료

수업 필기에 나온 학습 자료를 정리하고, 개념별 공식 문서를 함께 연결한다.

| 자료 | 활용 방법 |
|---|---|
| [MDN Web Docs](https://developer.mozilla.org/ko/) | HTML, CSS, JavaScript, 웹 표준의 개념과 예제 학습 |
| [W3Schools](https://www.w3schools.com/) | 웹페이지에서 예제 코드를 수정해 보는 실습 용도(공식 표준 문서는 아님) |
| [Node.js 공식 문서](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) | Node.js 실행 환경과 서버 동작 원리 학습 |
| [React 공식 문서](https://ko.react.dev/learn) | 컴포넌트, JSX, 상태 관리 학습 |
| [Next.js 공식 문서](https://nextjs.org/docs/app) | App Router, 라우팅, 서버/클라이언트 컴포넌트 학습 |
| [TypeScript 공식 문서](https://www.typescriptlang.org/docs/handbook/intro.html) | 타입 및 정적 타입 검사 개념 학습 |
| [Tailwind CSS 공식 문서](https://tailwindcss.com/docs/styling-with-utility-classes) | 유틸리티 클래스 방식 이해 |

### 공식 문서로 추가 확인한 주요 내용

- [MDN: Web Standards Model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model)
- [MDN: HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML)
- [MDN: What is CSS?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
- [MDN: What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
- [MDN: HTML and Accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
- [Next.js: Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)

---

## 14. 오늘의 핵심 요약

1. **프론트엔드**는 사용자가 보는 화면과 상호작용을 개발하는 영역이다.
2. **웹 표준**은 브라우저 호환성과 접근성 등을 높이기 위한 공통 규칙이다.
3. **HTML은 구조**, **CSS는 디자인**, **JavaScript는 동작**을 담당한다.
4. **Tailwind CSS**는 미리 정의된 유틸리티 클래스를 조합해 스타일을 빠르게 만든다.
5. **Node.js는 프로그래밍 언어가 아니라** JavaScript를 브라우저 밖에서 실행하는 환경이다.
6. **React**는 컴포넌트를 이용해 복잡한 UI를 관리하기 위한 라이브러리다.
7. **Next.js**는 React 기반 앱에 라우팅과 서버 렌더링 등 개발 기능을 제공하는 프레임워크다.
8. **TypeScript**는 JavaScript에 정적 타입 검사를 더해 개발 중 오류를 줄이는 데 도움을 준다.

### 앞으로의 학습 포인트

- HTML 시맨틱 태그를 보고 각 태그의 **역할**을 설명할 수 있는가?
- CSS 속성을 수정하면 화면이 **왜** 달라지는지 설명할 수 있는가?
- JavaScript에서 버튼 클릭 시 화면이 변경되는 **과정**을 이해했는가?
- JavaScript·Node.js·React·Next.js·TypeScript의 **종류와 관계**를 구분할 수 있는가?
- Next.js를 프로젝트에서 사용할 경우 React와 비교해 **어떤 편의 기능이 필요한지** 설명할 수 있는가?

### 개인 정리

오늘은 프론트엔드에 사용되는 기술이 단순히 여러 개의 언어를 나열한 것이 아니라, **웹의 구조를 만들고 → 디자인을 적용하고 → 동작을 구현하고 → 커진 서비스를 효율적으로 개발하기 위해 확장되어 온 기술들**이라는 점을 이해하는 데 초점을 두었다.

앞으로 새로운 기술을 배울 때도 기능만 외우는 것이 아니라 **'기존에는 어떤 문제가 있었고, 이 기술이 무엇을 해결했는가?'**를 함께 정리해 보면 좋겠다.
