import { ServerError, JobApplication, NewJobApplication } from "../../shared/types.ts";
import type { NextFunction, Response, Request } from "express";
import express from "express";
import applicationService from "../services/jobApplicationService.ts";

const router = express.Router();

const validateNewJobApplication = (req: Request, _res: Response, next: NextFunction) => {
  NewJobApplication.parse(req.body);
  next();
};

// GET
router.get("/", async (_req, res: Response<JobApplication[]>) => {
  const data = await applicationService.getAll();
  res.json(data);
});

// GET :id
router.get("/:id", async (req, res: Response<JobApplication | ServerError>) => {
  const id = req.params.id;
  const data = await applicationService.getById(id);
  if (!data) {
    return res.status(404).json({ error: "no data with that id" });
  }
  return res.json(data);
});

// POST
router.post(
  "/",
  validateNewJobApplication,
  async (req: Request<unknown, unknown, NewJobApplication>, res: Response<JobApplication>) => {
    const addedApp = await applicationService.addNew(req.body);
    res.status(201).json(addedApp);
  },
);

export default router;
