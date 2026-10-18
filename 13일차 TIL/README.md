# 13일차 - Java 프로젝트 구조와 MVC 패턴

## 📌 오늘 학습한 내용

- `package`
- `import`
- 프로젝트에서 역할에 따른 Java 파일 구성
- Controller
- ServiceImpl
- Repository / DAO
- DTO / VO / Entity
- Spring Framework
- MVC 패턴

---

## 1. Package와 Import

이번 강의에서는 Java에서 사용하는 다음 두 가지 개념을 살펴보았다.

```java
package
import
```

이번 강의 메모에서는 개념에 대한 세부적인 설명보다는 키워드 위주로 학습하였다.

따라서 이후 실제 Java 프로젝트에서 `package`와 `import`가 어떻게 사용되는지 추가로 학습할 필요가 있다.

---

## 2. 프로젝트의 파일 구성

프로젝트를 진행하다 보면 다양한 역할을 수행하는 여러 Java 파일을 만들게 된다.

모든 기능을 하나의 파일에 작성하는 것이 아니라 각 파일이 담당하는 역할을 구분하여 프로젝트를 구성할 수 있다.

강의에서 살펴본 기본적인 파일 구성은 다음과 같다.

```text
Project
│
├── Controller.java
├── ServiceImpl.java
├── Repository.java / Dao.java
└── DTO.java / VO / Entity.java
```

각 파일은 프로젝트 내부에서 서로 다른 역할을 담당한다.

---

## 3. Controller

`Controller.java`는 **각 클래스의 기능을 조율하는 역할**을 담당한다.

```text
Controller
→ 각 클래스의 기능 조율
```

프로젝트에서 여러 기능이 존재할 때 각각의 기능이 동작할 수 있도록 연결하고 조율하는 부분으로 이해할 수 있다.

---

## 4. ServiceImpl

`ServiceImpl.java`는 **비즈니스 로직을 담당하는 부분**이다.

```text
ServiceImpl
→ Business Logic
```

즉, 서비스에서 실제로 수행해야 하는 주요 기능과 처리 과정을 담당한다.

---

## 5. Repository와 DAO

데이터베이스와 커뮤니케이션하는 영역에서는 `Repository` 또는 `DAO`를 사용할 수 있다.

강의에서는 다음과 같이 구분하였다.

```text
JPA
→ Repository.java

MyBatis
→ Dao.java
```

### Repository

`Repository.java`는 JPA 기반에서 데이터베이스와의 커뮤니케이션을 담당한다.

### DAO

`Dao.java`는 MyBatis 기반에서 데이터베이스와의 커뮤니케이션을 담당한다.

이전에 웹 서비스 강의에서 학습했던 JPA와 MyBatis가 실제 프로젝트 구조에서는 각각 Repository와 DAO의 형태로 연결될 수 있다는 것을 확인하였다.

---

## 6. DTO / VO / Entity

다음과 같은 파일들은 **데이터를 담는 역할**을 담당한다.

```text
DTO
VO
Entity
```

이번 강의에서는 세 개의 개념을 세부적으로 구분하기보다는 데이터를 담는 역할을 담당하는 파일이라는 점을 학습하였다.

---

## 7. 프로젝트의 역할 구분

이번 강의 내용을 전체적으로 정리하면 다음과 같이 이해할 수 있다.

```text
Controller
    ↓
각 기능을 조율

ServiceImpl
    ↓
비즈니스 로직 처리

Repository / DAO
    ↓
Database와 통신

DTO / VO / Entity
    ↓
데이터 보관
```

프로젝트에서는 각 영역의 역할을 분리하여 파일을 구성할 수 있다.

---

## 8. Spring Framework와 MVC 패턴

강의에서는 **Open Source Spring Framework**와 함께 **MVC 패턴**이라는 개념을 살펴보았다.

```text
Spring Framework
        ↓
    MVC Pattern
```

이번 강의에서는 MVC 패턴이라는 구조가 존재한다는 내용을 확인하였으며, 각각의 구성 요소와 구체적인 동작 방식은 이후 추가적인 학습이 필요하다.

---

## 💡 새롭게 알게 된 점

이전까지 Java의 변수, 메서드, 클래스처럼 하나의 프로그램을 구성하는 기본적인 요소를 학습했다면, 이번 강의에서는 실제 프로젝트에서는 여러 Java 파일이 각각 다른 역할을 담당하도록 구성된다는 것을 알게 되었다.

특히 `Controller`, `ServiceImpl`, `Repository/DAO`, `DTO/VO/Entity`처럼 파일의 역할을 나누어 프로젝트를 구성할 수 있다는 점이 기억에 남았다.

또한 이전 웹 서비스 강의에서 배웠던 JPA와 MyBatis가 실제 프로젝트에서는 각각 Repository와 DAO를 통해 데이터베이스와 연결될 수 있다는 점도 확인할 수 있었다.

마지막으로 Spring Framework에서는 MVC 패턴이라는 구조를 활용한다는 개념을 처음 접하였다.

---

## 🔎 추가로 공부할 내용

- `package`의 역할
- `import`의 역할
- Controller와 Service의 관계
- Service와 ServiceImpl의 차이
- Repository와 DAO의 차이
- DTO, VO, Entity 각각의 차이
- Spring Framework의 기본 구조
- MVC 패턴의 Model, View, Controller 역할

---

## ✏️ 오늘의 한 줄 정리

> Java 프로젝트에서는 Controller, Service, Repository/DAO, DTO 등의 역할을 구분하여 파일을 구성하고, Spring Framework에서는 MVC 패턴을 기반으로 프로젝트 구조를 설계할 수 있다.