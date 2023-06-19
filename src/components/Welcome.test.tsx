import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("renders the Welcome component", () => {
  render(<Welcome />);

  const welcomeComponent = screen.getByTestId("welcome-component");
  expect(welcomeComponent).toBeInTheDocument();
});

test("displays the correct welcome text", () => {
  render(<Welcome />);

  const welcomeText = screen.getByText(
    /WELCOME TO MY TEST TASK FROM Kongsberg Maritime!/i
  );
  expect(welcomeText).toBeInTheDocument();
});

test("displays the thank you text", () => {
  render(<Welcome />);

  const thankYouText = screen.getByText(
    /Thank you beforehand for your attention!/i
  );
  expect(thankYouText).toBeInTheDocument();
});
