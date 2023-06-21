import { v2 as cloudinaryV2 } from "cloudinary";
import * as fs from "fs";
import "dotenv/config";
import { AppError } from "../../errors/appError";
import { Photo } from "../../entities";
import AppDataSource from "../../data-source";

export const photoDestroyerService = async (id: string): Promise<void> => {
  const photoRepo = AppDataSource.getRepository(Photo);
  const photo = (await photoRepo.findOneBy({ id })) as Photo;
  await cloudinaryV2.uploader.destroy(photo?.public_id);
  await photoRepo.delete(photo.id);

  return;
};
