import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(501).end();
});

export default router;
