# [Backend Day 5] LG CNS AM Inspire Camp 7기 TIL

작성일: 2026.11.20 (금) | 과목: Spring Framework 5

## 오늘 학습한 주제

**Spring Framework의 Bean 등록과 의존성 주입(DI)**

- `@Component`: Spring Bean 등록
- `@Autowired`: 타입을 기반으로 의존성 주입
- `@Qualifier`: 주입할 Bean을 구체적으로 지정
- `@Resource`: 이름을 기반으로 의존성 주입
- `@Override`: 상위 타입의 메서드를 재정의했음을 표시
- Spring-Test 및 Bean 설정 방식 이해

참고 자료: *Spring Framework 입문과 활용*, 60~68페이지

---

## 오늘 배운 것 — 나만의 언어로 설명

### 1. Bean과 DI란?

**Bean은 쉽게 말하면 Spring이 생성하고 관리하는 Java 객체이다.**

일반 Java 프로그램에서는 개발자가 객체를 생성한다.

```java
Printer printer = new StringPrinter();
```

하지만 Spring에서는 필요한 객체를 Spring 컨테이너에 등록한 뒤, 다른 객체에서 사용할 수 있도록 주입받을 수 있다.

이처럼 객체가 직접 의존 객체를 생성하는 대신, 외부에서 필요한 객체를 전달받는 것을 **DI(Dependency Injection, 의존성 주입)**라고 한다.

예를 들어 `Hello` 클래스가 메시지를 출력하려면 `Printer` 객체가 필요하다.

- `Hello`: Printer를 사용하는 클래스
- `Printer`: 출력 기능을 정의한 인터페이스
- `StringPrinter`: Printer를 구현한 클래스

Spring은 Bean 설정을 확인한 뒤 `Hello`에 적절한 `Printer` 객체를 주입할 수 있다.

**왜 DI를 사용할까?**

클래스 안에서 특정 구현 객체를 직접 생성하면 다른 구현체로 변경하기 어려워진다. DI를 사용하면 클래스 간 결합도를 낮추고 구현체 교체와 테스트를 쉽게 할 수 있다.

### 2. @Component — Bean 등록

`@Component`는 쉽게 말하면 **"이 클래스를 Spring이 관리하는 Bean으로 등록해 줘"**라고 표시하는 어노테이션이다.

```java
@Component("stringPrinter")
public class StringPrinter implements Printer {
    // ...
}
```

여기서 `stringPrinter`는 Bean의 이름이다.

다만 `@Component`를 붙였다고 무조건 등록되는 것은 아니다. 해당 클래스가 **컴포넌트 스캔(Component Scan)** 대상에 포함되어야 한다.

교재 65페이지의 XML 설정:

```xml
<context:component-scan
    base-package="myspring.di.annot" />
```

동작 과정은 다음과 같다.

1. Spring이 지정된 패키지를 탐색한다.
2. `@Component`가 붙은 클래스를 발견한다.
3. 해당 클래스를 Bean으로 등록한다.
4. 다른 Bean에서 의존성 주입을 통해 사용할 수 있다.

**관련 어노테이션**

| 어노테이션 | 주요 역할 |
|---|---|
| `@Component` | 일반적인 Bean 등록 |
| `@Repository` | 데이터 접근 계층 |
| `@Service` | 비즈니스 로직 계층 |
| `@Controller` | 웹 요청과 응답 처리 계층 |

`@Repository`, `@Service`, `@Controller`는 `@Component`의 특수한 형태이다.

### 3. @Autowired — 자동 의존성 주입

`@Autowired`는 쉽게 말하면 **"필요한 객체를 Spring에서 찾아서 연결해 줘"**라는 뜻이다.

```java
@Autowired
private Printer printer;
```

`Printer` 타입에 해당하는 Bean을 Spring 컨테이너에서 찾아 주입한다.

**특징**

- 기본적으로 타입(Type)을 기준으로 Bean을 탐색한다.
- 필드, 생성자, setter 및 일반 메서드에 사용할 수 있다.
- XML 설정의 `property`, `constructor-arg`를 통한 의존성 주입과 비슷한 역할을 한다.

주의할 점은 같은 타입의 Bean이 여러 개 존재하는 경우이다.

예를 들어 `StringPrinter`와 `ConsolePrinter`가 모두 `Printer`를 구현하고 Bean으로 등록되어 있다면, 타입만으로는 어떤 Bean을 주입해야 할지 결정하지 못할 수 있다.

### 4. @Qualifier — 주입할 Bean 구분

`@Qualifier`는 쉽게 말하면 **"같은 타입의 Bean이 여러 개라면 이 조건에 맞는 Bean을 선택해 줘"**라는 뜻이다.

```java
@Autowired
@Qualifier("stringPrinter")
private Printer printer;
```

이 코드는 다음과 같이 동작한다.

1. `@Autowired`가 `Printer` 타입의 Bean을 찾는다.
2. `@Qualifier("stringPrinter")`가 후보를 좁힌다.
3. 조건에 맞는 Bean이 주입된다.

**왜 사용할까?**

하나의 인터페이스를 여러 클래스가 구현하는 경우, 타입만으로 주입할 대상을 구분하기 어렵기 때문이다.

`@Qualifier`는 단독으로 객체를 주입하는 어노테이션이 아니라, `@Autowired`의 주입 후보를 구체화할 때 함께 사용한다.

### 5. @Resource — 이름을 기준으로 의존성 주입

`@Resource`는 쉽게 말하면 **"지정한 이름의 Bean을 찾아서 연결해 줘"**라는 뜻이다.

```java
@Resource(name = "stringPrinter")
private Printer printer;
```

기본적인 차이점은 다음과 같다.

| 구분 | @Autowired | @Resource |
|---|---|---|
| 기본 탐색 기준 | 타입(Type) | 이름(Name) |
| 특정 Bean 지정 | `@Qualifier`와 조합 | `name` 속성 |
| 주요 적용 대상 | 필드, 생성자, 메서드 | 필드, setter 메서드 |

교재에서는 `@Autowired`는 타입 중심, `@Resource`는 이름 중심이라고 구분한다.

단, Spring에는 후보를 추가로 판별하는 규칙도 있으므로 이 표는 **기본 개념을 이해하기 위한 구분**이다.

Spring Framework 5 예제에서 `@Resource`는 일반적으로 `javax.annotation.Resource`를 import한다. 사용하는 JDK 및 프로젝트 설정에 따라 관련 라이브러리가 추가로 필요할 수 있다.

### 6. @Override — 메서드 재정의 확인

`@Override`는 Spring의 DI 기능이 아니라 **Java에서 제공하는 어노테이션**이다.

쉽게 말하면 **"이 메서드는 부모 클래스 또는 인터페이스의 메서드를 재정의한 것이다"**라고 컴파일러에 알려주는 역할을 한다.

```java
public interface Printer {
    void print(String message);
}
```

```java
public class ConsolePrinter implements Printer {

    @Override
    public void print(String message) {
        System.out.println(message);
    }
}
```

`ConsolePrinter`는 `Printer` 인터페이스에 정의된 `print()` 메서드를 구현한다.

**왜 @Override를 사용할까?**

메서드 이름이나 매개변수를 잘못 작성했을 때 컴파일 과정에서 오류를 확인할 수 있기 때문이다.

예를 들어 `print()`를 `pirnt()`로 잘못 작성하고 `@Override`를 붙이면, 재정의할 메서드가 존재하지 않으므로 오류가 발생한다.

**주의:** `@Override`는 메서드 재정의를 검사하는 역할이지, 객체를 생성하거나 Bean을 주입하는 기능은 아니다.

### 7. Spring-Test 관련 어노테이션 (교재 60~61p)

**@ExtendWith(SpringExtension.class)**

JUnit 5 테스트에 Spring의 테스트 기능을 연결한다.

```java
@ExtendWith(SpringExtension.class)
```

이를 통해 Spring의 `ApplicationContext`를 이용하는 테스트를 작성할 수 있다.

**@ContextConfiguration**

테스트에서 사용할 Spring 설정 정보를 지정한다.

```java
@ContextConfiguration(
    locations = "classpath:beans.xml"
)
```

즉, `beans.xml`에 정의한 Bean 설정을 테스트에서 사용하도록 한다.

**@Autowired와의 연결**

테스트 클래스에도 `@Autowired`를 사용하여 Spring Bean을 주입할 수 있다. 따라서 매번 직접 `GenericXmlApplicationContext`를 생성해 Bean을 조회하는 코드를 작성하지 않아도 된다.

### 8. XML 설정과 어노테이션 설정 (교재 62~64p)

| XML 설정 | 어노테이션 설정 |
|---|---|
| Bean을 XML에 명시적으로 정의 | 클래스에 어노테이션 표시 |
| Bean 구성을 한곳에서 확인하기 쉬움 | 반복되는 설정 코드를 줄일 수 있음 |
| Bean 수가 많으면 XML 관리가 복잡 | 설정이 여러 클래스로 분산될 수 있음 |
| 설정 파일 수정 시 충돌 가능 | 컴포넌트 스캔 설정 필요 |

교재에서는 두 방식을 혼합하는 방법도 소개한다.

### 9. @Value — 일반 값 주입 (교재 68p)

`@Value`는 Bean 객체가 아닌 문자열 등의 값을 주입할 때 사용한다.

```java
@Value("안녕하세요")
private String name;
```

이 코드는 `name` 필드에 `"안녕하세요"`라는 값을 주입한다.

`@Autowired`가 주로 객체 의존성을 연결한다면, `@Value`는 설정 값이나 문자열과 같은 데이터를 주입할 때 사용한다.

### 10. 오늘 배운 어노테이션 비교

| 어노테이션 | 핵심 목적 |
|---|---|
| `@Component` | Spring이 관리할 Bean 등록 |
| `@Autowired` | Bean 의존성 주입 |
| `@Qualifier` | 주입할 Bean 후보 구분 |
| `@Resource` | 이름을 중심으로 Bean 연결 |
| `@Override` | 메서드 재정의 검증 |
| `@Value` | 일반 값 주입 |

**가장 중요한 구분**

`@Component`는 **등록**, `@Autowired`는 **주입**, `@Qualifier`는 **후보 선택**, `@Override`는 **Java 메서드 재정의 검증**을 담당한다.

---

## 오늘 직접 작성한 코드

아래 코드는 교재 65페이지의 `Hello` / `Printer` 구조를 바탕으로 재구성한 복습용 예제이다. 실제 GitHub 소스 파일과의 일치 여부는 확인하지 못했다.

### 1. Printer.java — 인터페이스

```java
public interface Printer {
    void print(String message);
}
```

출력 기능의 공통 규칙을 정의한다.

### 2. StringPrinter.java — 구현체

```java
import org.springframework.stereotype.Component;

@Component("stringPrinter")
public class StringPrinter implements Printer {

    private StringBuffer buffer = new StringBuffer();

    @Override
    public void print(String message) {
        buffer.append(message);
    }

    @Override
    public String toString() {
        return buffer.toString();
    }
}
```

- `@Component`: Bean으로 등록
- `@Override`: 인터페이스 메서드 구현 및 `toString()` 재정의
- `StringBuffer`: 전달받은 문자열 저장

### 3. ConsolePrinter.java — 다른 구현체

```java
import org.springframework.stereotype.Component;

@Component("consolePrinter")
public class ConsolePrinter implements Printer {

    @Override
    public void print(String message) {
        System.out.println(message);
    }
}
```

`StringPrinter`와 동일한 `Printer` 타입이므로 두 Bean이 모두 등록된 상황을 만들 수 있다.

### 4. Hello.java — 의존성 주입

```java
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;

@Component("hello")
public class Hello {

    @Value("안녕하세요")
    private String name;

    @Autowired
    @Qualifier("stringPrinter")
    private Printer printer;

    public String sayHello() {
        return "Hello " + name;
    }

    public void print() {
        printer.print(sayHello());
    }
}
```

**실행 흐름**

1. `Hello`가 Bean으로 등록된다.
2. `name`에 `"안녕하세요"`가 주입된다.
3. `Printer` 타입의 Bean을 탐색한다.
4. `@Qualifier`에 따라 `stringPrinter`를 선택한다.
5. `print()`가 호출되면 문자열이 `StringPrinter`에 저장된다.

`@Resource`를 사용하는 방법으로 변경하려면 다음과 같이 작성할 수 있다.

```java
@Resource(name = "stringPrinter")
private Printer printer;
```

이 경우 기존의 `@Autowired`, `@Qualifier` 선언을 대체하며, `Resource` import가 필요하다.

### 5. beans.xml — 컴포넌트 스캔

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd">

    <context:component-scan
        base-package="myspring.di.annot" />

</beans>
```

Java 클래스들이 `myspring.di.annot` 패키지에 있다는 가정의 예제이다. 실제 패키지에 맞게 수정해야 한다.

### 6. HelloTest.java — JUnit 5 테스트

```java
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(locations = "classpath:beans.xml")
public class HelloTest {

    @Autowired
    private Hello hello;

    @Autowired
    private StringPrinter stringPrinter;

    @Test
    public void testHello() {
        hello.print();

        assertEquals(
            "Hello 안녕하세요",
            stringPrinter.toString()
        );
    }
}
```

**예상 결과**

- `Hello`와 `StringPrinter`가 정상적으로 주입되면 테스트가 통과한다.
- `hello.print()`는 문자열을 `StringPrinter`의 버퍼에 저장한다.
- `assertEquals()`는 예상 문자열과 저장된 문자열을 비교한다.

실행 전에는 Spring-Test, JUnit 5 등 필요한 라이브러리와 패키지 설정이 올바르게 구성되어 있어야 한다.

---

## 어려웠던 점 & 해결 과정

### 1. @Autowired와 @Resource의 차이

- **헷갈릴 수 있는 부분:** 둘 다 자동으로 Bean을 주입한다.
- **구분:** `@Autowired`는 타입 중심이고 `@Resource`는 이름 중심이다.
- **교훈:** 어떤 Bean이 연결되는지 확인하려면 타입뿐 아니라 Bean 이름도 함께 살펴봐야 한다.

### 2. @Autowired와 @Qualifier의 관계

- **문제 상황:** 같은 타입의 Bean이 여러 개 등록되어 주입 대상이 모호해지는 경우
- **해결 방법:** `@Qualifier`를 사용하여 후보를 구체적으로 지정한다.
- **교훈:** 인터페이스와 구현체가 여러 개 존재하는 경우 의존성 주입 대상의 선택 기준을 이해해야 한다.

### 3. @Component를 붙였는데 Bean을 찾지 못하는 경우

- **점검:** 컴포넌트 스캔 대상 패키지에 포함되어 있는지 확인한다.
- **교훈:** `@Component` 선언과 컴포넌트 스캔 설정은 함께 확인해야 한다.

※ 위 항목들은 실제로 오류가 발생했다고 기록한 것이 아니라, 오늘 배운 내용에서 점검할 만한 상황을 정리한 것이다.

---

## 내일 계획 & 아직 모르는 것

### 추가 복습할 개념

- `@Autowired`와 `@Resource`가 Bean을 탐색하는 방식
- `@Qualifier`가 필요한 상황
- Spring 컨테이너의 Bean 등록 및 주입 과정
- XML 설정과 어노테이션 설정의 차이

### 다음 실습 목표

- [ ] `@Autowired`만 사용했을 때의 동작 확인
- [ ] 동일 타입 Bean 두 개를 등록하고 주입 대상이 모호해지는 상황 확인
- [ ] `@Qualifier` 또는 `@Resource`를 이용해 해결
- [ ] JUnit 테스트로 의존성 주입 결과 검증

### 오늘의 핵심 한 줄

**Spring에서는 Bean을 등록하고 필요한 객체를 주입받아 사용하며, 같은 타입의 Bean이 여러 개일 때는 주입 대상을 명확하게 지정하는 것이 중요하다.**