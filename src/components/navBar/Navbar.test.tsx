import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BreadcrumbProvider } from "../../hooks/useBreadcrumbContext";
import App from "../../App";
import React from "react";

describe("NAVBAR TEST", () => {
  test("LINKS ARE DEFINED", () => {
    render(
      <BrowserRouter>
        <BreadcrumbProvider>
          <App />
        </BreadcrumbProvider>
      </BrowserRouter>
    );
    const homeLink = screen.getByTestId("home-link");
    const charactersLink = screen.getByTestId("characters-link");

    expect(homeLink).toBeInTheDocument();
    expect(charactersLink).toBeInTheDocument();
  });
});
