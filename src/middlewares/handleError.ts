import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import { ZodError } from "zod";

const handleErrorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      message: error.message,
    });
    return;
  }

  if (error instanceof ZodError) {
    res.status(500).json({
      message: error.errors,
    });
    return;
  }

  res.status(500).json({
    message: "Internal server error",
  });
  return;
};

export default handleErrorMiddleware;
