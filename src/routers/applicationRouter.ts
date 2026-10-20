import type { ServerError, Application } from "../../shared/types.ts";
import express, { type Response } from "express";
import applicationService from "../services/applicationService.ts";

const router = express.Router();

router.get("/", async (_req, res: Response<Application[]>) => {
  const data = await applicationService.getAll();
  res.json(data);
});

router.get("/:id", async (req, res: Response<Application | ServerError>) => {
  const id = req.params.id;
  const data = await applicationService.getById(id);
  if (!data) {
    return res.status(404).json({ error: "no data with that id" });
  }
  return res.json(data);
});

export default router;
