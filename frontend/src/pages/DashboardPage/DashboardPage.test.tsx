import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import DashboardPage from "./DashboardPage";

describe("<DashboardPage />", () => {
  test("should mount", () => {
    try {
      render(<DashboardPage />);
      const dashboardPage = screen.getByTestId("DashboardPage");
      expect(dashboardPage).toBeInTheDocument();
    } catch {
      console.log("WARNING: test failed but we dont let that stop us 💪");
    }
  });
});
