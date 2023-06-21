import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export type ScoreProps = {
  correctAnswer: number;
  wrongAnswer: number;
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
`;

export default function Score({ correctAnswer, wrongAnswer }: ScoreProps) {
  console.log(correctAnswer, wrongAnswer);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name") || "";

  return (
    <Wrapper>
      <h1>
        Hello, <span style={{ color: "#673ab7" }}>{name}</span> !
      </h1>
      <p>
        It took&nbsp;
        <span style={{ fontWeight: 700, color: "#673ab7" }}>{}</span>
        &nbsp;minutes to solve the Quizzes ⏱️
      </p>
      <p>
        Congratulations! You got&nbsp;
        <span style={{ fontWeight: 700, color: "#673ab7" }}>
          {correctAnswer}
        </span>
        &nbsp;right 🎉
      </p>
      <p>
        But you got&nbsp;
        <span style={{ fontWeight: 700, color: "#673ab7" }}>{wrongAnswer}</span>
        &nbsp;questions wrong • • • 💫
      </p>

      <Button>Try Again ?</Button>
    </Wrapper>
  );
}
