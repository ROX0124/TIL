# 9일차 - Git과 GitHub 연동 및 Clone, Push, Pull

## 📌 오늘 학습한 내용

- Git과 GitHub의 차이
- 로컬 저장소와 원격 저장소
- GitHub에 작성한 코드 업로드
- `git clone`
- `git push`
- `git pull`

---

## 1. Git과 GitHub의 차이

Git과 GitHub는 서로 연관되어 있지만 역할이 다르다.

### Git

Git은 **VCS(Version Control System)**, 즉 버전 관리 시스템이다.

로컬 컴퓨터에 설치하여 사용하며, 명령어를 통해 파일과 프로젝트의 변경 이력을 관리한다.

대표적인 명령어는 다음과 같다.

```bash
git add .
git branch
```

즉, Git은 **내 컴퓨터에서 프로젝트의 버전을 관리하기 위한 도구**라고 볼 수 있다.

---

### GitHub

GitHub는 Git을 기반으로 관리하는 소스코드와 프로젝트를 온라인에서 공유할 수 있는 플랫폼이다.

Git처럼 별도의 프로그램을 로컬에 설치하여 사용하는 것이 아니라, 클라우드 환경에서 제공되는 서비스이다.

```text
Git
→ 로컬에서 버전 관리

GitHub
→ 온라인에서 코드 저장 및 공유
```

따라서 Git으로 로컬 프로젝트의 변경 이력을 관리하고, GitHub를 이용해 해당 프로젝트를 원격에서 저장하거나 다른 개발자와 공유할 수 있다.

---

## 2. 로컬과 원격 저장소

이번 강의에서는 로컬에서 작성한 코드를 GitHub에 업로드하는 방법을 학습하였다.

```text
Local
내 컴퓨터
   ↕
Git / GitHub
   ↕
Remote
GitHub Repository
```

Git은 로컬의 변경 내용을 관리하고, GitHub Repository는 해당 프로젝트를 온라인에서 관리하는 원격 저장소의 역할을 한다.

---

## 3. git clone

GitHub에 존재하는 Repository를 로컬 컴퓨터로 가져올 때 `git clone`을 사용할 수 있다.

```bash
git clone Repository주소
```

`clone`을 이용하면 단순히 현재 프로젝트 파일만 가져오는 것이 아니라 **Git의 관리 내역을 포함한 저장소 전체를 다운로드**할 수 있다.

```text
GitHub Repository
        ↓
     git clone
        ↓
Local Repository
```

따라서 기존 프로젝트를 내 컴퓨터에서 이어서 작업하고 싶을 때 사용할 수 있다.

---

## 4. git push

로컬에서 작업한 내용을 GitHub와 같은 원격 저장소에 반영할 때 `git push`를 사용할 수 있다.

```text
Local Repository
        ↓
      push
        ↓
Remote Repository
```

즉, 내가 로컬에서 작성하거나 수정한 내용을 원격 저장소에 올리는 과정이라고 이해할 수 있다.

---

## 5. git pull

원격 저장소의 변경 사항을 로컬로 가져올 때 `git pull`을 사용할 수 있다.

```text
Remote Repository
        ↓
      pull
        ↓
Local Repository
```

다른 사람이 원격 저장소에 작업 내용을 반영했거나 GitHub의 코드가 변경된 경우 이를 내 로컬 프로젝트에 가져올 수 있다.

---

## 6. Push와 Pull의 방향

`push`와 `pull`은 방향을 기준으로 이해하면 쉽게 구분할 수 있다.

```text
Local ── push ──> GitHub

Local <── pull ── GitHub
```

| 명령어 | 방향 | 역할 |
| --- | --- | --- |
| `git push` | Local → Remote | 로컬 변경 내용을 GitHub에 업로드 |
| `git pull` | Remote → Local | GitHub의 변경 내용을 로컬로 가져오기 |

---

## 7. Clone과 Pull의 차이

둘 다 GitHub의 내용을 로컬로 가져오는 과정이지만 사용하는 상황이 다르다.

### Clone

Repository를 처음 로컬로 가져올 때 사용한다.

```bash
git clone Repository주소
```

### Pull

이미 로컬에 존재하는 Repository에서 원격의 새로운 변경 내용을 받아올 때 사용한다.

```bash
git pull
```

따라서 다음과 같이 구분할 수 있다.

```text
처음 프로젝트 가져오기
→ clone

이미 받은 프로젝트 최신화
→ pull
```

---

## 💡 새롭게 알게 된 점

이번 강의를 통해 Git과 GitHub의 역할을 다시 한번 명확하게 구분할 수 있었다.

Git은 로컬에서 프로젝트의 버전을 관리하는 도구이고, GitHub는 해당 프로젝트를 클라우드 환경에서 저장하고 공유하는 플랫폼이라는 점을 확인하였다.

특히 GitHub에 있는 프로젝트를 가져올 때는 단순히 파일만 다운로드하는 것이 아니라 `git clone`을 이용하면 **Git의 관리 이력까지 함께 가져올 수 있다는 점**을 알게 되었다.

또한 로컬에서 작성한 내용을 GitHub에 전달하는 작업은 `push`, GitHub에 있는 내용을 로컬로 가져오는 작업은 `pull`이라는 것을 실습을 통해 확인하였다.

---

## 🔎 추가로 공부할 내용

- Local Repository와 Remote Repository의 차이
- `git clone`과 일반 파일 다운로드의 차이
- `git push`를 하기 전 필요한 과정
- `git pull` 내부에서 수행되는 작업
- Remote Repository 연결 방법
- `origin`의 의미
- Push나 Pull 과정에서 충돌이 발생하는 경우

---

## ✏️ 오늘의 한 줄 정리

> Git은 로컬에서 버전을 관리하고 GitHub는 프로젝트를 원격에서 공유·관리하며, Clone·Push·Pull을 이용해 로컬과 원격 저장소의 코드를 주고받을 수 있다.