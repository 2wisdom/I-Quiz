import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Quizzes from "../pages/Quizzes";
import Score from "../pages/Score";
import { useState } from "react";

export default function AppRouter() {
  const [duration, setDuration] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  const handleAnswerChange = (
    correct: number,
    wrong: number,
    duration: number
  ) => {
    setDuration(duration);
    setCorrectAnswer(correct);
    setWrongAnswer(wrong);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quiz",
      element: <Quizzes onAnswerChange={handleAnswerChange} />,
    },
    {
      path: "/score",
      element: (
        <Score
          correctAnswer={correctAnswer}
          wrongAnswer={wrongAnswer}
          duration={duration}
        />
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
