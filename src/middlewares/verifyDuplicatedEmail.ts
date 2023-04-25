import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities";

export const verifyDuplicatedEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email }: User = req.body;

  const userRepo = AppDataSource.getRepository(User);

  const errorMessage = { message: "Email already being used!" };

  const emailAlreadyBeingUsed = await userRepo.findOneBy({ email: email });

  if (emailAlreadyBeingUsed) return res.status(409).json(errorMessage);

  return next();
};
