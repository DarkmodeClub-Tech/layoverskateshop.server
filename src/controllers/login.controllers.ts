import { Request, Response } from "express";
import loginService from "../services/login";
import { ILogin } from "../services/login/interfaces";

export const loginController = async (req: Request, res: Response) => {
  const data: ILogin = req.body;
  const accessToken = await loginService(data);

  return res.status(200).json(accessToken);
};
