import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Quizzes from "../pages/Quizzes";
import ErrorPage from "../pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quiz",
    element: (
      <Quizzes amount={15} category={15} difficulty="medium" type="multiple" />
    ),
  },
]);

export default function AppRouter() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
