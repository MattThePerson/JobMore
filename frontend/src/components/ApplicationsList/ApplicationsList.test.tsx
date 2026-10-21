import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ApplicationsList from "./ApplicationsList";

describe("<ApplicationsList />", () => {
  test("should mount", () => {
    render(<ApplicationsList />);

    const applicationsList = screen.getByTestId("ApplicationsList");

    expect(applicationsList).toBeInTheDocument();
  });
});
