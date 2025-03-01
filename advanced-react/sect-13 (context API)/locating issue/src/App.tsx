import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import { useState } from "react";
import NavController from "./context/nav-controller";
import Page from "./components/page";

export default function App() {
  return (
    <Page>
      <Sidebar />
      <Main />
    </Page>
  );
}
