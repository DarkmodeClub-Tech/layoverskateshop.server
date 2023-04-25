import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities";

export const verifyDuplicatedCPF = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cpf }: User = req.body;

  const userRepo = AppDataSource.getRepository(User);

  const errorMessage = { message: "CPF already being used!" };

  const cpfAlreadyBeingUsed = await userRepo.findOneBy({ cpf: cpf });

  if (cpfAlreadyBeingUsed) return res.status(409).json(errorMessage);

  return next();
};
