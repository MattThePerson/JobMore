import express from "express";
import config from "./util/config.ts";
import jobApplicationRouter from "./routers/jobApplicationRouter.ts";
import { errorMiddleware } from "./util/middleware.ts";

const app = express();

app.use(express.json());
app.use(express.static(config.frontendPath));

app.get("/health-check", (_req, res) => {
  // TODO: add operational checks, eg. make backend request
  res.json({ message: "I'm healthy, bro" });
});

app.use("/api/job-applications", jobApplicationRouter);

app.use(errorMiddleware);

export default app;
