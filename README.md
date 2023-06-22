# a Video Game Quiz !

`a Video Game Quiz`는 사용자에게 비디오 게임에 관한 퀴즈를 제공하는 간단한 웹 기반 게임입니다.

`React` + `Typescript` 로 작성되었으며, 게임 플레이 중에 플레이어에게 다양한 게임에 대한 질문을 제시하고 정확한 답변을 선택하도록 요구합니다.

게임은 미리 정의된 질문 목록을 사용하며, 퀴즈를 푸는데 소요된 시간과 최종 점수는 게임이 종료된 후에 표시됩니다.

본인이 얼마나 게임에 진심인지 보여주세요 😉

🔗 [Link !](https://a-video-game-quiz.vercel.app/)

    해당 사이트는 영문을 중심으로 만들어져 있습니다.
    추후 번역이 들어갈 예정이니 그전까지는 가볍게 즐겨주세요 !

<br />

## 기능

---

<br />

- 이름을 입력하면 퀴즈를 시작할 수 있습니다.

- amount 로 퀴즈 갯수를, difficulty 로 난이도를 설정할 수 있습니다.

- 답안을 선택하면 다음 문항으로 넘어갈 수 있습니다.

- 답안이 맞았는지 틀렸는지 바로 확인할 수 있습니다.

- 모든 퀴즈를 풀면 퀴즈를 푸는데 소요한 시간(초), 정답 수, 오답 수를 알 수 있습니다.

<br />

## 시작하기

---

<br />

이 섹션에서는 프로젝트를 실행하기 위한 필수 사항과 설치 방법을 안내합니다.

<br />

### 설치하기

다음 명령어를 사용하여 프로젝트를 설치합니다.

```bash
$ git clone https://github.com/2wisdom/a-video-game-quiz.git

$ cd a-video-game-quiz/

$ yarn install
```

### 실행하기

다음 명령어를 사용하여 개발 서버를 실행합니다.

```bash
$ yarn dev
```

[http://localhost:5173/](http://localhost:5173/)

위 url 로 들어가면 프로젝트를 확인할 수 있습니다.

<br />

## 사용된 API

---

<br />

API는 [Trivia API](https://opentdb.com/api_config.php) 의 open API 를 사용했습니다.

<br />

## 사용된 라이브러리

---

<br />

프로젝트를 개발하는 데 사용된 주요 라이브러리들입니다.

- `@tanstack/react-query` : 데이터 페칭과 상태 관리를 위한 React Query 라이브러리를 사용하기 위해 사용되었습니다.

- `axios` : HTTP 요청을 간편하게 처리하기 위해 사용되었습니다.

- `react-router-dom` : React 애플리케이션의 라우팅을 관리하기 위해 사용되었습니다.

- `@emotion/react` : React 애플리케이션에서 Emotion CSS-in-JS 라이브러리를 사용하기 위해 사용되었습니다.

- `@emotion/styled` : Emotion 라이브러리에서 제공하는 컴포넌트 스타일링을 위해 사용되었습니다.

- `@mui/material` : Material-UI 컴포넌트 라이브러리를 React 애플리케이션에 사용하기 위해 사용되었습니다.

<br />

## 폴더 구조

---

<br />

```
.
├── public/
├── src/
│   ├── api/
│   │   └── api.ts
│   ├── components/
│   │   └── AppRouter.tsx
│   │   └── Layout.tsx
│   │   └── Navbar.tsx
│   ├── pages/
│   │   └── App.tsx
│   │   └── Home.tsx          # 퀴즈 시작 페이지
│   │   └── Quizzes.tsx       # 퀴즈를 푸는 페이지
│   │   └── Score.tsx         # 최종 점수 페이지
│   ├── style/
│   │   └── global.css
│   │   └── theme.ts          # MUI theme 파일
│   ├── main.tsx
│   └── ...
└── ...
```

<br />

## 연락처

---

<br />

해당 프로젝트의 이슈 및 피드백을 환영합니다 !

- [leejihye7117@gmail.com](leejihye7117@gmail.com)

- [Issue Here !](https://github.com/2wisdom/a-video-game-quiz/issues)
