import Layout from "../components/Layout";
import AppRouter from "../components/AppRouter";
import { CssBaseline } from "@mui/material";
import { Global } from "@emotion/react";
import global from "../style/global.css";

export default function App() {
  return (
    <>
      <Layout>
        <CssBaseline />
        <Global styles={global} />
        <AppRouter />
      </Layout>
    </>
  );
}
