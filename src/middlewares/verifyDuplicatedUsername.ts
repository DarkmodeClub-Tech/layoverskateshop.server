import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities";

export const verifyDuplicatedUsername = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username }: User = req.body;

  const userRepo = AppDataSource.getRepository(User);

  const errorMessage = { message: "Username already being used!" };

  const usernameAlreadyBeingUsed = await userRepo.findOneBy({
    username: username,
  });

  if (usernameAlreadyBeingUsed) return res.status(409).json(errorMessage);

  return next();
};
