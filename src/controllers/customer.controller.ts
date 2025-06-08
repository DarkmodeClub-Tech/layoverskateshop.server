import { Request, Response } from "express";
import * as s from "../services/customer";
import { ICustomer } from "../interfaces/customer";
import { ILogin } from "../interfaces/user";

export const loginCustomerController = async (req: Request, res: Response) => {
  const data: ILogin = req.body;
  const accessToken = await s.loginCustomerService(data);

  res.status(200).json(accessToken);
};

export const registerCustomerController = async (
  req: Request,
  res: Response
) => {
  const data: ICustomer = req.body;
  const user = await s.registerCustomerService(data);
  res.status(201).json(user);
};

export const retrieveCustomerController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.user;
  const user = await s.retrieveCustomerService(id);
  res.status(200).json(user);
};

export const updateCustomerController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const data = req.body;
  const updated_user = await s.updateCustomerService(id, data);

  res.status(200).json(updated_user);
};

export const deleteAccountController = async (req: Request, res: Response) => {
  const { id } = req.user;
  await s.deleteAccountService(id);
  res.status(204).send();
};

export const deactivateAccountController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.user;
  await s.deactivateAccountService(id);
  res.status(204).send();
};
