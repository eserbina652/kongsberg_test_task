import { render, screen } from "@testing-library/react";
import { BreadcrumbProvider } from "./hooks/useBreadcrumbContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("APP TEST", () => {
  render(
    <BrowserRouter>
      <BreadcrumbProvider>
        <App />
      </BreadcrumbProvider>
    </BrowserRouter>
  );

  const navBar = screen.getByTestId("navbar");
  const breadcrumb = screen.getByTestId("breadcrumb-wrap");
  const appRouter = screen.getByTestId("app-routes");

  expect(navBar).toBeInTheDocument();
  expect(breadcrumb).toBeInTheDocument();
  expect(appRouter).toBeInTheDocument();
});
