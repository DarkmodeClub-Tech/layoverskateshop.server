import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { EntityTarget, ObjectLiteral } from "typeorm";
import { AppError } from "../errors/appError";

export const verifyDuplicatedEmail =
  (entity: EntityTarget<ObjectLiteral>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const userRepo = AppDataSource.getRepository(entity);

    const errorMessage = "Email already being used!";

    const emailAlreadyBeingUsed = await userRepo.findOneBy({ email: email });

    if (emailAlreadyBeingUsed) throw new AppError(errorMessage, 409);

    return next();
  };
