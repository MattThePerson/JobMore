import { Application, type NonEmptyArray } from "../../shared/types.ts";

const mockApps: NonEmptyArray<Application> = [
  {
    id: "9013",
    company: "Apple",
    status: "interested",
    dateAdded: "2026-01-01",
    position: "CEO",
  },
];

export default {
  mockApps,
};
