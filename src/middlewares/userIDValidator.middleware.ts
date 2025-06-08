import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { EntityTarget, ObjectLiteral } from "typeorm";
import { AppError } from "../errors/appError";

export const userIdValidator =
  (entity: EntityTarget<ObjectLiteral>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const userRepo = AppDataSource.getRepository(entity);
    const { id } = req.user;
    const account = await userRepo.findOneBy({ id: id });
    const errorMessage = "Not found";

    if (!account) throw new AppError(errorMessage, 404);

    return next();
  };
