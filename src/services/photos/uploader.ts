import { v2 as cloudinaryV2 } from "cloudinary";
import * as fs from "fs";
import "dotenv/config";
import { AppError } from "../../errors/appError";
import { Photo } from "../../entities";
import AppDataSource from "../../data-source";
export interface IPhoto {
  id: string;
  url: string;
}

export const photoUploaderService = async (
  files: Express.Multer.File[],
  product_id: string
): Promise<Photo[]> => {
  const photoRepo = AppDataSource.getRepository(Photo);

  for (const file of files) {
    const upload = await cloudinaryV2.uploader.upload(file!.path);

    const photo = photoRepo.create({
      public_id: upload.public_id,
      url: cloudinaryV2.url(upload.public_id),
    });
    await photoRepo.save(photo);

    fs.unlink(file!.path, (error) => {
      if (error) throw new AppError(error.message);
    });
  }

  const savedPhotos = await photoRepo.find({
    relations: { product: true },
    where: { product: { id: product_id } },
  });
  return savedPhotos;
};
