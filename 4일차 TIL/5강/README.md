# 5강 - 웹 개발 환경 구성과 프로젝트 시작

## 📌 오늘 학습한 내용

- IDE(통합 개발 환경)의 개념
- 웹 개발에서 사용하는 주요 IDE
- 코드 파일 관리
- Web Server와 Web Application Server
- VSCode 웹 개발 환경 구성
- 웹 프로젝트 기본 폴더 구조 생성

---

## 1. IDE

IDE는 **Integrated Development Environment**의 약자로, 통합 개발 환경을 의미한다.

개발자가 코드를 작성하고 프로젝트를 관리할 때 사용하는 개발 도구이며, 강의에서는 다음과 같은 IDE를 살펴보았다.

- Eclipse
- VSCode
- IntelliJ

### Eclipse

Java 기반 개발에서 사용할 수 있는 개발 환경이다.

### VSCode

이번 실습에서 웹 프로젝트를 구성하기 위해 사용한 개발 도구이다.

### IntelliJ

개발에 사용할 수 있는 또 다른 IDE이다.

---

## 2. 코드 파일 관리

웹 개발을 진행할 때는 여러 파일을 하나의 프로젝트 안에서 관리하게 된다.

HTML, CSS, JavaScript와 같이 역할이 다른 파일을 구분하여 관리하면 프로젝트의 구조를 보다 명확하게 구성할 수 있다.

이번 실습에서는 VSCode에서 프로젝트 폴더를 생성하고 내부에 필요한 파일과 폴더를 직접 구성하였다.

---

## 3. Server의 구분

웹 서비스를 구성하는 서버는 크게 다음과 같이 구분할 수 있다.

```text
Server
├── Web Server
└── Web Application Server
```

이전 강의에서 학습했던 **Web Server와 Web Application Server(WAS)** 개념을 다시 확인하였다.

---

## 4. VSCode 개발 환경 구성

이번 강의에서는 VSCode를 이용하여 실제 웹 개발을 위한 기본 환경을 구성하였다.

### Live Server 설치

VSCode에서 **Live Server**를 설치하였다.

이후 웹 프로젝트를 관리하기 위한 프로젝트 폴더를 생성하였다.

```text
vscode_project/
```

---

## 5. 프로젝트 기본 구조

`vscode_project` 폴더 아래에 다음과 같은 구조를 만들었다.

```text
vscode_project/
│
├── css/
│
├── script/
│
└── login.html
```

각 파일의 종류에 따라 폴더를 구분함으로써 프로젝트 파일을 관리할 수 있도록 구성하였다.

- `css/` : CSS 파일을 관리하기 위한 폴더
- `script/` : Script 파일을 관리하기 위한 폴더
- `login.html` : 로그인 화면을 구성하기 위한 HTML 파일

---

## 6. VSCode 확장 프로그램

이번 실습에서는 개발 환경을 구성하기 위해 VSCode의 확장 프로그램도 설치하였다.

### Live Server

웹 개발을 진행하기 위한 환경 구성에 사용하였다.

### Material Icon Theme

VSCode 프로젝트에서 파일과 폴더를 보다 쉽게 구분할 수 있도록 Material Icon Theme을 설치하였다.

---

## 💡 새롭게 알게 된 점

이전 강의까지는 웹 서비스가 어떤 구조로 동작하는지 이론적인 내용을 중심으로 학습했다면, 이번 강의에서는 실제 개발을 시작하기 위해 **IDE를 사용하고 프로젝트 폴더를 직접 구성하는 과정**을 진행하였다.

특히 하나의 프로젝트 안에서 모든 파일을 한곳에 두는 것이 아니라 CSS와 Script 등의 파일을 역할에 따라 폴더로 구분하여 관리한다는 것을 확인할 수 있었다.

또한 VSCode에서는 필요한 기능을 확장 프로그램으로 추가하여 개발 환경을 구성할 수 있다는 점을 알게 되었다.

---

## 🔎 추가로 공부할 내용

- IDE마다 어떤 차이가 있는지
- Live Server가 웹 페이지를 실행하는 방식
- HTML, CSS, JavaScript 파일을 서로 연결하는 방법
- 실제 웹 프로젝트에서 사용하는 폴더 구조
- Web Server와 Web Application Server의 역할 차이 복습

---

## ✏️ 오늘의 한 줄 정리

> 웹 개발을 시작하기 위해 VSCode에 필요한 도구를 설치하고, HTML·CSS·Script 파일을 관리할 수 있는 기본 프로젝트 구조를 구성하였다.