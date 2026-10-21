import { ServerError } from "../../shared/types.ts";
import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response<ServerError>,
  next: NextFunction,
) => {
  if (err instanceof z.ZodError) {
    console.log("detected: ZodError");
    res.status(400).json({
      error: z.prettifyError(err),
    });
  } else {
    next(err);
  }
};
