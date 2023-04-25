import { Request, Response } from "express";
import {
  registerUserService,
  updateUserService,
  deleteUserService,
  retrieveUserService,
  deactivateAccountService,
} from "../services/user";

export const registerUserController = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await registerUserService(data);

  return res.status(201).json(user);
};

export const retrieveUserController = async (req: Request, res: Response) => {
  const { id } = req.user;

  const user = await retrieveUserService(id);
  return res.status(200).json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const data = req.body;
  const updated_user = await updateUserService(id, data);

  return res.status(200).json(updated_user);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.user;
  await deleteUserService(id);

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
