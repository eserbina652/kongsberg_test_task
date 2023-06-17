import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "./api/api";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApiProvider api={api}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiProvider>
);

reportWebVitals();
