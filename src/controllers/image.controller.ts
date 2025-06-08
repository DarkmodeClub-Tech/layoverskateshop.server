import { Request, Response } from "express";
import * as s from "../services/photos";
import { getSellerDataByIdService } from "../services";

export const photoUploaderController = async (req: Request, res: Response) => {
  const sellerId = req.user.id;
  const files: Express.Multer.File[] = req.files as Express.Multer.File[];

  const seller = await getSellerDataByIdService(sellerId);
  const photos = await s.photoUploaderService(files, seller);
  return res.status(201).json(photos);
};
