import express from "express";
import config from "./util/config.ts";
import applicationRouter from "./routers/applicationRouter.ts";

const app = express();

app.use(express.static(config.frontendPath));

app.get("/health-check", (_req, res) => {
  // TODO: add operational checks, eg. make backend request
  res.json({ message: "I'm healthy, bro" });
});

app.use("/api/apps", applicationRouter);

export default app;
