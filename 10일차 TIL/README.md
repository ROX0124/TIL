# 10일차 - Java 기초와 객체지향 프로그래밍

## 📌 오늘 학습한 내용

- Java와 객체지향 프로그래밍
- Class와 Instance
- 변수와 메서드
- JDK와 JVM
- Compile과 Interpreter
- `javac`와 `java`
- Byte Code와 Binary Code
- Java의 대소문자 구분
- 식별자(Identifier)

---

## 1. Java와 객체지향 프로그래밍

Java는 **객체지향 언어(Object-Oriented Language)**이다.

객체지향 프로그래밍은 **OOP(Object Oriented Programming)**라고 하며, 객체를 중심으로 프로그램을 구성하는 방식이다.

```text
OOP
= Object Oriented Programming
= 객체지향 프로그래밍
```

Java를 학습하기 위해서는 객체를 기반으로 프로그램을 구성하는 개념을 이해하는 것이 중요하다.

---

## 2. Class와 Instance

객체지향 프로그래밍에서는 Class와 Instance라는 개념을 사용한다.

강의에서는 다음과 같이 구분하였다.

```text
Class
→ 실제 세계에 존재하는 객체

Instance
→ 프로그램 영역에서 존재하는 객체
```

Class와 Instance는 Java 객체지향 프로그래밍을 이해하기 위한 기본적인 개념이다.

---

## 3. 변수

Java에서는 값을 저장하고 관리하기 위해 변수를 사용한다.

강의에서는 변수와 관련하여 다음과 같은 용어를 함께 살펴보았다.

```text
Variable
Attribute
Property
```

프로그램에서는 데이터를 저장하고 필요한 곳에서 사용하기 위해 변수를 활용한다.

---

## 4. Method

Method는 객체가 수행할 수 있는 기능이나 동작과 관련된 개념이다.

Java 프로그램에서는 여러 Method를 정의하고 이를 호출하면서 프로그램의 동작을 구성할 수 있다.

```text
Variable
→ 데이터와 관련

Method
→ 기능 및 동작과 관련
```

---

## 5. JDK와 JVM

Java를 개발하고 실행하기 위해서는 Java의 개발 및 실행 환경에 대한 이해가 필요하다.

### JDK

JDK는 **Java Development Kit**의 약자이다.

Java 프로그램을 개발하기 위해 사용하는 도구이다.

### JVM

JVM은 Java 프로그램을 실행하는 가상 머신과 관련된 개념이다.

강의에서는 Java 실행 환경인 JRE와 함께 JVM의 개념을 살펴보았다.

```text
JDK
→ Java 개발 환경

JVM / JRE
→ Java 실행 환경
```

---

## 6. Compile과 Interpreter

Java 프로그램은 작성한 코드를 그대로 실행하는 것이 아니라 컴파일과 실행 과정을 거친다.

강의에서는 다음 두 명령어를 살펴보았다.

### javac

```text
javac
→ Compile
```

작성한 Java 코드를 컴파일하는 역할을 한다.

### java

```text
java
→ Interpreter
```

컴파일된 Java 프로그램을 실행하는 과정에서 사용한다.

따라서 이번 강의에서는 다음과 같은 흐름으로 Java 프로그램이 동작한다는 것을 학습하였다.

```text
Java Source Code
      ↓
    javac
      ↓
   Compile
      ↓
     java
      ↓
프로그램 실행
```

---

## 7. Byte Code와 Binary Code

강의에서는 Java 코드가 실행되는 과정과 관련하여 Byte Code와 Binary Code의 개념도 살펴보았다.

### Byte Code

강의 메모에서는 Byte Code를 다음과 같이 정리하였다.

- 가상 머신에 의존
- 0과 1로 이루어진 코드

### Binary Code

Binary Code는 운영체제(OS)에 의존하는 코드로 정리하였다.

```text
Byte Code
→ 가상 머신에 의존

Binary Code
→ OS에 의존
```

---

## 8. Java는 대소문자를 구분한다

Java에서는 **대문자와 소문자를 서로 다른 문자로 구분한다.**

따라서 코드 작성 시 클래스, 변수, 메서드의 이름에서 대소문자를 정확하게 작성하는 것이 중요하다.

---

## 9. Identifier

Identifier는 프로그램에서 클래스, 변수, 메서드 등에 이름을 붙일 때 사용하는 **식별자**를 의미한다.

강의에서는 다음과 같은 예시를 살펴보았다.

### Class

```java
Teacher
```

### Variable

```java
engSum
```

### Method

```java
playing
playGround
```

클래스, 변수, 메서드 각각을 구분하기 위해 이름을 사용하며 이를 식별자라고 한다.

---

## 💡 새롭게 알게 된 점

이번 강의를 통해 Java가 객체지향 언어이며, 객체지향 프로그래밍에서는 Class와 Instance 같은 개념을 기반으로 프로그램을 구성한다는 것을 학습하였다.

또한 Java 코드를 작성하는 것뿐만 아니라 프로그램이 실행되기까지 `javac`를 이용한 Compile 과정과 `java`를 이용한 실행 과정이 존재한다는 것을 알게 되었다.

Java에서는 클래스, 변수, 메서드 등에 각각 이름을 부여하며 이러한 이름을 식별자라고 한다는 점도 확인하였다.

마지막으로 Java에서는 대소문자를 구분하기 때문에 코드 작성 시 이름을 정확하게 구분하여 사용하는 것이 중요하다는 것을 알게 되었다.

---

## 🔎 추가로 공부할 내용

- 객체지향 프로그래밍의 정확한 의미
- Class와 Instance의 관계
- Variable, Attribute, Property의 차이
- Method의 구조와 사용 방법
- JDK, JRE, JVM의 관계
- Java Compile 과정
- Byte Code와 Binary Code의 차이
- Java 식별자 작성 규칙

---

## ✏️ 오늘의 한 줄 정리

> Java는 객체지향 언어이며, Class와 Instance를 기반으로 프로그램을 구성하고 `javac`를 통한 컴파일과 `java`를 통한 실행 과정을 거쳐 동작한다.