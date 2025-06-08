import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const authenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    const errorMsg = {
      message: "Missing authorization token",
    };
    res.status(401).json(errorMsg);
    return;
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      res.status(401).json({
        message: "Invalid token",
        error: error,
      });
      return;
    }
    req.user = {
      id: decoded.sub,
      adm: decoded.adm,
    };
    return next();
  });
};
