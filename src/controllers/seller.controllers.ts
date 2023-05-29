import { Request, Response } from "express";
import { registerSellerService, loginSellerService } from "../services/seller";

export const registerSellerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const newSeller = await registerSellerService(data);
  return res.status(201).json(newSeller);
};

export const loginSellerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const accessToken = await loginSellerService(data);
  return res.status(200).json(accessToken);
};
