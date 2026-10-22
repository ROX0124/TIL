# 17일차 - React Router, Axios와 오류 해결

## 📌 오늘 학습한 내용

- Component 간 화면 이동
- `react-router-dom`
- `axios`
- React 개발 서버 실행 오류 확인
- 3000번 Port 충돌
- 코드 오류로 인한 Compile 실패
- 화면이 출력되지 않는 문제 확인

---

## 1. Component 간 이동

이번 강의에서는 React에서 Component 간 화면 이동에 대해 학습하였다.

강의에서는 Component에서 다른 Component로 직접 이동하는 것이 아니라, 별도의 라이브러리를 이용하여 화면 이동을 구현하는 방법을 학습하였다.

이를 위해 다음 라이브러리를 사용하였다.

```text
react-router-dom
```

---

## 2. React Router DOM

`react-router-dom`은 React 프로젝트에서 Component 간 화면 이동을 구현하기 위해 사용하는 라이브러리이다.

```text
Component A
     ↓
react-router-dom
     ↓
Component B
```

이를 이용하여 하나의 React 프로젝트 안에서 여러 화면을 연결할 수 있다.

이번 강의에서는 Component 간 이동을 구현하기 위해 별도의 Routing 라이브러리가 필요하다는 점을 학습하였다.

---

## 3. Axios

`axios`는 **Front-end와 Back-end 사이의 HTTP 통신에서 Request와 Response를 처리하는 것을 도와주는 라이브러리**이다.

```text
Front-end
    ↓ Request
  Axios
    ↓
Back-end

Back-end
    ↓ Response
  Axios
    ↓
Front-end
```

이전에 학습했던 HTTP의 Request와 Response가 실제 React 프로젝트에서는 Axios와 같은 라이브러리를 통해 활용될 수 있다는 점을 확인하였다.

---

## 4. React 실행 중 발생한 문제

이번 실습에서는 `npm start`를 실행하는 과정에서 여러 문제가 발생하였다.

문제를 확인하면서 **개발 서버가 실행되지 않는 문제와 화면이 출력되지 않는 문제의 원인이 서로 다르다는 것**을 알게 되었다.

---

## 5. 3000번 Port 충돌

처음 `npm start`를 실행했을 때 다음과 같은 메시지가 발생하였다.

```text
Something is already running on port 3000.
```

이 메시지는 **3000번 Port가 이미 다른 프로세스에서 사용되고 있다는 의미**였다.

확인 결과 같은 프로젝트의 React 서버가 이미 실행되고 있었다.

따라서 새로운 React 서버를 다시 실행하려 했지만, 이미 같은 Port에서 서버가 동작 중이었기 때문에 새로운 서버를 실행할 수 없었던 것이 원인이었다.

```text
npm start
    ↓
Port 3000 확인
    ↓
이미 React Server 실행 중
    ↓
새로운 Server 실행 불가
```

---

## 6. 화면이 비어 있던 문제

서버가 정상적으로 실행되고 있음에도 브라우저 화면이 비어 있는 문제가 발생하였다.

이 문제는 3000번 Port 문제와는 다른 원인이었다.

확인 결과 **코드 오류로 인해 React App의 Compile이 정상적으로 완료되지 않은 것**이 원인이었다.

---

## 7. 확인된 코드 오류

### App Import 누락

`src/index.js`에서 다음과 같이 `<App />`을 사용하고 있었지만 `App`을 불러오지 않은 문제가 있었다.

```text
src/index.js

<App /> 사용
   ↓
App Import 누락
   ↓
Compile Error
```

---

### Routing Tag 이름 오류

`src/App.js`에서도 Routing과 관련된 태그 이름에 오류가 있었다.

잘못 작성된 태그 때문에 React가 정상적으로 Compile되지 않았다.

---

### 변수 이름 불일치

로그인 화면에서도 선언한 변수의 이름과 실제 사용하는 변수의 이름이 서로 다른 문제가 있었다.

```text
선언한 변수 이름
        ≠
실제 사용한 변수 이름
```

JavaScript에서는 변수 이름이 정확하게 일치해야 하기 때문에 이러한 차이도 오류의 원인이 되었다.

---

## 8. 문제 원인 정리

이번에 발생했던 문제는 크게 두 가지로 구분할 수 있었다.

### 문제 1. `npm start` 실행 문제

```text
원인
→ 3000번 Port에서 이미 React Server 실행 중
```

### 문제 2. 브라우저 화면 공백

```text
원인
→ 코드 오류로 Compile 실패

- App Import 누락
- Routing Tag 이름 오류
- 변수 이름 불일치
```

즉, **Server가 실행되는 것과 React App이 정상적으로 Compile되는 것은 별개의 문제**라는 점을 확인할 수 있었다.

---

## 💡 새롭게 알게 된 점

이번 강의를 통해 React에서 여러 Component로 구성된 화면을 연결하기 위해 `react-router-dom`을 사용할 수 있다는 것을 학습하였다.

또한 Front-end와 Back-end 사이에서 HTTP Request와 Response를 처리하기 위해 `axios`와 같은 라이브러리를 활용할 수 있다는 점도 알게 되었다.

특히 실습 과정에서 발생한 오류를 해결하면서 `npm start`가 실행되지 않는 문제와 브라우저 화면이 비어 있는 문제가 서로 다른 원인에서 발생할 수 있다는 것을 알게 되었다.

3000번 Port가 이미 사용되고 있는 경우에는 서버 실행 환경을 확인해야 하고, 서버가 실행되고 있음에도 화면이 나오지 않는 경우에는 React 코드가 정상적으로 Compile되고 있는지 확인해야 한다는 점이 기억에 남았다.

---

## 🔎 추가로 공부할 내용

- `react-router-dom`을 이용한 실제 Routing 방법
- Route와 Router의 역할
- Axios를 이용한 GET / POST 요청
- React에서 Component Import 방법
- React Compile Error 확인 방법
- Port가 사용 중인지 확인하는 방법
- Front-end와 Back-end를 실제로 연결하는 과정

---

## ✏️ 오늘의 한 줄 정리

> React에서는 `react-router-dom`을 이용해 화면 이동을 구성하고 Axios를 통해 서버와 통신할 수 있으며, 실행 문제가 발생하면 Server 상태와 Compile 오류를 구분하여 확인해야 한다.