import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Quizzes from "../pages/Quizzes";
import ErrorPage from "../pages/error-page";
import Score from "../pages/Score";
import { useState } from "react";

export default function AppRouter() {
  const [duration, setDuration] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  const handleAnswerChage = (correct: number, wrong: number) => {
    setCorrectAnswer(correct);
    setWrongAnswer(wrong);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/quiz",
      element: <Quizzes onAnswerChage={handleAnswerChage} />,
    },
    {
      path: "/score",
      element: (
        <Score correctAnswer={correctAnswer} wrongAnswer={wrongAnswer} />
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
