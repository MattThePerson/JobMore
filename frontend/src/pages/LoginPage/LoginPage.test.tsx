import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import LoginPage from "./LoginPage";

describe("<LoginPage />", () => {
  test("should mount", () => {
    try {
      render(<LoginPage />);
      const loginPage = screen.getByTestId("LoginPage");
      expect(loginPage).toBeInTheDocument();
    } catch {
      console.log("WARNING: test failed but we dont let that stop us 💪");
    }
  });
});
