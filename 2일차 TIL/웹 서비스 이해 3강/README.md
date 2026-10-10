# 3강 - HTTP 통신과 API의 기본 구조

## 📌 오늘 학습한 내용

- 웹 개발에서 사용되는 주요 언어
- 개발 환경과 웹 서버
- CRUD의 개념
- HTTP Request와 HTTP Method
- RESTful URL 설계 방식
- HTTP와 HTTPS의 차이
- HTTP Response와 상태 코드
- SPA의 개념
- API 명세서의 기본 구조

---

## 1. 웹 개발에서 사용하는 언어

웹 서비스를 개발할 때는 목적에 따라 다양한 프로그래밍 언어를 사용할 수 있다.

### Java

Java는 상업용 웹 서비스에서 많이 활용되는 언어이다.

특히 강의에서는 다음과 같은 분야에서 많이 사용된다고 설명했다.

- 관공서
- 금융권

### Python

Python은 다음과 같은 분야에 특화되어 있다.

- 데이터 분석
- 데이터 시각화
- 인공지능

웹 개발뿐만 아니라 데이터를 활용하는 분야에서 폭넓게 사용되는 언어이다.

---

## 2. 웹 개발 환경

웹 개발을 할 때는 IDE를 활용할 수 있다.

### IDE

IDE는 **Integrated Development Environment**의 약자로 통합 개발 환경을 의미한다.

개발자가 프로그램을 작성하고 개발하는 데 필요한 여러 기능을 하나의 환경에서 사용할 수 있도록 제공한다.

웹 서버 또는 애플리케이션 서버의 예로는 다음과 같은 것들이 있다.

- Nginx
- Tomcat

---

## 3. CRUD

CRUD는 데이터를 다룰 때 사용하는 가장 기본적인 네 가지 기능을 의미한다.

| CRUD | 의미 | 역할 |
| --- | --- | --- |
| C | Create | 데이터 입력 및 생성 |
| R | Read | 데이터 읽기 및 조회 |
| U | Update | 데이터 수정 |
| D | Delete | 데이터 삭제 |

대부분의 서비스 기능은 크게 보면 이 네 가지 동작을 기반으로 만들어진다.

---

## 4. HTTP Request

HTTP Request는 클라이언트가 서버에게 특정 작업을 요청하는 것이다.

요청할 때는 어떤 작업을 원하는지를 **HTTP Method**를 통해 표현할 수 있다.

### HTTP Method

#### GET

데이터를 조회할 때 사용한다.

```text
GET /users/1
```

CRUD의 **Read**에 해당한다.

---

#### POST

새로운 데이터를 생성할 때 사용한다.

```text
POST /users
```

CRUD의 **Create**에 해당한다.

---

#### PUT

기존 데이터를 전체적으로 수정할 때 사용한다.

```text
PUT /users/1
```

CRUD의 **Update**에 해당한다.

---

#### PATCH

데이터의 일부만 수정할 때 사용한다.

```text
PATCH /users/1
```

PUT과 PATCH 모두 데이터를 수정할 때 사용하지만,

- PUT: 전체 수정
- PATCH: 일부 수정

이라는 차이가 있다.

---

#### DELETE

데이터를 삭제할 때 사용한다.

```text
DELETE /users/1
```

CRUD의 **Delete**에 해당한다.

---

## 5. HTTP Method와 CRUD

HTTP Method와 CRUD를 연결하면 다음과 같이 정리할 수 있다.

| HTTP Method | CRUD | 역할 |
| --- | --- | --- |
| POST | Create | 생성 |
| GET | Read | 조회 |
| PUT | Update | 전체 수정 |
| PATCH | Update | 부분 수정 |
| DELETE | Delete | 삭제 |

HTTP Method를 통해 URL에 동작을 직접 적지 않고도 서버에게 어떤 작업을 원하는지 전달할 수 있다.

---

## 6. HTTP Request Header

HTTP 요청에는 실제 데이터 외에도 요청에 대한 추가적인 정보를 Header에 담아 전달할 수 있다.

### Content-Type

요청 본문이 어떤 형식으로 구성되어 있는지 나타낸다.

```text
Content-Type: application/json
```

### Authorization

사용자의 인증 정보를 전달할 때 사용한다.

예를 들어 JWT를 사용하는 경우 다음과 같은 형태로 전달할 수 있다.

```text
Authorization: Bearer <JWT>
```

### Accept

클라이언트가 서버로부터 어떤 형식의 응답을 받을 수 있는지를 나타낸다.

---

## 7. RESTful URL 설계

API의 URL을 설계할 때는 리소스를 기준으로 표현하는 방식이 사용된다.

### 리소스는 명사형 복수로 작성

```text
/users
```

다음과 같이 동작을 URL에 직접 작성하는 방식은 지양한다.

```text
/getUser
```

즉, URL에는 **무엇을 다룰 것인지**를 나타내고, 어떤 행동을 할 것인지는 HTTP Method를 사용하여 구분한다.

### 계층 구조 표현

리소스 간의 관계가 존재한다면 URL에서도 계층적인 형태로 표현할 수 있다.

```text
/users/{userId}/posts/{postId}
```

이 URL을 통해 특정 사용자의 특정 게시물을 나타낼 수 있다.

---

## 8. Request Body

클라이언트가 서버에게 데이터를 전달해야 하는 경우 Request Body를 사용할 수 있다.

강의에서는 주로 **JSON 형식**을 사용한다고 설명했다.

다만 Request Body가 반드시 JSON으로만 구성되는 것은 아니다.

---

## 9. HTTP와 HTTPS

### HTTP

HTTP는 **HyperText Transfer Protocol**의 약자로 웹에서 클라이언트와 서버가 통신하기 위한 규칙이다.

HTTP는 기본적으로 다음과 같은 구조로 동작한다.

```text
Request → Server 처리 → Response
```

하지만 HTTP는 데이터가 암호화되지 않기 때문에 통신 과정에서 도청이나 변조의 위험이 있다.

따라서 강의에서는 보안이 크게 필요하지 않은 테스트 환경이나 내부망 서비스 등에서 주로 사용한다고 설명했다.

---

### HTTPS

HTTPS는 **HyperText Transfer Protocol Secure**의 약자이다.

기존 HTTP 통신에 SSL/TLS를 이용한 보안 기능을 추가한 방식이다.

통신하는 데이터를 암호화하여 전달하기 때문에 HTTP보다 안전하다.

따라서 다음과 같이 중요한 정보를 다루는 서비스에서는 HTTPS를 사용하는 것이 중요하다.

- 로그인
- 금융 서비스
- 쇼핑몰

---

## 10. HTTP Response

클라이언트가 서버에 Request를 보내면 서버는 요청을 처리한 후 Response를 반환한다.

Response에는 요청의 처리 결과를 알려주는 **HTTP Status Code**가 포함된다.

### 주요 상태 코드

| 상태 코드 | 의미 |
| --- | --- |
| 200 OK | 요청 정상 처리 |
| 201 Created | 데이터 생성 완료 |
| 204 No Content | 요청은 성공했지만 응답 본문이 없음 |
| 400 Bad Request | 잘못된 요청 |
| 401 Unauthorized | 인증 실패 |
| 403 Forbidden | 권한 없음 |
| 404 Not Found | 요청한 리소스를 찾을 수 없음 |
| 500 Internal Server Error | 서버 내부 오류 |

상태 코드를 확인하면 클라이언트는 요청이 정상적으로 처리되었는지 또는 어떤 문제가 발생했는지를 판단할 수 있다.

---

## 11. Response Header

Response에도 Header가 존재한다.

### Content-Type

서버가 전달하는 응답 데이터의 형식을 나타낸다.

```text
Content-Type: application/json
```

### Cache-Control

브라우저 또는 클라이언트의 캐싱 정책을 설정한다.

### Set-Cookie

클라이언트에게 쿠키나 세션과 관련된 정보를 전달할 때 사용한다.

---

## 12. SPA

SPA는 **Single Page Application**의 약자이다.

강의에서 SPA와 관련된 대표적인 기술로 다음이 소개되었다.

- React.js
- Vue.js

React.js는 라이브러리, Vue.js는 프레임워크로 구분할 수 있다.

---

## 13. API 명세서

API를 개발하거나 개발자 간에 협업하기 위해서는 API가 어떻게 동작하는지 정의할 필요가 있다.

API 명세에서는 일반적으로 다음과 같은 내용을 작성한다.

### ① Endpoint

API가 접근하는 URL을 의미한다.

```text
/users/{id}
```

### ② Method

어떤 동작을 수행할 것인지 HTTP Method를 통해 정의한다.

```text
GET
POST
PUT
DELETE
```

### ③ Request

클라이언트가 서버에게 어떤 데이터를 전달해야 하는지 정의한다.

대표적으로 다음과 같은 정보가 포함될 수 있다.

- URL Parameter
- Query Parameter
- Request Body(JSON)

### ④ Response

서버가 요청을 처리한 후 어떤 결과를 반환하는지 정의한다.

대표적으로 다음과 같은 내용을 포함한다.

- HTTP Status Code
- Response JSON

---

## 💡 새롭게 알게 된 점

이번 강의를 통해 이전 강의에서 배웠던 Request와 Response가 실제로는 단순히 데이터를 주고받는 것에서 끝나는 것이 아니라, **HTTP Method, Header, URL, Body, Status Code 등의 요소를 통해 구체적으로 구성된다는 것**을 알게 되었다.

특히 CRUD의 네 가지 기능이 HTTP Method와 연결된다는 점이 기억에 남았다.

```text
Create → POST
Read   → GET
Update → PUT / PATCH
Delete → DELETE
```

또한 API의 URL에 `getUser`처럼 행동을 직접 표현하는 것이 아니라 `/users`처럼 리소스를 나타내고, 실제 행동은 HTTP Method로 표현하는 RESTful 방식도 새롭게 이해할 수 있었다.

그리고 서버의 응답을 받을 때 단순히 성공 또는 실패로만 판단하는 것이 아니라 `200`, `404`, `500`과 같은 HTTP 상태 코드를 이용해 처리 결과를 구분할 수 있다는 점도 알게 되었다.

---

## 🔎 추가로 공부할 내용

- REST와 RESTful API의 정확한 의미
- PUT과 PATCH의 구체적인 차이
- URL Parameter와 Query Parameter의 차이
- JWT를 이용한 인증 방식
- HTTP 상태 코드가 실제 프로젝트에서 어떻게 사용되는지
- API 명세서를 실제로 작성하는 방법

---

## ✏️ 오늘의 한 줄 정리

> HTTP 통신에서는 Method, URL, Header, Body를 이용해 서버에 요청을 전달하고, 서버는 상태 코드와 데이터를 포함한 Response를 반환하며 이러한 규칙을 기반으로 API가 설계된다.