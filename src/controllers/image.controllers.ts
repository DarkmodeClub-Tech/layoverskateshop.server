import { Request, Response } from "express";
import * as s from "../services/photos";

export const photoUploaderController = async (req: Request, res: Response) => {
  const files: Express.Multer.File[] = req.files as Express.Multer.File[];
  const photos = await s.photoUploaderService(files);
  return res.status(201).json(photos);
};
