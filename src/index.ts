import express from "express";

const app = express();

app.get("/hello-there", (_req, res) => {
  res.json({ message: "General Kenobi!" });
});

app.listen("3003", () => {
  console.log("listening");
});
