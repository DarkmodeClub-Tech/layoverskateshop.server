import { Request, Response } from "express";
import {
  registerCustomerService,
  updateCustomerService,
  retrieveCustomerService,
  deactivateAccountService,
  deleteAccountService,
} from "../services/customer";
import { ICustomer } from "../interfaces/customer";

export const registerCustomerController = async (
  req: Request,
  res: Response
) => {
  const data: ICustomer = req.body;
  const user = await registerCustomerService(data);
  return res.status(201).json(user);
};

export const retrieveCustomerController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.user;
  const user = await retrieveCustomerService(id);
  return res.status(200).json(user);
};

export const updateCustomerController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const data = req.body;
  const updated_user = await updateCustomerService(id, data);

  return res.status(200).json(updated_user);
};

export const deleteAccountController = async (req: Request, res: Response) => {
  const { id } = req.user;
  await deleteAccountService(id);
  return res.status(204).send();
};

export const deactivateAccountController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.user;
  await deactivateAccountService(id);
  return res.status(204).send();
};
