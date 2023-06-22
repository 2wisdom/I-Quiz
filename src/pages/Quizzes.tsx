import { useQuery } from "@tanstack/react-query";
import Api from "../api/api";
import styled from "@emotion/styled";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

export default function Quizzes({ onAnswerChange }: any) {
  const navigation = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [buttonColor, setButtonColor] = useState<
    "primary" | "error" | "success"
  >("primary");
  // 문제 풀이에 걸린 시간
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(0);
  // 정답 & 오답 count
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  /* Params */
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = useMemo(() => Number(searchParams.get("amount")), []);
  const difficulty = useMemo(
    () => searchParams.get("difficulty") || "medium",
    []
  );
  const name = useMemo(() => searchParams.get("name") || "", []);

  /* Connect API */
  const { data, isLoading } = useQuery(["quizzes"], async () => {
    const { data } = await Api.get(`/`, {
      params: {
        amount,
        category: 15, // video game
        difficulty,
        type: "multiple",
      },
    });

    /**
     * 퀴즈의 4가지 문항을 무작위로 섞는 함수
     */
    const updateData = data.results.map(
      (result: any) => {
        const { correct_answer, incorrect_answers } = result;
        const allAnswers = [...incorrect_answers, correct_answer];

        const shuffleAnswers = allAnswers.sort((a, b) => 0.5 - Math.random());

        return {
          ...result,
          shuffleAnswers,
        };
      },
      {
        enabled: !data, // data가 없을 때만 API 요청
      }
    );

    return {
      data: {
        results: updateData,
      },
    };
  });

  /**
   * 퀴즈 시작 시간 설정
   */
  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  /**
   * 문제 종료 후 걸린 시간 계산
   */
  useEffect(() => {
    if (endTime !== null) {
      const durationTime = endTime - startTime!;
      setDuration(durationTime);
    }
  }, [endTime]);

  /**
   * 답안을 고를 때 실행되는 함수
   */
  const handleAnswer = (answer: string) => {
    setDisabled(false);
    setSelectedAnswer(answer);

    if (answer === data!.data.results[questionIndex].correct_answer) {
      setButtonColor("success");
      setCorrectAnswer((count) => count + 1);
    } else {
      setButtonColor("error");
      setWrongAnswer((count) => count + 1);
    }
  };

  /**
   * Next 클릭 시 실행되는 함수
   */
  const handleNextQuestion = () => {
    setDisabled(true);
    setSelectedAnswer(null);
    setButtonColor("primary");

    if (questionIndex + 1 < amount) {
      setQuestionIndex(questionIndex + 1);
    } else {
      const endTime = Date.now(); // endTime을 설정
      setEndTime(endTime);
      onAnswerChange(correctAnswer, wrongAnswer, endTime - startTime!); // duration을 계산하여 전달

      navigation(`/score?name=${encodeURIComponent(name)}`);
    }
  };

  /**
   * Loading UI
   */
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const currentQuestion = data!.data.results[questionIndex];
  const { question } = currentQuestion;

  return (
    <Wrapper>
      {/* 문제 */}
      <Typography sx={{ fontSize: 20, margin: 5 }}>
        {question.replace(/&quot;/g, `"`).replace(/&#039;/g, `'`)}
      </Typography>

      {/* 답안 */}
      <Grid container rowSpacing={1}>
        {data?.data.results[questionIndex].shuffleAnswers.map((answer: any) => (
          <Grid xs={6} item={true} key={answer}>
            <Button
              variant="outlined"
              sx={{ margin: 3 }}
              onClick={() => handleAnswer(answer)}
              disabled={selectedAnswer !== null}
              style={{
                color: selectedAnswer === answer ? "white" : "inherit",
                backgroundColor:
                  selectedAnswer === answer
                    ? buttonColor === "success"
                      ? "green"
                      : buttonColor === "error"
                      ? "red"
                      : "inherit"
                    : "inherit",
              }}
            >
              {answer.replace(/&quot;/g, `"`).replace(/&#039;/g, `'`)}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Next */}
      <Button
        variant="contained"
        sx={{ margin: 3 }}
        onClick={handleNextQuestion}
        disabled={disabled || selectedAnswer === null}
      >
        Next
      </Button>
    </Wrapper>
  );
}
