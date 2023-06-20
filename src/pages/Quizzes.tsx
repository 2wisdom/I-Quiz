import { useQuery } from "@tanstack/react-query";
import Api from "../api/api";
import styled from "@emotion/styled";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export type Props = {
  amount: number; // 문제 갯수
  difficulty: string; // 난이도 (easy / medium / hard)
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 0 auto;
  height: 80vh;
  max-width: 1200px;
`;

export default function Quizzes() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = Number(searchParams.get("amount"));
  const difficulty = searchParams.get("difficulty") || "medium";

  const { data } = useQuery(["quizzes"], async () => {
    const { data } = await Api.get(`/`, {
      params: {
        amount,
        category: 15, // video game
        difficulty,
        type: "multiple",
      },
    });

    return {
      data,
    };
  });

  console.log("data", data);

  const handleAnswer = (answer: string) => {
    // setAnswers([...answers, answer]);

    if (answer === data!.data.results[questionIndex].correct_answer) {
      console.log("정답!");
    } else {
      console.log("오답!");
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex + 1 < amount) {
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log("Quiz completed!");
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const currentQuestion = data.data.results[questionIndex];
  const { question, correct_answer, incorrect_answers } = currentQuestion;

  // question 내용에서 &quot;를 큰따옴표(")로 치환
  const updatedQuestion = currentQuestion.question
    .replace(/&quot;/g, `"`)
    .replace(/&#039;/g, `'`);

  // correct_answer와 incorrect_answers에서 &quot;와 &#039;를 치환
  const updatedCorrectAnswer = correct_answer
    .replace(/&quot;/g, `"`)
    .replace(/&#039;/g, `'`);
  const updatedIncorrectAnswers = incorrect_answers.map((answer: string) =>
    answer.replace(/&quot;/g, `"`).replace(/&#039;/g, `'`)
  );

  const allAnswers = [...updatedIncorrectAnswers, updatedCorrectAnswer];
  const shuffledAnswers = shuffle(allAnswers);

  return (
    <Wrapper>
      {/* 문제 */}
      <Typography sx={{ fontSize: 20, margin: 5 }}>
        {updatedQuestion}
      </Typography>

      {/* 답안 */}
      <Grid container rowSpacing={1}>
        {shuffledAnswers.map((answer) => (
          <Grid xs={6} item={true} key={answer}>
            <Button
              variant="outlined"
              sx={{ margin: 3 }}
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Next */}
      <Button
        variant="contained"
        sx={{ margin: 3 }}
        onClick={handleNextQuestion}
      >
        Next
      </Button>
    </Wrapper>
  );
}

// 배열 요소를 무작위로 섞는 함수
function shuffle(array: any[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
