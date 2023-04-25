import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Customer } from "../entities";

export const customerIdValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customerRepo = AppDataSource.getRepository(Customer);
  const { id } = req.user;
  const account = await customerRepo.findOneBy({ id: id });
  const errorMessage = { message: "Not found" };

  if (!account) return res.status(404).json(errorMessage);

  return next();
};
