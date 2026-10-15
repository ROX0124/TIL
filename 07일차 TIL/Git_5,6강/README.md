# 7일차 - Git Branch 병합과 Merge/Rebase

## 📌 오늘 학습한 내용

- Git Branch 생성 및 이동 실습
- Branch 삭제 시 주의점
- 여러 Branch의 흐름 확인
- Merge의 개념
- Rebase의 개념
- Merge 이후 이전 상태로 되돌리기

---

## 1. Branch 생성 및 관리 실습

이번 강의에서는 이전에 배운 Git Branch 명령어를 활용하여 직접 브랜치를 생성하고 이동하거나 삭제하는 과정을 실습하였다.

Branch를 활용하면 하나의 프로젝트에서도 서로 다른 작업 공간을 만들어 독립적으로 작업할 수 있다.

이번 실습에서는 다음과 같은 작업을 진행하였다.

- Branch 생성
- Branch 이동
- Branch 삭제
- Branch 병합

---

## 2. Branch 삭제 시 주의점

Branch를 삭제할 때는 **현재 내가 위치하고 있는 Branch를 바로 삭제할 수 없다.**

따라서 삭제하려는 Branch에 현재 위치하고 있다면 먼저 다른 Branch로 이동해야 한다.

```text
삭제하려는 Branch에 현재 위치
        ↓
다른 Branch로 switch
        ↓
기존 Branch 삭제
```

즉, Branch를 삭제하기 전에는 현재 어떤 Branch에서 작업하고 있는지 확인하는 것이 중요하다.

---

## 3. 여러 Branch의 흐름 확인

프로젝트에 여러 Branch가 존재하면 각각의 Branch가 어떤 흐름을 가지고 있는지 한눈에 확인할 필요가 있다.

다음 명령어를 사용하면 Branch와 Commit의 흐름을 그래프 형태로 확인할 수 있다.

```bash
git log --all --decorate --oneline --graph
```

각 옵션을 함께 사용하여 여러 Branch의 Commit 흐름을 비교해서 볼 수 있다.

이번 실습을 통해 Branch가 여러 개로 분기된 상황을 명령어를 통해 시각적으로 확인할 수 있었다.

---

## 4. Branch 병합

서로 다른 Branch에서 진행한 작업을 다시 하나로 합치는 과정이 필요할 수 있다.

이번 강의에서는 Branch를 합치는 방법으로 다음 두 가지를 학습하였다.

```text
Merge
Rebase
```

두 방법 모두 서로 다른 Branch를 합칠 때 사용할 수 있지만 동작 방식에는 차이가 있다.

---

## 5. Merge

Merge는 **두 Branch를 하나의 Commit으로 이어 붙이는 방식**이다.

강의에서는 Merge를 실행할 때 **내가 합치고 싶은 곳에서 실행한다**고 설명하였다.

즉, 병합 결과를 받을 Branch로 이동한 뒤 Merge를 진행한다.

```text
Branch A ← Branch B

Branch A에서 Merge 실행
```

이를 통해 서로 다른 Branch에서 진행했던 작업을 하나로 합칠 수 있다.

---

## 6. Rebase

Rebase는 **Branch를 다른 Branch에 이어 붙이는 방식**이다.

강의에서는 Rebase의 경우 **합침을 당하는 곳에서 실행한다**고 설명하였다.

```text
Branch A
       \
        Branch B

        ↓ Rebase

Branch A ─── Branch B
```

Merge와 Rebase 모두 Branch를 합치는 데 사용할 수 있지만, Branch의 작업 내역을 연결하는 방식에 차이가 있다는 것을 알 수 있었다.

---

## 7. Merge 이전 상태로 돌아가기

Branch를 Merge한 이후에도 필요한 경우 이전 상태로 돌아갈 수 있다.

강의에서는 `reset`을 이용하여 Merge가 이루어지기 전의 상태로 돌아가는 방법도 확인하였다.

```text
Merge 이전
    ↓
Merge 실행
    ↓
필요한 경우 reset
    ↓
Merge 이전 상태
```

이전에 배웠던 `reset`을 Branch 병합 과정에서도 활용할 수 있다는 것을 확인하였다.

---

## 💡 새롭게 알게 된 점

이번 강의를 통해 Branch를 생성하고 이동하는 것뿐만 아니라 **여러 Branch에서 진행한 작업을 다시 하나로 병합하는 과정**도 중요하다는 것을 알게 되었다.

특히 현재 위치하고 있는 Branch는 바로 삭제할 수 없기 때문에 먼저 다른 Branch로 이동해야 한다는 점을 실습을 통해 확인하였다.

또한

```bash
git log --all --decorate --oneline --graph
```

명령어를 사용하면 여러 Branch와 Commit의 흐름을 한눈에 확인할 수 있다는 점을 알게 되었다.

마지막으로 Branch를 합치는 방법으로 `merge`와 `rebase`가 있으며, 두 방식이 서로 다른 방법으로 Branch의 작업 내용을 연결한다는 것을 배웠다.

---

## 🔎 추가로 공부할 내용

- Merge와 Rebase의 구체적인 차이
- Merge Commit이 생성되는 과정
- Rebase가 Commit 흐름을 변경하는 방식
- Branch 병합 과정에서 충돌이 발생하는 경우
- Merge Conflict 해결 방법
- 협업에서는 Merge와 Rebase를 각각 언제 사용하는지

---

## ✏️ 오늘의 한 줄 정리

> Git에서는 여러 Branch를 이용해 작업을 분리할 수 있으며, Merge와 Rebase를 통해 서로 다른 Branch의 작업 내용을 다시 하나로 합칠 수 있다.