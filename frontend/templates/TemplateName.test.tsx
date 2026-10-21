import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import TemplateName from "./TemplateName";

describe("<TemplateName />", () => {
  test("should mount", () => {
    render(<TemplateName />);

    const templateName = screen.getByTestId("TemplateName");

    expect(templateName).toBeInTheDocument();
  });
});
