import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./style/theme.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quizzes from "./pages/Quizzes.tsx";
import ErrorPage from "./pages/error-page.tsx";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quiz",
    element: (
      <Quizzes amount={15} category={15} difficulty="medium" type="multiple" />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        {/* <App /> */}
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
