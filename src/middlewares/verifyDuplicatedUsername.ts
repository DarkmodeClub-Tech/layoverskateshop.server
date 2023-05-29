import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities";
import { EntityTarget, ObjectLiteral } from "typeorm";

export const verifyDuplicatedUsername =
  (entity: EntityTarget<ObjectLiteral>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { username }: User = req.body;

    const userRepo = AppDataSource.getRepository(entity);

    const errorMessage = { message: "Username already being used!" };

    const usernameAlreadyBeingUsed = await userRepo.findOneBy({
      username: username,
    });

    if (usernameAlreadyBeingUsed) return res.status(409).json(errorMessage);

    return next();
  };
