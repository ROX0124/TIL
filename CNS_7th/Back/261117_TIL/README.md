# [Backend Day 2] LG CNS AM Inspire Camp 7기 TIL

**작성일:** 2026.11.17 (화)  
**과목:** Java 프로그래밍

## 오늘 학습한 주제

**Java — Array, Method Overriding, Exception Handling**

1. **Array(배열):** 여러 데이터를 하나의 변수로 관리하는 방법
2. **Method Overriding(메서드 재정의):** 상속받은 메서드를 자식 클래스에 맞게 재정의하는 방법
3. **Exception(예외 처리):** 프로그램 실행 중 발생하는 예외를 처리하는 방법

---

## 오늘 배운 것 — 나만의 언어로 설명

### 1. Array(배열)

**배열은 쉽게 말하면 같은 종류의 데이터를 하나의 이름으로 묶어 관리하는 자료구조이다.**

예를 들어 학생 3명의 점수를 저장한다고 가정해 보자.

배열이 없다면 각각 변수를 선언해야 한다.

```java
int score1 = 80;
int score2 = 90;
int score3 = 100;
```

배열을 사용하면 다음과 같이 작성할 수 있다.

```java
int[] scores = {80, 90, 100};
```

이렇게 하면 여러 값을 하나의 배열로 관리하고, 반복문을 이용해 순서대로 처리할 수 있다.

#### 1-1. 배열의 선언, 생성, 초기화

배열은 선언 → 생성 → 초기화 과정을 거친다.

```java
// 1. 배열 선언
int[] numbers;

// 2. 배열 생성
numbers = new int[3];

// 3. 배열 요소에 값 할당
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
```

- **선언:** 어떤 자료형의 배열을 사용할지 정한다.
- **생성:** `new`를 사용하여 배열 객체를 생성한다.
- **초기화:** 배열에 처음 사용할 값을 할당한다.

Java에서 배열은 객체이며, 배열 변수는 그 객체를 참조한다.

#### 1-2. 배열의 인덱스와 크기

배열에서 각 데이터의 위치를 인덱스(Index)라고 한다.

```java
int[] numbers = {10, 20, 30};

System.out.println(numbers[0]); // 10
System.out.println(numbers[1]); // 20
System.out.println(numbers[2]); // 30

System.out.println(numbers.length); // 3
```

**주의할 점**

- 인덱스는 0부터 시작한다.
- 배열의 길이는 `배열이름.length`로 확인한다.
- 길이가 3인 배열에서 사용할 수 있는 인덱스는 0~2이다.
- `numbers[3]`에 접근하면 `ArrayIndexOutOfBoundsException`이 발생한다.

#### 1-3. Primitive Type Array와 Reference Type Array

배열은 저장하는 데이터의 종류에 따라 구분할 수 있다.

**Primitive Type Array(기본형 배열)**

```java
int[] numbers = new int[3];
```

- `int`, `double`, `char` 등 기본 자료형의 값을 저장한다.
- `new int[3]`으로 생성하면 모든 요소는 기본값인 0으로 초기화된다.

**Reference Type Array(참조형 배열)**

```java
String[] names = new String[3];

names[0] = "Java";
names[1] = "Spring";
```

- `String`, 사용자 정의 클래스 등 객체를 참조하는 값을 저장한다.
- 배열만 생성했을 때 각 요소의 기본값은 `null`이다.
- 사용자 정의 클래스 배열도 배열 생성과 각 객체 생성은 별도로 이루어진다.

**핵심 차이:** 기본형 배열은 요소에 실제 값을 저장하고, 참조형 배열은 요소에 객체를 가리키는 참조값을 저장한다.

#### 1-4. System.arraycopy()

이미 생성한 배열의 내용을 다른 배열로 복사하는 메서드이다.

```java
int[] source = {1, 2, 3};
int[] destination = new int[5];

System.arraycopy(source, 0, destination, 0, 3);
```

메서드 형식:

`System.arraycopy(원본배열, 원본시작위치, 대상배열, 대상시작위치, 복사개수);`

실행 후 `destination`의 값은 다음과 같다.

```text
[1, 2, 3, 0, 0]
```

**기억할 점**

- Java 배열은 생성된 후 크기를 변경할 수 없다.
- 더 큰 배열이 필요하면 새로운 배열을 생성해야 한다.
- 기본형 배열의 요소는 값이 복사된다.
- 참조형 배열의 요소는 참조값이 복사되며, 객체 자체가 복제되는 것은 아니다.

### 2. Method Overriding(메서드 오버라이딩)

**오버라이딩은 쉽게 말하면 부모 클래스에서 물려받은 메서드를 자식 클래스에 맞게 다시 만드는 것이다.**

예를 들어 모든 직원은 자신의 정보를 출력하는 기능이 있지만, 관리자는 부서 정보까지 출력해야 할 수 있다.

이런 상황에서 상속과 오버라이딩을 사용한다.

#### 2-1. 오버라이딩의 작동 원리

```java
class Employee {
    public String getDetails() {
        return "일반 직원";
    }
}

class Manager extends Employee {
    @Override
    public String getDetails() {
        return "관리자";
    }
}
```

- `extends`: 부모 클래스를 상속받는다.
- `@Override`: 부모 클래스의 메서드를 올바르게 재정의했는지 컴파일러가 확인한다.
- 자식 클래스는 부모 메서드의 동작을 변경할 수 있다.

#### 2-2. 오버라이딩 규칙

1. 부모 메서드와 이름이 같아야 한다.
2. 매개변수의 개수와 자료형이 같아야 한다.
3. 반환 타입은 같거나 허용되는 하위 타입이어야 한다.
4. 접근 제한자는 부모 메서드보다 좁아질 수 없다.
5. Checked Exception은 부모 메서드보다 더 넓은 범위로 선언할 수 없다.

예를 들어 부모 메서드가 `public`이라면 자식 메서드를 `private`으로 변경할 수 없다.

#### 2-3. super 키워드

`super`는 부모 클래스의 멤버에 접근할 때 사용한다.

```java
@Override
public String getDetails() {
    return super.getDetails() + " / 관리자";
}
```

`super.getDetails()`는 부모 클래스에 정의된 `getDetails()`를 호출한다.

따라서 부모 기능을 유지하면서 자식 클래스의 기능을 추가할 수 있다.

#### 2-4. Overriding과 Overloading의 차이

| 구분 | Overriding | Overloading |
|---|---|---|
| 의미 | 메서드 재정의 | 메서드 다중 정의 |
| 상속 | 부모-자식 관계에서 사용 | 상속 없이도 가능 |
| 메서드 이름 | 동일 | 동일 |
| 매개변수 | 동일 | 개수 또는 타입이 다름 |
| 목적 | 기존 동작 변경 | 다양한 입력 처리 |

**핵심:** 오버라이딩은 같은 메서드의 동작을 바꾸는 것이고, 오버로딩은 같은 이름의 메서드를 여러 형태로 만드는 것이다.

### 3. Exception(예외 처리)

**예외 처리는 쉽게 말하면 프로그램 실행 중 예상되는 문제에 대응하여 프로그램이 비정상적으로 종료되지 않도록 관리하는 것이다.**

예를 들어 존재하지 않는 파일을 읽거나 배열 범위를 벗어난 위치에 접근하면 예외가 발생할 수 있다.

#### 3-1. Error와 Exception

| 구분 | Error | Exception |
|---|---|---|
| 의미 | 심각한 실행 환경 문제 | 실행 중 발생하는 예외 상황 |
| 예시 | OutOfMemoryError | IOException |
| 처리 | 일반적인 복구가 어려움 | 상황에 따라 처리 가능 |

Java의 예외는 크게 Checked Exception과 Unchecked Exception으로 구분된다.

**Checked Exception**

- 컴파일러가 예외 처리 여부를 확인한다.
- 예: `IOException`, `FileNotFoundException`
- `try-catch`로 처리하거나 `throws`로 호출한 쪽에 전달해야 한다.

**Unchecked Exception**

- 컴파일러가 예외 처리를 강제하지 않는다.
- 주로 `RuntimeException`의 하위 클래스가 해당한다.
- 예: `NullPointerException`, `ArithmeticException`, `ArrayIndexOutOfBoundsException`
- 예외를 잡는 것보다 잘못된 코드나 입력 조건을 수정하는 것이 더 적절할 때가 많다.

#### 3-2. try-catch-finally

```java
try {
    // 예외가 발생할 수 있는 코드
} catch (Exception e) {
    // 예외 발생 시 처리할 코드
} finally {
    // 예외 발생 여부와 관계없이 실행할 코드
}
```

각 키워드의 역할:

- `try`: 예외가 발생할 수 있는 코드를 실행한다.
- `catch`: 발생한 예외를 받아 처리한다.
- `finally`: 일반적으로 예외 발생 여부와 관계없이 마무리 작업을 수행한다.

예외가 발생하면 `try` 블록의 남은 코드는 건너뛰고, 일치하는 `catch` 블록으로 이동한다.

#### 3-3. throw와 throws의 차이

**throw**

예외 객체를 직접 발생시킬 때 사용한다.

```java
throw new IllegalArgumentException("잘못된 값");
```

**throws**

메서드에서 발생할 수 있는 예외의 처리를 호출한 메서드로 위임할 때 사용한다.

```java
public void readFile() throws IOException {
    // 파일 읽기 작업
}
```

| 구분 | throw | throws |
|---|---|---|
| 역할 | 예외 직접 발생 | 예외 처리 책임 전달 |
| 위치 | 메서드 내부 | 메서드 선언부 |
| 사용 방식 | `throw new 예외객체` | `throws 예외클래스` |

#### 3-4. 오버라이딩과 예외 처리의 관계

부모 클래스의 메서드를 오버라이딩할 때는 Checked Exception 선언에 제한이 있다.

```java
// 부모 메서드
public void read() throws IOException {
}

// 자식 메서드 (가능)
@Override
public void read() throws FileNotFoundException {
}
```

`FileNotFoundException`은 `IOException`의 하위 클래스이므로 허용된다.

반면 부모가 `IOException`을 선언했는데 자식이 더 넓은 `Exception`을 선언하면 컴파일 오류가 발생한다.

---

## 오늘 직접 작성한 코드

아래 코드는 학습한 개념을 확인하기 위해 PDF 내용을 바탕으로 재구성한 **복습용 예제**이다. 실제 직접 타이핑 및 실행 여부는 아직 확인하지 않았다.

### 실습 1. 배열 생성과 복사

**파일명:** `ArrayPractice.java`

```java
import java.util.Arrays;

public class ArrayPractice {
    public static void main(String[] args) {

        int[] scores = {80, 90, 100};

        System.out.println(scores[0]);
        System.out.println(scores.length);

        int[] copied = new int[5];

        System.arraycopy(
            scores, 0, copied, 0, scores.length
        );

        System.out.println(Arrays.toString(copied));

        String[] names = new String[2];
        names[0] = "Java";

        System.out.println(names[0]);
        System.out.println(names[1]);
    }
}
```

**예상 실행 결과**

```text
80
3
[80, 90, 100, 0, 0]
Java
null
```

**코드 이해하기**

1. `scores`에 세 개의 정수를 저장한다.
2. `scores[0]`은 첫 번째 값인 80을 출력한다.
3. `scores.length`는 배열의 길이 3을 반환한다.
4. `System.arraycopy()`는 세 개의 값을 새 배열로 복사한다.
5. `names[1]`에는 아직 객체를 할당하지 않았기 때문에 `null`이 출력된다.

### 실습 2. 메서드 오버라이딩

**파일명:** `OverridePractice.java`

```java
class Employee {
    public String getDetails() {
        return "직원";
    }
}

class Manager extends Employee {

    @Override
    public String getDetails() {
        return super.getDetails() + " / 관리자";
    }
}

public class OverridePractice {
    public static void main(String[] args) {

        Employee employee = new Manager();

        System.out.println(employee.getDetails());
    }
}
```

**예상 실행 결과**

```text
직원 / 관리자
```

**코드 이해하기**

1. `Employee`가 부모 클래스이다.
2. `Manager`는 `Employee`를 상속한다.
3. 자식 클래스가 `getDetails()`를 재정의한다.
4. `super.getDetails()`는 부모 메서드를 호출한다.
5. `employee` 변수의 타입은 `Employee`지만 실제 객체는 `Manager`이므로, 실행 시 자식 클래스의 메서드가 호출된다.

이처럼 실제 객체의 종류에 따라 실행되는 메서드가 달라지는 것은 다형성과 관련된다.

### 실습 3. 예외 처리

**파일명:** `ExceptionPractice.java`

```java
public class ExceptionPractice {
    public static void main(String[] args) {

        int[] numbers = {10, 20};

        try {
            System.out.println(numbers[2]);

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("배열 범위를 벗어났습니다.");

        } finally {
            System.out.println("finally 실행");
        }

        System.out.println("프로그램 계속 진행");
    }
}
```

**예상 실행 결과**

```text
배열 범위를 벗어났습니다.
finally 실행
프로그램 계속 진행
```

**코드 이해하기**

1. 배열에는 인덱스 0과 1만 존재한다.
2. `numbers[2]`에 접근하므로 예외가 발생한다.
3. `catch`에서 해당 예외를 처리한다.
4. `finally` 블록을 실행한다.
5. 예외가 처리되었으므로 다음 코드로 진행한다.

이 예제는 `try-catch`의 동작을 확인하기 위해 의도적으로 잘못된 인덱스를 사용했다. 실제 프로그램에서는 배열 범위를 먼저 확인하는 것이 좋다.

### 실습 4. throw와 throws

**파일명:** `ThrowsPractice.java`

```java
import java.io.IOException;

public class ThrowsPractice {

    public static void readData() throws IOException {
        throw new IOException("데이터 읽기 실패");
    }

    public static void main(String[] args) {

        try {
            readData();

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

**예상 실행 결과**

```text
데이터 읽기 실패
```

`readData()`는 `throw`로 예외를 발생시키고, `throws`를 통해 호출한 쪽에 처리를 위임한다. 실제 예외 처리는 `main()`의 `catch`에서 이루어진다.

---

## 어려웠던 점 & 해결 과정

*아직 실제 실습 중 발생한 오류가 기록되지 않았으므로, 이번에는 복습하면서 점검해야 할 부분을 정리했다.*

**1. Array**

- 문제: 배열을 생성하는 것과 배열 요소를 초기화하는 것의 차이가 헷갈릴 수 있다.
- 시도: 기본형 배열과 참조형 배열의 초기 상태를 비교한다.
- 해결: 기본형 요소의 기본값과 참조형 요소의 기본값 `null`을 구분한다.
- 교훈: 배열 객체를 생성했다고 해서 참조형 배열 내부의 객체까지 모두 생성되는 것은 아니다.

**2. Overriding**

- 문제: 오버라이딩과 오버로딩의 차이가 혼동될 수 있다.
- 시도: 메서드 이름과 매개변수 구성을 비교한다.
- 해결: 오버라이딩은 메서드의 재정의, 오버로딩은 매개변수가 다른 메서드의 추가로 구분한다.
- 교훈: `@Override`를 사용하면 재정의 실수를 컴파일 단계에서 확인하기 쉽다.

**3. Exception**

- 문제: `throw`와 `throws`, `try-catch`와 `finally`의 역할을 구분해야 한다.
- 시도: 예외를 직접 발생시키는 코드와 호출한 쪽에 전달하는 코드를 비교한다.
- 해결: `throw`는 발생, `throws`는 위임, `catch`는 처리로 기억한다.
- 교훈: 예외가 발생하는 이유를 이해하고 가능하면 원인을 예방해야 한다.

---

## 내일 계획 & 아직 모르는 것

**내일 복습 계획**

- [ ] 배열을 선언하고 반복문으로 모든 요소 출력하기
- [ ] 부모와 자식 클래스를 직접 만들어 오버라이딩 구현하기
- [ ] `try-catch-finally` 실행 순서를 예상한 뒤 확인하기
- [ ] `throw`와 `throws`를 사용한 예제 직접 작성하기

**추가로 확인할 개념**

- 참조형 배열을 복사했을 때 원본 객체를 공유하는 이유
- 오버라이딩에서 부모 타입 변수로 자식 객체를 참조할 수 있는 이유
- Checked Exception과 Unchecked Exception의 실무적인 사용 차이
- 2차원 배열의 선언과 접근 방법

### 오늘의 핵심 요약

- **Array:** 같은 타입의 여러 데이터를 하나의 배열로 관리한다.
- **Overriding:** 부모 메서드를 자식 클래스의 목적에 맞게 다시 정의한다.
- **Exception:** 프로그램에서 발생할 수 있는 예외를 처리하거나 호출한 쪽으로 전달한다.

세 개념은 서로 독립적이지만 Java 프로그램에서 함께 사용될 수 있다. 배열은 데이터를 관리하고, 오버라이딩은 객체별 동작을 다르게 만들며, 예외 처리는 실행 과정의 오류 상황에 대응하는 역할을 한다.

**참고 자료:** Java 프로그래밍 과정 PDF, Chap 05 pp.104–116 / Chap 06 pp.126–135 / Chap 08 pp.170–186