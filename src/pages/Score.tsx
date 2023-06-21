import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export type ScoreProps = {
  correctAnswer: number;
  wrongAnswer: number;
  duration: number;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 80vh;

  p {
    font-size: 20px;
    margin: 15px;
  }

  span {
    color: #673ab7;
    font-weight: 700;
  }
`;

export default function Score({
  correctAnswer,
  wrongAnswer,
  duration,
}: ScoreProps) {
  const navigator = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name") || "";

  return (
    <Wrapper>
      <h1>
        Hello, <span>{name}</span> !
      </h1>
      <p>
        It took&nbsp;
        <span>{duration / 1000}</span>
        &nbsp;second to solve the Quizzes ⏱️
      </p>
      <p>
        Congratulations! You got&nbsp;
        <span>{correctAnswer}</span>
        &nbsp;right 🎉
      </p>
      <p>
        But you got&nbsp;
        <span>{wrongAnswer}</span>
        &nbsp;questions wrong • • • 💫
      </p>

      <Button
        onClick={() => {
          navigator("/");
        }}
      >
        Try Again ?
      </Button>
    </Wrapper>
  );
}
