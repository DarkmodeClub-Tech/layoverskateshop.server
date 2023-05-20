import { v2 as cloudinaryV2 } from "cloudinary";
import * as fs from "fs";
import "dotenv/config";
import { AppError } from "../../errors/appError";
import { Photo } from "../../entities";
import AppDataSource from "../../data-source";

export const photoUploaderService = async (
  files: Express.Multer.File[]
): Promise<Photo[]> => {
  const photoRepo = AppDataSource.getRepository(Photo);
  const savedPhotos: Photo[] = [];

  for (const file of files) {
    const upload = await cloudinaryV2.uploader.upload(file!.path);
    const photo = photoRepo.create({
      public_id: upload.public_id,
      url: cloudinaryV2.url(upload.public_id),
    });
    await photoRepo.save(photo);

    savedPhotos.push(photo);
    fs.unlink(file!.path, (error) => {
      if (error) throw new AppError(error.message);
    });
  }

  return savedPhotos;
};
