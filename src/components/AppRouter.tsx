import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Quizzes from "../pages/Quizzes";
import ErrorPage from "../pages/error-page";
import Score from "../pages/Score";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/quiz",
      element: <Quizzes />,
    },
    {
      path: "/score",
      element: <Score />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
