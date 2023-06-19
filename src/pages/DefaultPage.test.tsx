import React from "react";
import { render, screen } from "@testing-library/react";
import DefaultPage from "./DefaultPage";

test("renders the Welcome component", () => {
  render(<DefaultPage />);

  const welcomeComponent = screen.getByTestId("welcome-component");
  expect(welcomeComponent).toBeInTheDocument();
});
