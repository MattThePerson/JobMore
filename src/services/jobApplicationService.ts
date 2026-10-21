import type { JobApplication, NewJobApplication } from "../../shared/types.ts";
import dataImport from "../../mockData/applicationData.ts";
import { v4 as uuid } from "uuid";

let D = dataImport;

// eslint-disable-next-line @typescript-eslint/require-await
const getAll = async (): Promise<JobApplication[]> => {
  return D;
};

// eslint-disable-next-line @typescript-eslint/require-await
const getById = async (id: string): Promise<JobApplication | undefined> => {
  const application = D.find((app) => app.id === id);
  return application;
};

// eslint-disable-next-line @typescript-eslint/require-await
const addNew = async (app: NewJobApplication): Promise<JobApplication> => {
  const added: JobApplication = {
    id: uuid(),
    dateAdded: new Date().toISOString().slice(0, 10),
    ...app,
  };
  D = D.concat(added);
  return added;
};

// eslint-disable-next-line @typescript-eslint/require-await
const deleteById = async (id: string) => {
  console.log(id);
};

// eslint-disable-next-line @typescript-eslint/require-await
const deleteManyById = async (ids: string[]) => {
  for (const id of ids) {
    D = D.filter((x) => x.id !== id);
  }
};

// eslint-disable-next-line @typescript-eslint/require-await
const _deleteAll = async () => {
  if (process.env.NODE_ENV === "test") {
    console.log("deleting all applications");
    D = [];
  }
};

// eslint-disable-next-line @typescript-eslint/require-await
const _addMany = async (apps: JobApplication[]) => {
  for (const app of apps) {
    D = D.concat(app);
  }
};

export default {
  getAll,
  getById,
  addNew,
  deleteById,
  deleteManyById,
  _deleteAll,
  _addMany,
};
