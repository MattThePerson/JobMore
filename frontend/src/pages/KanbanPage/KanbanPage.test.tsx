import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import KanbanPage from "./KanbanPage";

describe("<KanbanPage />", () => {
  test("should mount", () => {
    render(<KanbanPage />);

    const kanbanPage = screen.getByTestId("KanbanPage");

    expect(kanbanPage).toBeInTheDocument();
  });
});
