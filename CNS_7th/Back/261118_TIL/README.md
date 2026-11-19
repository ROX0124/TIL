# [Backend Day 3] LG CNS AM Inspire Camp 7기 TIL

**작성일:** 2026.11.18 (수)  
**과목:** Java / Spring Framework

---

## 1. 오늘 학습한 주제

### Java
- Inheritance(상속)의 개념과 필요성
- `extends`를 이용한 클래스 상속
- 접근 제한자와 상속 관계
- Method Overriding과 Overloading
- `super` 키워드
- Polymorphism(다형성)
- Virtual Method Invocation
- `instanceof`와 Type Casting

### Spring Framework
- 프레임워크의 개념과 필요성
- 디자인 패턴과 프레임워크의 관계
- IoC(Inversion of Control, 제어의 역전)
- Spring Container와 Bean
- 클래스 라이브러리
- 라이브러리와 프레임워크의 차이

---

## 2. 오늘 배운 것 — 나만의 언어로 설명

# Part 1. Java

### 2-1. Inheritance(상속)란?

**상속은 쉽게 말하면 기존 클래스의 기능을 새로운 클래스에서 물려받아 재사용하는 것이다.**

예를 들어 회사에서 일반 직원과 관리자의 정보를 관리한다고 생각해 보자.

일반 직원과 관리자는 이름과 급여라는 공통적인 정보를 가지고 있다.

각각의 클래스에 동일한 코드를 작성한다면 중복이 발생한다.

이때 상속을 사용하면 공통 기능은 부모 클래스에 작성하고, 자식 클래스에서는 추가적인 기능만 구현하면 된다.

#### 상속을 사용하는 이유
- 코드의 중복을 줄일 수 있다.
- 기존 코드를 재사용할 수 있다.
- 공통 기능을 하나의 부모 클래스에서 관리할 수 있다.
- 유지보수가 편리해진다.

#### 상속의 기본 문법

```java
class 자식클래스 extends 부모클래스 {
    // 추가 기능
}
```

예제:

```java
class Employee {
    String name;
    double salary;

    void work() {
        System.out.println("직원이 일합니다.");
    }
}

class Manager extends Employee {
    String department;
}
```

`Manager`는 `Employee`를 상속받았기 때문에 부모 클래스에 있는 `name`, `salary`, `work()`를 사용할 수 있다.

```java
Manager manager = new Manager();

manager.name = "홍길동";
manager.salary = 5000;

manager.work();
```

실행 결과:

```text
직원이 일합니다.
```

**핵심:** 자식 클래스는 부모 클래스의 접근 가능한 기능을 재사용하고 자신만의 기능을 추가할 수 있다.

Java는 클래스의 단일 상속만 지원하므로 하나의 클래스는 직접적으로 하나의 부모 클래스만 상속할 수 있다.

### 2-2. 접근 제한자와 상속

상속을 받았다고 부모 클래스의 모든 멤버에 직접 접근할 수 있는 것은 아니다.

| 접근 제한자 | 접근 범위 |
|---|---|
| `private` | 해당 클래스 내부 |
| `default` | 동일 패키지 |
| `protected` | 동일 패키지 및 다른 패키지의 자식 클래스 |
| `public` | 어디서든 접근 가능 |

예를 들어 부모 클래스에서 `private`으로 선언한 변수는 자식 클래스에서 직접 접근할 수 없다.

```java
class Employee {
    private String name = "홍길동";

    public String getName() {
        return name;
    }
}

class Manager extends Employee {
    void printName() {
        System.out.println(getName());
    }
}
```

`Manager`는 `getName()`을 통해 부모 클래스의 이름을 가져올 수 있다.

즉, **상속받는 것과 해당 멤버에 직접 접근할 수 있는 것은 서로 다른 개념이다.**

### 2-3. Method Overriding(메서드 재정의)

**오버라이딩은 부모 클래스에서 물려받은 메서드를 자식 클래스에 맞게 다시 작성하는 것이다.**

부모 클래스의 기능을 그대로 사용하지 않고 자식 클래스에서 다른 동작을 수행하고 싶을 때 사용한다.

```java
class Employee {
    void work() {
        System.out.println("직원이 일합니다.");
    }
}

class Manager extends Employee {
    @Override
    void work() {
        System.out.println("관리자가 업무를 관리합니다.");
    }
}
```

실행 코드:

```java
Employee employee = new Employee();
Manager manager = new Manager();

employee.work();
manager.work();
```

실행 결과:

```text
직원이 일합니다.
관리자가 업무를 관리합니다.
```

`@Override`는 부모 클래스의 메서드를 재정의한다는 것을 표시하는 어노테이션이다.

오버라이딩하려면 메서드 이름과 매개변수가 일치해야 하며, 접근 범위를 부모 메서드보다 좁게 변경할 수 없다.

### 2-4. Overriding과 Overloading의 차이

| 구분 | Overriding | Overloading |
|---|---|---|
| 의미 | 기존 메서드 재정의 | 같은 이름의 메서드 다중 정의 |
| 메서드 이름 | 동일 | 동일 |
| 매개변수 | 동일 | 개수 또는 타입이 다름 |
| 목적 | 기존 동작 변경 | 다양한 입력 처리 |
| 예시 | `work()` 재정의 | `println()` |

Overloading 예제:

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}
```

`add()`라는 이름은 같지만 매개변수의 타입이 다르기 때문에 Overloading이 성립한다.

**핵심:** Overriding은 메서드의 동작을 변경하는 것이고, Overloading은 하나의 이름으로 다양한 매개변수를 처리하는 것이다.

### 2-5. super 키워드

**`super`는 자식 클래스에서 부모 클래스의 멤버나 생성자를 참조할 때 사용하는 키워드이다.**

| 코드 | 의미 |
|---|---|
| `super.name` | 부모 멤버변수 참조 |
| `super.work()` | 부모 메서드 호출 |
| `super()` | 부모 생성자 호출 |

예제:

```java
class Employee {
    String name;

    Employee(String name) {
        this.name = name;
    }

    String getDetails() {
        return "이름: " + name;
    }
}

class Manager extends Employee {
    String department;

    Manager(String name, String department) {
        super(name);
        this.department = department;
    }

    @Override
    String getDetails() {
        return super.getDetails()
                + ", 부서: " + department;
    }
}
```

여기서 `super(name)`은 부모 클래스의 생성자를 호출한다.

`super.getDetails()`는 부모 클래스의 메서드를 호출한다.

생성자를 호출하는 `super()` 또는 `this()`는 생성자의 첫 번째 문장에 작성해야 하며, 하나의 생성자에서 두 호출을 동시에 사용할 수 없다.

또한 생성자는 자식 클래스에 상속되지 않는다.

### 2-6. Polymorphism(다형성)이란?

**다형성은 하나의 부모 타입으로 여러 종류의 자식 객체를 다룰 수 있는 성질이다.**

예를 들어 `Employee`를 상속받는 `Manager`와 `Engineer`가 있다고 가정하자.

```text
          Employee
             |
      ----------------
      |              |
   Manager        Engineer
```

이때 다음과 같은 코드가 가능하다.

```java
Employee employee1 = new Manager();
Employee employee2 = new Engineer();
```

부모 타입의 참조 변수로 자식 객체를 가리킬 수 있기 때문이다.

반대로 다음 코드는 불가능하다.

```java
Manager manager = new Employee(); // 컴파일 오류
```

부모 클래스의 객체가 자식 클래스의 모든 기능을 가지고 있다고 보장할 수 없기 때문이다.

#### 다형성을 사용하는 이유
- 서로 다른 객체를 하나의 부모 타입으로 관리할 수 있다.
- 공통 타입을 이용해 메서드의 매개변수를 정의할 수 있다.
- 새로운 자식 클래스가 추가되어도 공통 처리 코드를 재사용하기 쉽다.

### 2-7. Virtual Method Invocation

다형성에서 중요한 부분은 **참조 변수의 선언 타입과 실제 생성된 객체의 타입이 다를 수 있다는 점**이다.

```java
Employee employee = new Manager();

employee.getDetails();
```

여기서 변수 타입은 `Employee`이지만 실제 생성된 객체는 `Manager`이다.

Java는 다음과 같이 동작한다.

1. 컴파일 시점에는 `Employee` 타입을 기준으로 메서드 호출 가능 여부를 확인한다.
2. 실행 시점에는 실제 생성된 객체를 확인한다.
3. `Manager`에서 오버라이딩한 메서드가 있다면 해당 메서드를 실행한다.

따라서 `Manager`에서 `getDetails()`를 오버라이딩했다면 실제로는 `Manager`의 메서드가 호출된다.

**핵심:** 컴파일 시에는 참조 변수의 선언 타입을 확인하고, 오버라이딩된 메서드는 실행 시 실제 객체 타입을 기준으로 호출한다.

### 2-8. instanceof와 Type Casting

부모 타입으로 선언된 참조 변수가 실제로 어떤 객체를 참조하는지 확인하기 위해 `instanceof`를 사용한다.

```java
Employee employee = new Manager();

if (employee instanceof Manager) {
    System.out.println("관리자 객체입니다.");
}
```

실행 결과:

```text
관리자 객체입니다.
```

#### Upcasting(업캐스팅)

자식 객체를 부모 타입의 참조 변수에 대입하는 것이다.

```java
Employee employee = new Manager();
```

명시적인 형변환 없이 사용 가능하다.

#### Downcasting(다운캐스팅)

부모 타입의 참조 변수를 자식 타입으로 변환하는 것이다.

```java
Employee employee = new Manager();

Manager manager = (Manager) employee;
```

실제 객체가 `Manager`이므로 변환할 수 있다.

하지만 다음 코드는 문제가 발생한다.

```java
Employee employee = new Employee();

Manager manager = (Manager) employee;
```

컴파일은 가능하지만 실행 중 `ClassCastException`이 발생한다.

따라서 다운캐스팅하기 전에 `instanceof`로 실제 객체 타입을 확인하는 것이 중요하다.

---

# Part 2. Spring Framework

*학습 범위: 스프링프레임워크입문과활용.pdf 1~14페이지*

### 2-9. Framework(프레임워크)란?

**프레임워크는 쉽게 말하면 프로그램을 개발할 때 필요한 공통 구조와 기능을 미리 제공하는 개발 기반이다.**

프로그램을 개발할 때 성능, 보안, 확장성, 안정성과 같은 요구사항을 매번 처음부터 구현한다면 많은 시간과 노력이 필요하다.

프레임워크는 공통적으로 필요한 구조와 기능을 제공하여 이러한 문제를 줄여 준다.

#### 프레임워크를 사용하는 이유
- 반복적인 개발 작업을 줄일 수 있다.
- 공통적인 시스템 구조를 재사용할 수 있다.
- 비기능적 요구사항을 처리하는 부담을 줄여 준다.
- 개발자가 핵심 비즈니스 로직에 집중할 수 있다.

예를 들어 로그인 기능이 필요한 웹 애플리케이션을 개발한다고 생각해 보자.

로그인 처리 외에도 보안, 데이터 처리, 예외 처리 등 다양한 기능이 필요하다.

프레임워크를 활용하면 이러한 공통 기능을 지원받으면서 실제 서비스 기능 개발에 집중할 수 있다.

### 2-10. Design Pattern과 Framework

**디자인 패턴은 반복적으로 발생하는 설계 문제를 해결하기 위한 방법이고, 프레임워크는 실제 개발에 사용할 수 있는 구조와 코드를 제공하는 것이다.**

| 구분 | Design Pattern | Framework |
|---|---|---|
| 의미 | 문제 해결을 위한 설계 방법 | 개발에 필요한 구조와 기능 |
| 구현 코드 | 구체적 구현을 직접 제공하지 않음 | 기반 클래스와 라이브러리 제공 |
| 목적 | 설계 문제 해결 | 개발 생산성 및 재사용성 향상 |

예를 들어 디자인 패턴이 건물을 짓기 위한 설계 방법이라면 프레임워크는 그 설계 방법이 반영된 기본 구조물과 도구에 가깝다.

디자인 패턴은 프레임워크를 구성하는 중요한 요소이지만 둘은 동일한 개념이 아니다.

### 2-11. IoC(Inversion of Control, 제어의 역전)

**IoC는 쉽게 말하면 개발자가 직접 관리하던 객체의 생성과 생명주기에 대한 제어 권한을 컨테이너에 넘기는 것이다.**

일반적인 Java 프로그램에서는 개발자가 직접 객체를 생성하고 사용한다.

```java
Employee employee = new Employee();
```

이 코드에서는 개발자가 `new`를 이용해 직접 객체를 생성한다.

하지만 IoC를 적용하면 객체의 생성, 설정, 관리 등을 컨테이너가 담당할 수 있다.

#### IoC를 사용하는 이유
- 객체 생성과 관리에 대한 부담을 줄일 수 있다.
- 개발자가 핵심 기능 개발에 집중할 수 있다.
- 객체 사이의 관계를 외부에서 관리할 수 있다.

**핵심:** 프로그램의 제어를 개발자 코드에서 프레임워크의 컨테이너로 넘기는 것이 IoC이다.

### 2-12. Spring Container와 Bean

Spring Framework에서는 Spring Container가 객체를 관리한다.

이때 Spring Container가 관리하는 객체를 **Bean**이라고 부른다.

Spring Container는 설정 정보를 바탕으로 Bean을 생성하고 관리할 수 있다.

12페이지의 그림에서는 다음과 같은 구조를 보여준다.

```text
Configuration Metadata
          |
          v
   Spring Container
          ^
          |
  Business Objects
        (POJO)
          |
          v
 Fully Configured System
      Ready for Use
```

이 그림을 통해 Spring Container가 설정 정보와 Java 객체를 이용해 애플리케이션에 필요한 객체 구성을 완성한다는 것을 이해할 수 있다.

또한 Spring은 Dependency Injection(DI, 의존성 주입)을 통해 IoC를 지원한다.

DI는 필요한 객체 사이의 의존관계를 외부에서 연결해 주는 방법이다.

### 2-13. Class Library(클래스 라이브러리)

**클래스 라이브러리는 쉽게 말하면 개발할 때 사용할 수 있도록 미리 구현해 놓은 클래스와 기능의 모음이다.**

프레임워크는 특정 부분의 기술적인 구현을 라이브러리 형태로 제공한다.

이를 통해 개발자는 모든 기능을 처음부터 만들지 않아도 된다.

교재에서는 프레임워크를 `Semi Complete(반제품)`의 성격을 가진 것으로 설명한다.

즉, 프레임워크가 기본 구조와 공통 기능을 제공하고, 개발자는 필요한 비즈니스 기능을 추가하여 애플리케이션을 완성한다.

### 2-14. Library와 Framework의 차이

라이브러리와 프레임워크의 가장 큰 차이점은 **프로그램의 실행 흐름을 누가 제어하는가**이다.

| 구분 | Library | Framework |
|---|---|---|
| 실행 흐름 제어 | 개발자의 코드 | 프레임워크 |
| 함수 및 메서드 호출 | 개발자가 라이브러리를 호출 | 프레임워크가 개발자 코드를 호출 |
| 특징 | 필요한 기능을 선택해서 사용 | 정해진 구조와 실행 흐름을 활용 |

#### Library

```text
개발자 코드
    |
    v
라이브러리 호출
    |
    v
기능 실행
```

#### Framework

```text
프레임워크
    |
    v
개발자 코드 호출
    |
    v
기능 실행
```

**핵심:** 라이브러리는 개발자가 호출하여 사용하는 것이고, 프레임워크는 개발자가 작성한 코드를 프레임워크가 호출하며 실행 흐름을 제어한다.

---

## 3. 오늘 직접 작성한 코드

다음은 Java 상속과 다형성 개념을 함께 확인할 수 있는 복습용 예제이다.

파일명: `InheritancePolymorphismPractice.java`

```java
class Employee {
    private String name;
    private double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public double getSalary() {
        return salary;
    }

    public String getDetails() {
        return "이름: " + name + ", 급여: " + salary;
    }
}

class Manager extends Employee {
    private String department;

    public Manager(String name, double salary,
                   String department) {
        super(name, salary);
        this.department = department;
    }

    @Override
    public String getDetails() {
        return super.getDetails()
                + ", 부서: " + department;
    }

    public void approve() {
        System.out.println("관리자 승인");
    }
}

class Engineer extends Employee {

    public Engineer(String name, double salary) {
        super(name, salary);
    }

    @Override
    public String getDetails() {
        return super.getDetails()
                + ", 직군: Engineer";
    }
}

public class InheritancePolymorphismPractice {

    public static double getTax(Employee employee) {
        if (employee instanceof Manager) {
            return employee.getSalary() * 0.30;
        } else if (employee instanceof Engineer) {
            return employee.getSalary() * 0.20;
        }

        return employee.getSalary() * 0.10;
    }

    public static void main(String[] args) {

        Employee[] staff = {
            new Employee("일반 사원", 3000),
            new Manager("관리자", 5000, "개발팀"),
            new Engineer("개발자", 4000)
        };

        for (Employee employee : staff) {

            System.out.println(employee.getDetails());
            System.out.println("세금: " + getTax(employee));

            if (employee instanceof Manager) {
                Manager manager = (Manager) employee;
                manager.approve();
            }
        }
    }
}
```

### 예상 실행 결과

```text
이름: 일반 사원, 급여: 3000.0
세금: 300.0
이름: 관리자, 급여: 5000.0, 부서: 개발팀
세금: 1500.0
관리자 승인
이름: 개발자, 급여: 4000.0, 직군: Engineer
세금: 800.0
```

### 코드에서 확인할 개념

- `extends`: 부모 클래스 상속
- `super()`: 부모 생성자 호출
- `@Override`: 부모 메서드 재정의
- `Employee[]`: 다형성을 활용해 서로 다른 자식 객체 저장
- `instanceof`: 실제 객체 타입 확인
- `(Manager) employee`: 다운캐스팅

*위 코드는 복습용으로 구성한 예제이며, 실제 타이핑 및 실행 결과 확인은 별도로 필요하다.*

---

## 4. 어려웠던 점 & 해결 과정

### 4-1. 상속과 다형성의 차이

- **문제:** 상속과 다형성이 서로 비슷하게 느껴질 수 있다.
- **확인:** `extends`와 `Employee employee = new Manager()`를 비교한다.
- **정리:** 상속은 클래스 사이의 관계를 정의하는 것이고, 다형성은 그 관계를 활용해 여러 객체를 하나의 부모 타입으로 다루는 것이다.

### 4-2. 부모 타입과 실제 객체 타입

- **문제:** 부모 타입으로 선언했을 때 어떤 클래스의 메서드가 실행되는지 혼동할 수 있다.
- **확인:** 오버라이딩된 메서드를 호출하는 코드를 비교한다.
- **정리:** 컴파일 시에는 참조 변수의 선언 타입을 확인하고, 실행 시에는 실제 객체의 오버라이딩된 메서드가 호출된다.

### 4-3. IoC의 개념

- **문제:** 제어의 역전이라는 표현만으로는 실제 의미를 이해하기 어려울 수 있다.
- **확인:** 객체를 직접 생성하는 방식과 Spring Container가 관리하는 방식을 비교한다.
- **정리:** IoC는 객체의 생성과 생명주기 관리 등의 제어 권한을 컨테이너에 맡기는 개념이다.

### 4-4. Library와 Framework의 차이

- **문제:** 둘 다 개발에 필요한 기능을 제공하므로 구분하기 어려울 수 있다.
- **확인:** 실행 흐름을 누가 제어하는지 비교한다.
- **정리:** 라이브러리는 개발자 코드가 호출하지만 프레임워크는 개발자 코드를 호출하며 실행 흐름을 관리한다.

---

## 5. 내일 계획 & 아직 모르는 것

### Java 복습
- [ ] `extends`를 사용한 상속 코드 직접 작성하기
- [ ] `super()`와 `this()`의 차이 복습하기
- [ ] Overriding과 Overloading 구분하기
- [ ] 다형성을 이용한 객체 배열 실습하기
- [ ] `instanceof`와 다운캐스팅 실습하기

### Spring Framework 복습
- [ ] Framework와 Library의 차이를 설명할 수 있는지 확인하기
- [ ] IoC가 필요한 이유 복습하기
- [ ] Spring Container와 Bean의 관계 이해하기
- [ ] DI(Dependency Injection) 개념 학습하기

---

## 6. 오늘의 핵심 요약

| 개념 | 핵심 내용 |
|---|---|
| Inheritance | 기존 클래스의 기능을 상속받아 재사용 |
| Overriding | 상속받은 메서드를 자식 클래스에서 재정의 |
| Overloading | 같은 이름으로 다른 매개변수의 메서드를 정의 |
| Polymorphism | 하나의 부모 타입으로 다양한 자식 객체를 관리 |
| `super` | 부모 클래스의 멤버 또는 생성자 참조 |
| `instanceof` | 객체가 특정 타입에 해당하는지 확인 |
| Framework | 공통 구조와 기능을 제공하는 개발 기반 |
| Design Pattern | 반복적인 설계 문제를 해결하기 위한 방법 |
| IoC | 객체 관리의 제어 권한을 컨테이너에 넘기는 것 |
| Spring Container | Spring의 객체를 생성하고 관리하는 컨테이너 |
| Bean | Spring Container가 관리하는 객체 |
| Library | 개발자가 직접 호출하여 사용하는 기능의 모음 |

### 최종 정리

Java의 상속은 기존 코드를 재사용할 수 있도록 도와주고, 다형성은 하나의 부모 타입으로 여러 종류의 자식 객체를 다룰 수 있게 한다.

Spring Framework는 이러한 Java 객체지향 개념을 기반으로 애플리케이션 개발에 필요한 구조와 기능을 제공한다.

특히 IoC를 통해 객체의 생성과 관리에 대한 제어를 컨테이너에 맡김으로써 개발자가 핵심 비즈니스 로직에 집중할 수 있도록 지원한다.

**오늘의 핵심은 Java의 상속과 다형성을 이해하고, Spring Framework에서 객체의 제어와 관리가 어떻게 이루어지는지 학습하는 것이다.**

---

## 7. 참고 자료

**Java과정(jdbc포함).pdf**
- 120~135페이지: Inheritance, Overriding, super
- 136~149페이지: Polymorphism, Virtual Method Invocation, instanceof, Casting

**스프링프레임워크입문과활용.pdf**
- 1~7페이지: 과정 소개 및 학습 목차
- 8~10페이지: Framework의 개념과 Design Pattern
- 11~12페이지: IoC와 Spring Container
- 13~14페이지: Class Library 및 Framework와 Library의 차이

