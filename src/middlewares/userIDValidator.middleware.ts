import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { EntityTarget, ObjectLiteral } from "typeorm";

export const userIdValidator =
  (entity: EntityTarget<ObjectLiteral>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const userRepo = AppDataSource.getRepository(entity);
    const { id } = req.user;
    const account = await userRepo.findOneBy({ id: id });
    const errorMessage = { message: "Not found" };

    if (!account) return res.status(404).json(errorMessage);

    return next();
  };
