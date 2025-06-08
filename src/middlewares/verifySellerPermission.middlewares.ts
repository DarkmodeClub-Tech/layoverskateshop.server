import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export const verifyAdmPermissionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { adm } = req.user;
  const errorMessage = "You do not have permission to perform this action";
  if (!adm) throw new AppError(errorMessage, 406);

  return next();
};
