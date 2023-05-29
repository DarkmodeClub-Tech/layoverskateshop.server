import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { EntityTarget, ObjectLiteral } from "typeorm";

export const verifyDuplicatedEmail =
  (entity: EntityTarget<ObjectLiteral>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const userRepo = AppDataSource.getRepository(entity);

    const errorMessage = { message: "Email already being used!" };

    const emailAlreadyBeingUsed = await userRepo.findOneBy({ email: email });

    if (emailAlreadyBeingUsed) return res.status(409).json(errorMessage);

    return next();
  };
