import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { api } from "./api/api";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

describe("App", () => {
  test("renders the Breadcrumb and Table components", () => {
    render(
      <ApiProvider api={api}>
        <App />
      </ApiProvider>
    );

    const breadcrumbElement = screen.getByTestId("breadcrumb");
    expect(breadcrumbElement).toBeInTheDocument();

    const tableElement = screen.getByTestId("table");
    expect(tableElement).toBeInTheDocument();
  });
});
