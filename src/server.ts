import express from "express";
import config from "./util/config.ts";

const app = express();

app.get("/hello-there", (_req, res) => {
  res.json({ message: "General Kenobi!" });
});

app.listen(config.port, () => {
  console.log(`started server on port: '${config.port}'`);
});
