import { JobApplication } from "../../../shared/types.ts";

const BASE_URL = "/api/job-applications";

const getAll = async (): Promise<JobApplication[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw Error("unable to fetch all apps");
  }
  return await res.json();
};

export default {
  getAll,
};
