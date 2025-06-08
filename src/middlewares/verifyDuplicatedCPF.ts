import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Customer, Seller, User } from "../entities";
import { EntityTarget, ObjectLiteral } from "typeorm";
import { AppError } from "../errors/appError";

export const verifyDuplicatedCPF =
  (entity: EntityTarget<ObjectLiteral>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { cpf }: User = req.body;

    const userRepo = AppDataSource.getRepository(entity);

    const errorMessage = "CPF already being used!";

    const cpfAlreadyBeingUsed = await userRepo.findOneBy({ cpf: cpf });

    if (cpfAlreadyBeingUsed) throw new AppError(errorMessage, 409);

    next();
    return;
  };
