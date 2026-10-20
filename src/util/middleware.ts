import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const errorMiddleware = (err: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (err instanceof z.ZodError) {
    res.status(401).json({ error: err.issues });
  } else {
    next(err);
  }
};
