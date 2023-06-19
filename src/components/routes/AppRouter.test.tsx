import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { api } from "../../api/api";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

test("renders home page by default", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <AppRouter />
    </MemoryRouter>
  );

  const defaultPageElement = screen.getByTestId("welcome-component");
  expect(defaultPageElement).toBeInTheDocument();
});

test("renders home page", () => {
  render(
    <MemoryRouter initialEntries={["/home"]}>
      <AppRouter />
    </MemoryRouter>
  );

  const homePageElement = screen.getByText("Go to the table");
  expect(homePageElement).toBeInTheDocument();
});

test("renders all characters page", async () => {
  render(
    <MemoryRouter initialEntries={["/characters"]}>
      <ApiProvider api={api}>
        <AppRouter />
      </ApiProvider>
    </MemoryRouter>
  );

  const allCharactersPageElement = screen.getByTestId("allCharacters");
  expect(allCharactersPageElement).toBeInTheDocument();
});

test("renders single character page", async () => {
  render(
    <MemoryRouter initialEntries={["/characters/1"]}>
      <ApiProvider api={api}>
        <AppRouter />
      </ApiProvider>
    </MemoryRouter>
  );

  const singleCharacterPageElement = screen.queryByTestId("single_character");
  expect(singleCharacterPageElement).toBeNull();
});
