import { Request, Response, NextFunction } from "express";

export const verifyAdmPermissionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { adm } = req.user;

  if (!adm)
    return res
      .status(403)
      .json({ message: "You do not have permission to perform this action" });

  return next();
};
