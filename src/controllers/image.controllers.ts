import { Request, Response } from "express";
import { photoUploaderService } from "../services/photos";

export const photoUploaderController = async (req: Request, res: Response) => {
  const files: Express.Multer.File[] = req.files as Express.Multer.File[];
  const photos = await photoUploaderService(files);
  return res.status(201).json(photos);
};
