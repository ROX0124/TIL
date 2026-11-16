# [Backend Day 1] LG CNS AM Inspire Camp 7기 TIL

**작성일:** 2026.11.16 (월) | **과목:** Backend - Java

## 오늘 학습한 주제

**Java 실행 환경과 객체지향 프로그래밍의 기본 개념**

- JDK, JRE, JVM의 차이와 역할
- 객체지향 프로그래밍의 추상화(Abstraction)
- 캡슐화(Encapsulation)와 정보 은닉
- 클래스 간 의존성(Dependency)과 연관성(Association)

**참고 자료:** Java과정(jdbc포함).pdf 8, 23~25, 34~38페이지

---

## 오늘 배운 것 — 나만의 언어로 설명

### 1. JDK, JRE, JVM의 차이

Java 프로그램은 소스코드를 작성한 다음 컴파일하고 실행하는 과정을 거친다. 이 과정에서 JDK, JRE, JVM이 각각 다른 역할을 수행한다.

쉽게 말하면 다음과 같다.

- **JDK(Java Development Kit)** 는 Java 프로그램을 개발하기 위한 도구 모음이다.
- **JRE(Java Runtime Environment)** 는 Java 프로그램을 실행하기 위한 환경이다.
- **JVM(Java Virtual Machine)** 은 컴파일된 Java 바이트코드를 실제로 실행하는 가상 머신이다.

교재에서는 다음과 같은 포함 관계로 설명한다.

`JDK ⊃ JRE ⊃ JVM`

JDK에는 컴파일러와 같은 개발 도구가 포함되고, JRE에는 JVM 및 실행에 필요한 라이브러리가 포함된다.

단, 이 관계는 기본 개념을 설명하기 위한 것으로, 최신 Java 배포판에서는 독립적인 JRE를 별도로 제공하지 않는 경우도 있다.

**Java 프로그램의 실행 과정**

1. 개발자가 `.java` 파일에 소스코드를 작성한다.
2. JDK에 포함된 `javac` 컴파일러를 이용해 컴파일한다.
3. 컴파일 결과로 `.class` 바이트코드 파일이 생성된다.
4. JVM이 바이트코드를 읽고 실행한다.

예를 들어 `Hello.java`를 컴파일하면 `Hello.class`가 생성된다.

```bash
javac Hello.java
java Hello
```

Java는 운영체제에 맞는 JVM이 제공되면 동일한 바이트코드를 여러 운영체제에서 실행할 수 있다는 장점이 있다.

**핵심 정리:** JDK는 개발, JRE는 실행 환경, JVM은 바이트코드 실행을 담당한다.

### 2. 추상화(Abstraction)

**추상화는 쉽게 말하면 현실 세계의 대상에서 프로그램에 필요한 특징만 골라내는 과정이다.**

현실의 객체는 매우 많은 정보와 행동을 가지고 있지만, 프로그램을 개발할 때 그 모든 정보가 필요한 것은 아니다.

예를 들어 영화를 관리하는 프로그램을 만든다고 가정해 보자.

영화에는 제목, 감독, 배우, 제작비, 상영 시간 등 수많은 정보가 있지만, 프로그램의 목적에 따라 필요한 정보만 선택하면 된다.

**영화 객체를 추상화한 예시**

- 속성(Attribute): 제목, 감독, 주연 배우, 관람 등급
- 행동(Behavior): 영화를 상영한다.

이렇게 추출한 속성과 행동을 Java의 클래스로 표현할 수 있다.

```java
public class Movie {

    // 속성: 멤버 변수
    public String title;
    public String director;
    public String starring;
    public int rating;

    // 행동: 멤버 메서드
    public void playMovie() {
        System.out.println(title + "을 상영합니다.");
    }
}
```

여기서 `title`, `director` 등은 객체의 정보를 나타내는 멤버 변수이고, `playMovie()`는 객체의 행동을 나타내는 메서드다.

**클래스와 객체의 차이**

- 클래스(Class): 객체를 만들기 위한 설계도
- 객체(Object): 클래스를 바탕으로 생성한 실제 인스턴스

```java
Movie movie = new Movie();
movie.title = "킹콩";
movie.playMovie();
```

`new Movie()`를 실행하면 Movie 클래스를 기반으로 객체가 생성된다.

추상화는 프로그램에서 필요하지 않은 정보까지 모두 구현하는 것을 방지하고, 클래스의 역할을 명확하게 만들어 준다.

**핵심 정리:** 추상화는 무엇이 필요한지 선택하는 과정이며, 클래스는 그 결과를 코드로 표현한 설계도다.

### 3. 캡슐화(Encapsulation)

**캡슐화는 쉽게 말하면 데이터와 기능을 하나의 객체에 묶고, 내부 구현을 외부에서 함부로 변경하지 못하도록 관리하는 것이다.**

교재에서는 날짜를 관리하는 `MyDate` 클래스를 예시로 사용한다.

캡슐화가 적용되지 않은 경우를 살펴보자.

```java
public class MyDate {
    public int day;
    public int month;
    public int year;
}
```

이 상태에서는 다른 클래스가 다음과 같이 데이터를 직접 변경할 수 있다.

```java
MyDate date = new MyDate();
date.day = 32;
```

`day`가 `public`으로 선언되어 있기 때문에 존재하지 않는 날짜인 32일도 저장할 수 있다.

이런 문제를 해결하기 위해 멤버 변수를 `private`으로 선언하고, 공개 메서드를 통해 값을 관리할 수 있다.

```java
public class MyDate {

    private int day;

    // Getter: 데이터 조회
    public int getDay() {
        return day;
    }

    // Setter: 데이터 변경
    public boolean setDay(int newDay) {
        if (newDay >= 1 && newDay <= 31) {
            day = newDay;
            return true;
        }

        return false;
    }
}
```

이 코드는 캡슐화를 이해하기 위한 간단한 예시이며, 실제 날짜 검증에는 월별 일수와 윤년도 고려해야 한다.

**Getter와 Setter의 역할**

- `Getter`: 객체 내부의 값을 조회하는 메서드
- `Setter`: 객체 내부의 값을 변경하는 메서드
- `private`: 클래스 외부에서 직접 접근할 수 없도록 제한하는 접근 제어자
- `public`: 외부에서 접근할 수 있도록 허용하는 접근 제어자

**정보 은닉과 캡슐화의 차이**

정보 은닉(Information Hiding)은 주요 데이터를 외부에서 직접 접근하지 못하도록 숨기는 것이다.

캡슐화는 데이터뿐 아니라 내부 구현 방식도 감추고, 외부에는 필요한 기능만 제공하는 더 넓은 개념이다.

따라서 캡슐화가 반드시 모든 멤버 변수에 Getter와 Setter를 만드는 것을 뜻하지는 않는다.

**추상화와 캡슐화 비교**

| 구분 | 추상화 | 캡슐화 |
|---|---|---|
| 핵심 | 필요한 특징 추출 | 내부 데이터와 구현 보호 |
| 목적 | 설계 단순화 | 안전한 데이터 관리 및 유지보수 |
| 예시 | Movie의 제목과 상영 기능 선택 | day를 private으로 선언 |

**핵심 정리:** 추상화는 무엇을 표현할지 결정하고, 캡슐화는 내부를 어떻게 보호하고 사용할지 결정한다.

### 4. 의존성(Dependency)과 연관성(Association)

*이 부분은 PDF에 직접적인 비교 설명이 없어 객체지향 설계의 보충 개념으로 학습했다.*

#### 의존성(Dependency)

**의존성은 쉽게 말하면 한 클래스가 특정 작업을 수행하기 위해 다른 클래스의 기능을 사용하는 관계다.**

예를 들어 보고서를 출력하는 `Report` 클래스가 `Printer`의 기능을 이용한다고 가정하자.

```java
class Printer {
    public void print() {
        System.out.println("출력합니다.");
    }
}

class Report {
    public void printReport(Printer printer) {
        printer.print();
    }
}
```

`Report`는 `printReport()` 메서드에서 `Printer`를 사용한다.

따라서 `Report`가 `Printer`에 의존한다고 표현할 수 있다.

#### 연관성(Association)

**연관성은 쉽게 말하면 두 객체 사이에 구조적인 연결 관계가 존재하는 것이다.**

예를 들어 학생은 자신이 소속된 학교와 연결될 수 있다.

```java
class School {
    String name;
}

class Student {
    private School school;

    public Student(School school) {
        this.school = school;
    }
}
```

`Student` 클래스는 `School` 객체를 멤버 변수로 참조한다.

즉, 학생 객체와 학교 객체 사이에 연관 관계가 형성된다.

#### 의존성과 연관성 비교

| 구분 | 의존성 | 연관성 |
|---|---|---|
| 핵심 | 다른 객체의 기능 사용 | 객체 사이의 연결 |
| 대표 사례 | 메서드 매개변수 사용 | 멤버 변수로 객체 참조 |
| UML 표현 | 점선 화살표 | 실선 |
| 예시 | Report → Printer | Student → School |

실제 객체지향 설계에서는 관계의 수명이나 구현 방식만으로 두 관계가 항상 구분되는 것은 아니다.

**핵심 정리:** 의존성은 '사용한다', 연관성은 '연결되어 있다'라는 관점에서 먼저 이해하면 된다.

---

## 오늘 직접 작성한 코드

**실습 상태:** 복습용 코드 정리 완료 / 직접 타이핑 및 실행은 아직 진행 전

이번 복습에서는 캡슐화를 적용한 날짜 관리 클래스를 직접 작성하고 실행 결과를 확인할 예정이다.

**파일명: `MyDatePractice.java`**

```java
class MyDate {

    private int day = 1;

    public int getDay() {
        return day;
    }

    public boolean setDay(int newDay) {

        if (newDay >= 1 && newDay <= 31) {
            day = newDay;
            return true;
        }

        return false;
    }
}

public class MyDatePractice {

    public static void main(String[] args) {

        MyDate date = new MyDate();

        System.out.println(date.setDay(15));
        System.out.println(date.getDay());

        System.out.println(date.setDay(32));
        System.out.println(date.getDay());
    }
}
```

**컴파일 및 실행 명령어**

```bash
javac MyDatePractice.java
java MyDatePractice
```

**예상 실행 결과**

```text
true
15
false
15
```

**코드 동작 분석**

1. `new MyDate()`를 통해 객체를 생성하고 `day`를 1로 초기화한다.
2. `setDay(15)`는 유효한 값을 전달받으므로 `day`를 15로 변경하고 `true`를 반환한다.
3. `getDay()`를 호출하면 저장된 값 15가 반환된다.
4. `setDay(32)`는 허용 범위를 벗어나므로 `false`를 반환한다.
5. 잘못된 값은 저장되지 않기 때문에 마지막 `getDay()`의 결과도 15다.

**실제 실행 결과:** 직접 실행 후 기록 예정

---

## 어려웠던 점 & 해결 과정

### 복습 포인트 1. JDK와 JRE의 역할 구분

- **문제:** JDK, JRE, JVM이 모두 Java 프로그램 실행과 관련되어 있어 역할을 혼동하기 쉽다.
- **시도:** PDF 8페이지의 포함 관계를 기준으로 각각의 역할을 구분했다.
- **정리:** JDK는 개발 도구, JRE는 실행 환경, JVM은 바이트코드를 실행하는 핵심 요소라는 것을 이해했다.
- **교훈:** 용어를 외우기보다 Java 소스코드가 컴파일되고 실행되는 전체 흐름과 연결해서 이해하는 것이 중요하다.

### 복습 포인트 2. 추상화와 캡슐화의 차이

- **문제:** 두 개념 모두 객체지향 프로그래밍의 중요한 원칙이지만 목적이 다르다.
- **시도:** Movie와 MyDate 클래스를 비교했다.
- **정리:** 추상화는 필요한 특징을 추출하는 과정이고, 캡슐화는 데이터와 내부 구현을 보호하는 방법이다.
- **교훈:** 객체를 설계할 때는 필요한 속성과 행동을 먼저 정하고, 그다음 외부에 공개할 기능과 내부에 숨길 구현을 구분해야 한다.

### 복습 포인트 3. 의존성과 연관성의 차이

- **문제:** 두 개념 모두 클래스 간 관계를 나타내기 때문에 차이를 구분하기 쉽지 않다.
- **시도:** Report-Printer와 Student-School의 관계를 코드로 비교했다.
- **정리:** 의존성은 다른 클래스의 기능을 사용하는 관계이고, 연관성은 객체 사이에 구조적인 연결이 있는 관계다.
- **교훈:** 클래스 간 관계를 파악할 때 단순히 다른 클래스를 참조하는지만 보지 말고, 어떻게 사용하고 연결되는지 확인해야 한다.

*위 항목들은 실제 코딩 중 발생한 오류가 아니라 이론 복습에서 확인해야 할 개념들이며, 실습 후 발생한 오류와 해결 과정을 추가할 예정이다.*

---

## AI와 함께한 부분 

- **물어본 것:** Java 과정 PDF를 기준으로 JDK/JRE/JVM, 추상화, 캡슐화, 의존성 및 연관성의 개념과 차이를 초보자도 이해할 수 있도록 정리해 달라고 요청했다.
- **AI 답 중 자료와 대조한 것:** PDF 8페이지의 JVM/JRE/JDK 포함 관계, 23~25페이지의 Movie 추상화 예시, 34~38페이지의 MyDate 캡슐화 및 정보 은닉 설명을 확인했다.
- **추가 설명:** 의존성과 연관성은 PDF에서 직접적인 비교 내용을 확인하지 못하여 AI의 보충 설명을 활용했다.
- **AI가 틀렸던 것:** 현재까지 확인된 오류 없음. 다만 실제 코드 실행을 통한 검증은 아직 진행하지 않았다.

---

## 내일 계획 & 아직 모르는 것

### 다음 복습 계획

- [ ] JDK를 이용한 Java 컴파일 및 실행 과정 직접 확인하기
- [ ] Movie 클래스를 직접 작성하고 객체 생성해 보기
- [ ] MyDate 클래스를 직접 타이핑하여 캡슐화 실습하기
- [ ] Getter와 Setter의 호출 흐름을 코드로 확인하기
- [ ] 의존성과 연관성 예제를 직접 작성해 보기

### 추가로 확인할 개념

- `private`과 `public`의 접근 범위
- 클래스와 객체가 메모리에서 어떻게 구분되는지
- 생성자(Constructor)의 역할
- 메서드의 매개변수와 반환값
- 클래스 간 관계를 설계할 때 의존성과 연관성을 어떻게 판단하는지

### 오늘의 핵심 한 줄

**Java 프로그램의 개발 및 실행 구조를 이해하고, 추상화와 캡슐화를 통해 객체를 설계하며, 의존성과 연관성으로 객체 사이의 관계를 파악하는 기초를 복습했다.**