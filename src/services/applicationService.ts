import type { Application } from "../../shared/types.ts";
import data from "../mockData/applicationData.ts";

// eslint-disable-next-line @typescript-eslint/require-await
const getAll = async (): Promise<Application[]> => {
  return data;
};

// eslint-disable-next-line @typescript-eslint/require-await
const getById = async (id: string): Promise<Application | undefined> => {
  const application = data.find((app) => app.id === id);
  return application;
};

export default {
  getAll,
  getById,
};
