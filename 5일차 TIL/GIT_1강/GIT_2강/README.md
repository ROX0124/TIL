# 5일차 2강 - Git과 GitHub의 차이와 주요 기능

## 📌 오늘 학습한 내용

- Git과 GitHub의 차이
- Git에서 사용하는 주요 명령어
- 로컬 저장소의 기본 작업 흐름
- GitHub Repository
- Fork와 Pull Request
- Issue와 Actions

---

## 1. Git과 GitHub의 차이

Git과 GitHub는 이름이 비슷하지만 서로 다른 역할을 한다.

### Git

Git은 **로컬 환경에서 버전 관리를 할 수 있는 도구**이다.

내 컴퓨터에서 프로젝트의 변경 내용을 기록하고, 이전 버전으로 돌아가거나 브랜치를 만들어 작업 내용을 관리할 수 있다.

```text
Git = Local Version Control
```

### GitHub

GitHub는 Git으로 관리하는 프로젝트를 온라인에 저장하고 다른 사람과 공유하거나 협업할 수 있도록 제공하는 플랫폼이다.

```text
GitHub = Remote / Cloud
```

즉,

```text
Git
↓
내 컴퓨터에서 버전 관리

GitHub
↓
온라인에서 코드 저장 / 공유 / 협업
```

과 같이 구분할 수 있다.

---

## 2. Git의 주요 명령어

Git에서는 여러 명령어를 사용하여 프로젝트의 버전을 관리한다.

### git init

새로운 Git 저장소를 생성한다.

```bash
git init
```

프로젝트에서 Git을 이용한 버전 관리를 시작할 때 사용하는 명령어이다.

---

### git add

변경된 파일을 **Staging Area**에 추가한다.

```bash
git add
```

커밋하기 전에 어떤 변경 사항을 기록할 것인지 선택하는 단계라고 볼 수 있다.

---

### git commit

Staging Area에 추가된 변경 사항을 하나의 버전으로 기록한다.

```bash
git commit
```

즉, 현재까지 작업한 내용을 하나의 변경 이력으로 저장하는 과정이다.

---

### git log

커밋 기록을 확인할 때 사용한다.

```bash
git log
```

이전에 어떤 커밋이 만들어졌는지 확인할 수 있다.

---

### git branch

브랜치를 생성하거나 관리할 때 사용한다.

```bash
git branch
```

하나의 프로젝트에서 기존 작업과 분리하여 새로운 작업을 진행할 때 브랜치를 활용할 수 있다.

---

### git merge

서로 다른 브랜치의 작업 내용을 하나로 합칠 때 사용한다.

```bash
git merge
```

---

### git checkout

특정 버전이나 특정 브랜치로 이동할 때 사용한다.

```bash
git checkout
```

이를 통해 작업하고 싶은 브랜치나 이전 버전으로 이동할 수 있다.

---

## 3. Git의 기본 작업 흐름

이번 강의에서 배운 명령어를 연결하면 Git의 기본적인 흐름을 다음과 같이 이해할 수 있다.

```text
프로젝트 생성
    ↓
git init
    ↓
파일 수정
    ↓
git add
    ↓
git commit
    ↓
버전 기록
```

즉, 프로젝트를 Git 저장소로 만든 뒤 변경된 파일을 Staging Area에 올리고, 커밋을 통해 하나의 버전으로 기록한다.

---

## 4. GitHub Repository

GitHub에서는 프로젝트를 **Repository** 단위로 관리한다.

Repository는 코드와 프로젝트 파일을 저장하는 저장소를 의미한다.

Git으로 로컬에서 관리하던 프로젝트를 GitHub Repository에 올리면 온라인에서도 프로젝트를 관리할 수 있다.

---

## 5. Fork

Fork는 다른 사람의 GitHub Repository를 **내 GitHub 계정으로 복사하는 기능**이다.

```text
다른 사람의 Repository
        ↓
       Fork
        ↓
내 GitHub 계정의 Repository
```

다른 사람의 프로젝트를 직접 수정하는 대신 내 계정으로 복사한 후 작업할 수 있다.

---

## 6. Pull Request

Pull Request, 줄여서 PR은 내가 수정한 코드를 원본 Repository에 반영해 달라고 요청하는 기능이다.

```text
코드 수정
   ↓
Pull Request
   ↓
변경 사항 검토
   ↓
Merge
```

협업 프로젝트에서는 다른 사람이 작성한 변경 내용을 확인하고 검토한 뒤 프로젝트에 병합할 수 있다.

---

## 7. Issue

Issue는 프로젝트에서 발생한 문제나 개선해야 할 내용을 논의할 수 있는 공간이다.

대표적으로 다음과 같은 내용을 관리할 수 있다.

- 버그
- 개선 사항
- 추가 기능
- 작업 내용

하나의 게시판처럼 프로젝트에서 필요한 작업이나 문제를 정리하고 공유할 수 있다.

---

## 8. GitHub Actions

GitHub에는 **Actions**라는 기능도 존재한다.

이번 강의 메모에서는 Actions라는 기능이 있다는 것까지 확인하였다.

추후 해당 기능이 어떤 역할을 하고 어떻게 사용되는지는 추가로 학습할 필요가 있다.

---

## 💡 새롭게 알게 된 점

이번 강의를 통해 Git과 GitHub를 같은 개념처럼 생각하면 안 된다는 점을 확실하게 구분할 수 있었다.

Git은 내 컴퓨터에서 프로젝트의 버전을 관리하는 도구이고, GitHub는 Git으로 관리하는 프로젝트를 온라인에 저장하고 다른 사람과 협업할 수 있도록 제공하는 플랫폼이다.

또한 Git에서는 `init → add → commit`의 흐름을 통해 변경 사항을 하나의 버전으로 기록할 수 있다는 점을 이해했다.

GitHub에서는 Repository를 중심으로 프로젝트를 관리하고, Fork와 Pull Request를 이용하여 다른 개발자의 프로젝트에 참여하거나 협업할 수 있다는 점도 알게 되었다.

---

## 🔎 추가로 공부할 내용

- Working Directory와 Staging Area의 차이
- commit이 실제로 저장되는 방식
- branch를 사용하는 이유
- merge 과정에서 충돌이 발생하는 이유
- Fork와 Clone의 차이
- Pull Request의 실제 협업 과정
- GitHub Actions의 역할

---

## ✏️ 오늘의 한 줄 정리

> Git은 로컬에서 프로젝트의 버전을 관리하는 도구이고, GitHub는 Git으로 관리하는 코드를 온라인에서 저장하고 공유하며 협업할 수 있도록 제공하는 플랫폼이다.