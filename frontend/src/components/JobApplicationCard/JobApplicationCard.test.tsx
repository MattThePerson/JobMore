import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import JobApplicationCard from "./JobApplicationCard";
import { JobApplication } from "../../../../shared/types";

const mockJobApp: JobApplication = {
  id: "1",
  company: "Mickye Mouse",
  position: "Cleaner",
  status: "declined",
  dateAdded: "2020-01-02",
};

describe("<JobApplicationCard />", () => {
  test("should mount", () => {
    render(<JobApplicationCard data={mockJobApp} />);

    const jobApplicationDashboardCard = screen.getByTestId("JobApplicationCard");

    expect(jobApplicationDashboardCard).toBeInTheDocument();
  });
});
