# [Backend Day 4] LG CNS AM Inspire Camp 7기 TIL

작성일: 2026.11.19 (목) | 과목: Java Backend / Spring Framework

## 오늘 학습한 주제

**Spring Framework와 IoC, DI(Dependency Injection)**

- Spring Framework의 개념 및 주요 특징
- Spring의 핵심 전략: POJO, DI, AOP, PSA
- IoC(제어의 역전)와 Spring Container
- DI(의존성 주입)의 개념과 필요성
- Setter Injection과 Constructor Injection
- XML을 활용한 Bean 등록 및 의존관계 설정
- BeanFactory와 ApplicationContext
- JUnit5 및 Spring-Test를 이용한 DI 테스트

참고 자료: `스프링프레임워크입문과활용.pdf` 17~62페이지

---

## 오늘 배운 것 — 나만의 언어로 설명

### 1. Spring Framework란?

Spring Framework는 Java를 이용해 애플리케이션을 개발할 때 객체의 생성과 관리, 의존관계 설정 등을 편리하게 처리하도록 도와주는 오픈소스 프레임워크이다.

쉽게 말하면, **개발자가 모든 기능을 처음부터 만들지 않고 실제 비즈니스 로직 개발에 집중할 수 있도록 도와주는 도구**라고 이해했다.

Spring은 특정 계층에만 사용하는 도구가 아니라 다양한 애플리케이션 영역에서 활용할 수 있다.

#### Spring의 핵심 전략

| 개념 | 의미 |
|---|---|
| POJO | 특정 프레임워크에 종속되지 않은 일반 Java 객체 |
| DI | 객체가 필요로 하는 다른 객체를 외부에서 전달받는 방식 |
| AOP | 로깅, 트랜잭션 등의 공통 기능을 분리하는 방식 |
| PSA | 복잡한 기술의 구현을 추상화하여 일관된 방식으로 사용하도록 지원 |

이 중 DI는 객체 간의 관계를 외부에서 설정한다는 점에서 중요하다.

### 2. IoC(Inversion of Control)란?

IoC는 제어의 역전이라는 의미이다.

일반적인 Java 프로그램에서는 개발자가 직접 객체를 생성하고 연결한다.

```java
Printer printer = new ConsolePrinter();
Hello hello = new Hello(printer);
```

위 코드에서는 개발자가 `new` 키워드로 객체를 생성하고 있다.

반면 Spring에서는 객체를 생성하고 필요한 의존관계를 연결하는 일을 Spring Container에 맡길 수 있다.

즉, **객체를 관리하는 제어권이 개발자 코드에서 Spring Container로 이동하는 것**이 IoC이다.

Spring Container는 다음 역할을 수행한다.

1. 객체 생성
2. 객체 초기화 및 의존관계 설정
3. 객체 제공 및 생명주기 관리
4. 필요한 시점에 객체 소멸 처리

여기서 Spring Container가 관리하는 객체를 **Bean(빈)**이라고 한다.

### 3. DI(Dependency Injection)란?

오늘 가장 중요하게 이해해야 할 개념이다.

DI는 Dependency Injection의 약자로, 의존성 주입이라는 뜻이다.

#### 3-1. 의존성이란?

의존성이란 한 객체가 자신의 기능을 수행하기 위해 다른 객체를 필요로 하는 관계를 의미한다.

예를 들어 `Hello` 클래스가 문자열을 출력하기 위해 `Printer`를 사용한다면, `Hello`는 `Printer`에 의존한다고 볼 수 있다.

```java
public class Hello {
    private Printer printer;
}
```

`Hello`의 기능 중 일부가 `Printer` 없이는 정상적으로 동작하지 않는다는 뜻이다.

#### 3-2. DI가 없는 경우

```java
public class Hello {

    private Printer printer = new ConsolePrinter();

    public void print() {
        printer.print("Hello Spring");
    }
}
```

`Hello` 클래스 내부에서 직접 `ConsolePrinter` 객체를 생성한다.

이 코드의 문제점은 `Hello`가 구체적인 구현 클래스인 `ConsolePrinter`를 알고 있다는 것이다.

나중에 콘솔 대신 문자열 저장 방식으로 변경한다면 `Hello`의 코드까지 수정해야 할 수 있다.

즉, 객체 간의 결합도가 높아지는 문제가 발생한다.

#### 3-3. DI를 적용한 경우

```java
public class Hello {

    private Printer printer;

    public Hello(Printer printer) {
        this.printer = printer;
    }

    public void print() {
        printer.print("Hello Spring");
    }
}
```

이제 `Hello`는 `Printer` 객체를 내부에서 직접 생성하지 않는다.

대신 생성자를 통해 외부에서 전달받는다.

```java
Printer printer = new ConsolePrinter();
Hello hello = new Hello(printer);
```

여기서 중요한 것은 **`Hello`가 어떤 Printer 구현 객체를 사용할지 스스로 결정하지 않는다는 점**이다.

Spring을 사용하면 이 연결 작업까지 Spring Container가 대신할 수 있다.

DI의 핵심은 단순히 `new`를 없애는 것이 아니라, 객체 생성 및 연결에 관한 책임을 사용하는 클래스 외부로 분리하는 것이다.

#### 3-4. DI가 필요한 이유

DI를 적용하면 다음과 같은 장점이 있다.

- **결합도 감소:** 특정 구현 클래스에 대한 직접적인 의존을 줄일 수 있다.
- **유연성 향상:** 기존 클래스를 수정하지 않고 다른 구현 객체로 교체하기 쉽다.
- **테스트 용이성:** 실제 객체 대신 테스트용 객체를 주입할 수 있다.
- **유지보수 향상:** 객체 사용 코드와 객체 연결 설정을 분리할 수 있다.

단, 모든 의존성이 사라지는 것은 아니다. `Hello`는 여전히 `Printer` 인터페이스에 의존하지만, 구체적인 구현 클래스와의 결합이 줄어드는 것이다.

### 4. IoC와 DI의 차이

IoC와 DI는 밀접한 관계가 있지만 같은 의미는 아니다.

| 구분 | IoC | DI |
|---|---|---|
| 의미 | 제어의 역전 | 의존성 주입 |
| 핵심 질문 | 누가 객체를 관리하는가? | 필요한 객체를 어떻게 전달하는가? |
| 역할 | 객체 생성 및 관리의 제어권을 외부로 이동 | 객체 간의 의존관계를 외부에서 연결 |
| 관계 | 상위 개념 | IoC를 구현하는 대표적인 방식 |

**IoC는 전체적인 제어 원리이고, DI는 그 원리를 실현하는 방법 중 하나**라고 이해했다.

또한 교재에서는 DL(Dependency Lookup)도 소개한다.

DL은 필요한 Bean을 직접 조회하는 방식이다.

```java
Hello hello = context.getBean("hello", Hello.class);
```

반면 DI는 Bean을 직접 찾아오는 대신 컨테이너가 필요한 위치에 전달해주는 방식이다.

### 5. DI의 세 가지 유형

#### 5-1. Setter Injection

Setter 메서드를 통해 필요한 객체를 주입하는 방식이다.

```java
public class Hello {

    private Printer printer;

    public void setPrinter(Printer printer) {
        this.printer = printer;
    }
}
```

Spring XML에서는 다음과 같이 설정할 수 있다.

```xml
<bean id="hello" class="myspring.di.xml.Hello">
    <property name="printer" ref="printer"/>
</bean>
```

`property`는 Setter를 통해 값을 주입하기 위한 설정이다.

`name="printer"`는 `setPrinter()`를 통해 설정할 프로퍼티를 의미하고, `ref="printer"`는 주입할 Bean의 ID를 의미한다.

Setter 주입은 객체 생성 이후에도 의존성을 변경할 수 있다는 특징이 있다. 다만 필요한 의존성을 설정하지 않으면 실행 중 문제가 발생할 수 있다.

#### 5-2. Constructor Injection

생성자를 통해 객체 생성 시 필요한 의존성을 전달하는 방식이다.

```java
public class Hello {

    private final Printer printer;

    public Hello(Printer printer) {
        this.printer = printer;
    }
}
```

XML에서는 `<constructor-arg>` 태그를 사용한다.

```xml
<bean id="hello" class="myspring.di.xml.Hello">
    <constructor-arg ref="printer"/>
</bean>
```

생성자 주입의 장점은 객체를 생성할 때 필요한 의존성을 함께 전달하도록 설계할 수 있다는 점이다.

또한 `final` 필드를 사용하면 생성 이후 해당 참조를 다시 대입하지 못하도록 만들 수 있다.

**필수 의존성은 생성자를 통해 주입하는 방식을 우선 고려하는 것이 좋다.**

#### 5-3. Method Injection

일반 메서드를 통해 필요한 의존성을 전달하는 방식이다.

```java
public void configure(Printer printer) {
    this.printer = printer;
}
```

교재에서는 Setter, Constructor와 함께 일반 메서드를 통한 주입도 소개하고 있다.

### 6. XML을 이용한 Bean 등록과 의존관계 설정

Spring은 XML 설정 정보를 읽고 객체를 생성하거나 연결할 수 있다.

#### Bean 등록

```xml
<bean id="printer"
      class="myspring.di.xml.ConsolePrinter"/>
```

- `bean`: Spring이 관리할 객체를 등록한다.
- `id`: Bean의 식별자이다.
- `class`: 실제로 생성할 클래스의 전체 이름이다.

#### value와 ref의 차이

```xml
<bean id="hello" class="myspring.di.xml.Hello">
    <property name="name" value="Spring"/>
    <property name="printer" ref="printer"/>
</bean>
```

| 속성 | 의미 | 예시 |
|---|---|---|
| `value` | 문자, 숫자 등의 단순 값 전달 | `"Spring"` |
| `ref` | 이미 등록된 다른 Bean의 참조 전달 | `"printer"` |

두 속성의 차이가 특히 중요하다.

`value="printer"`는 문자 자체를 전달한다는 의미이고, `ref="printer"`는 ID가 `printer`인 Bean을 찾아 연결한다는 의미이다.

#### Spring이 DI를 수행하는 과정

1. Spring Container가 XML 설정 파일을 읽는다.
2. `printer`라는 Bean 정의를 확인하고 객체를 생성한다.
3. `hello`라는 Bean 정의를 확인하고 객체를 생성한다.
4. `hello`의 `printer` 프로퍼티에 `printer` Bean을 주입한다.
5. 의존관계가 설정된 `hello` 객체를 사용할 수 있게 된다.

위 순서는 개념을 이해하기 위한 흐름이며, 실제 Bean 생성 시점과 순서는 설정에 따라 달라질 수 있다.

### 7. 컬렉션 타입의 DI

Spring은 객체 하나뿐 아니라 여러 값을 하나의 컬렉션으로 주입할 수 있도록 지원한다.

교재에서는 `List`, `Set`, `Map`, `Properties`를 소개한다.

List 주입 예시:

```xml
<property name="names">
    <list>
        <value>Spring</value>
        <value>IoC</value>
        <value>DI</value>
    </list>
</property>
```

Map 주입 예시:

```xml
<property name="ages">
    <map>
        <entry key="Kim" value="30"/>
        <entry key="Lee" value="35"/>
    </map>
</property>
```

컬렉션 역시 Spring 설정을 통해 외부에서 전달할 수 있다는 점에서 DI의 활용 사례라고 볼 수 있다.

### 8. BeanFactory와 ApplicationContext

Spring Container에는 BeanFactory와 ApplicationContext가 있다.

**BeanFactory**는 Bean을 생성하고 조회하며 관리하는 기본적인 컨테이너 인터페이스이다.

**ApplicationContext**는 BeanFactory를 확장하여 Bean 관리뿐 아니라 이벤트, 메시지, 리소스 처리 등 추가적인 기능을 제공하는 컨테이너 인터페이스이다.

실무에서는 일반적으로 ApplicationContext를 많이 사용한다.

```java
ApplicationContext context =
    new GenericXmlApplicationContext("classpath:beans.xml");

Hello hello = context.getBean("hello", Hello.class);

hello.print();
```

여기서 `getBean()`은 Spring Container에 등록된 객체를 찾아오는 역할을 한다.

`getBean()`으로 직접 객체를 조회하는 것은 DL의 예시이며, `hello` 내부의 `printer`가 Spring에 의해 연결되는 부분은 DI의 예시이다.

### 9. JUnit5와 Spring-Test

JUnit은 Java에서 단위 테스트를 작성하고 실행하도록 도와주는 테스트 프레임워크이다.

주요 어노테이션은 다음과 같다.

| 어노테이션 | 역할 |
|---|---|
| `@Test` | 테스트 메서드 지정 |
| `@BeforeEach` | 각 테스트 실행 전 수행 |
| `@AfterEach` | 각 테스트 실행 후 수행 |
| `@BeforeAll` | 전체 테스트 실행 전 한 번 수행 |
| `@AfterAll` | 전체 테스트 실행 후 한 번 수행 |
| `@Disabled` | 테스트 실행 제외 |

JUnit의 단정(Assertion) 메서드도 중요하다.

- `assertEquals(a, b)`: 기대값과 실제값이 같은지 확인
- `assertSame(a, b)`: 동일한 객체를 참조하는지 확인
- `assertTrue(a)`: 조건이 참인지 확인
- `assertNotNull(a)`: 객체가 null이 아닌지 확인

Spring-Test에서는 다음 어노테이션을 활용할 수 있다.

`@ExtendWith(SpringExtension.class)`는 JUnit5와 Spring 테스트 기능을 연결한다.

`@ContextConfiguration`은 테스트에서 사용할 Spring 설정 파일의 위치를 지정한다.

`@Autowired`는 Spring이 관리하는 Bean을 필요한 위치에 자동으로 주입하도록 요청한다.

---

## 오늘 직접 작성한 코드

**학습용 재구성 예제:** 실제 GitHub 실습 코드 확인 전까지는 교재 40~48페이지의 `Hello`와 `Printer` 구조를 복습하기 위한 예제로 기록한다.

### 1. Printer.java

```java
package myspring.di.xml;

public interface Printer {
    void print(String message);
}
```

출력 기능을 정의한 인터페이스이다.

### 2. ConsolePrinter.java

```java
package myspring.di.xml;

public class ConsolePrinter implements Printer {

    @Override
    public void print(String message) {
        System.out.println(message);
    }
}
```

전달받은 문자열을 콘솔에 출력한다.

### 3. StringPrinter.java

```java
package myspring.di.xml;

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

콘솔에 직접 출력하는 대신 문자열을 저장한다.

`ConsolePrinter`와 `StringPrinter`는 모두 `Printer` 인터페이스를 구현하지만 출력 방식은 다르다.

### 4. Hello.java

```java
package myspring.di.xml;

public class Hello {

    private String name;
    private Printer printer;

    public Hello() {
    }

    public Hello(String name, Printer printer) {
        this.name = name;
        this.printer = printer;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrinter(Printer printer) {
        this.printer = printer;
    }

    public String sayHello() {
        return "Hello " + name;
    }

    public void print() {
        printer.print(sayHello());
    }
}
```

`Hello` 클래스는 실제 출력 방식이 무엇인지 알 필요가 없다.

`Printer` 인터페이스만 사용하며, 어떤 구현 객체가 연결될지는 외부에서 결정한다.

### 5. beans.xml — Setter Injection

`src/main/resources/beans.xml`에 위치시킨다고 가정한다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="printer"
          class="myspring.di.xml.ConsolePrinter"/>

    <bean id="hello"
          class="myspring.di.xml.Hello">

        <property name="name" value="Spring"/>
        <property name="printer" ref="printer"/>

    </bean>

</beans>
```

이 설정에서는 `Hello`에 `ConsolePrinter` 객체가 주입된다.

다른 구현 객체로 변경하려면 `printer` Bean의 클래스 설정을 `StringPrinter`로 변경할 수 있다.

### 6. Constructor Injection으로 변경하기

위 `hello` Bean 설정을 다음과 같이 바꿀 수 있다.

```xml
<bean id="hello" class="myspring.di.xml.Hello">
    <constructor-arg index="0" value="Spring"/>
    <constructor-arg index="1" ref="printer"/>
</bean>
```

`index="0"`은 첫 번째 생성자 매개변수인 `name`, `index="1"`은 두 번째 매개변수인 `printer`에 해당한다.

### 7. 실행 코드 예제

```java
package myspring.di.xml;

import org.springframework.context.support.GenericXmlApplicationContext;

public class Main {

    public static void main(String[] args) {

        try (GenericXmlApplicationContext context =
                new GenericXmlApplicationContext(
                    "classpath:beans.xml")) {

            Hello hello = context.getBean(
                "hello", Hello.class
            );

            hello.print();
        }
    }
}
```

`ConsolePrinter`를 주입했다면 예상 실행 결과는 다음과 같다.

```text
Hello Spring
```

이 과정에서 `Main`은 XML 설정을 읽은 Spring Container로부터 `Hello` Bean을 가져온다.

### 8. JUnit5 DI 테스트 예제

```java
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import myspring.di.xml.Hello;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(locations = "classpath:beans.xml")
public class HelloTest {

    @Autowired
    private Hello hello;

    @Test
    void helloDITest() {
        assertNotNull(hello);
        assertEquals("Hello Spring", hello.sayHello());
    }
}
```

이 테스트는 Spring Container에서 `Hello` 객체가 주입되는지, 그리고 `sayHello()`의 결과가 예상한 문자열과 일치하는지 검증한다.

실제 실행 여부는 아직 확인하지 않았으므로 테스트 결과는 기록하지 않는다.

---

## 어려웠던 점 & 해결 과정

### 문제

DI가 의존성 주입이라는 뜻은 이해했지만, 객체를 직접 생성하는 것과 Spring Container가 주입하는 것의 차이를 명확하게 구분할 필요가 있었다.

특히 `new`, `Bean`, `ref`, `@Autowired`가 각각 어느 단계에서 사용되는지 더 자세히 이해해야 한다고 느꼈다.

### 시도

DI를 사용하지 않는 Java 코드와 DI를 적용한 코드를 비교하고, `Hello`와 `Printer`의 의존관계를 분석했다.

### 해결 및 이해한 부분

`Hello`가 직접 `ConsolePrinter`를 생성하면 구현 클래스에 의존한다.

반면 `Printer` 인터페이스를 사용하면서 외부에서 구현 객체를 주입받으면, `Hello` 자체를 변경하지 않고도 다른 구현 객체를 사용할 수 있다.

Spring은 XML 등의 설정을 기반으로 이 의존관계를 구성해 준다.

### 교훈

**DI에서 가장 중요한 것은 객체를 어디에서 생성하는지가 아니라, 객체의 생성과 연결에 관한 책임이 어디에 있는지를 구분하는 것이다.**

---

## 내일 계획 & 아직 모르는 것

### 내일 이어서 학습할 내용

1. Setter Injection과 Constructor Injection을 직접 구현하기
2. XML에서 `ConsolePrinter`를 `StringPrinter`로 교체해보기
3. `ApplicationContext`를 이용한 Bean 조회 실습
4. JUnit5에서 `@Autowired`를 이용한 DI 테스트 작성

### 아직 명확하게 이해해야 할 부분

- IoC와 DI의 차이를 코드만 보고 설명할 수 있는가?
- `new`로 객체를 생성하는 것과 Spring이 Bean을 관리하는 것은 어떻게 다른가?
- XML의 `ref`는 어떤 방식으로 Bean을 연결하는가?
- 생성자 주입과 Setter 주입을 언제 구분해서 사용하는가?
- `@Autowired`는 어떤 기준으로 Bean을 찾아 주입하는가?

### 오늘의 핵심 요약

**IoC는 객체 관리의 제어권을 외부로 넘기는 것이고, DI는 객체가 필요로 하는 의존성을 외부에서 주입받는 것이다. Spring은 Container를 통해 이를 관리하며, 객체 간의 결합도를 낮추고 변경과 테스트에 유리한 구조를 만들 수 있다.**