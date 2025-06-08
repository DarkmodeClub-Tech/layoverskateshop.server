import "dotenv/config";
import { v2 as cloudinaryV2 } from "cloudinary";
import * as fs from "fs";
import { AppError } from "../../errors/appError";
import { Photo, Product, Seller } from "../../entities";
import { registerPhoto } from "./register";

export const photoUploaderService = async (
  files: Express.Multer.File[],
  owner: Seller,
  product?: Product
): Promise<Photo[]> => {
  const savedPhotos: Photo[] = [];

  for (const file of files) {
    const upload = await cloudinaryV2.uploader.upload(file!.path);
    const { public_id } = upload;
    const url = cloudinaryV2.url(upload.public_id);
    console.log(upload, "upload");

    const photo = await registerPhoto({
      public_id,
      url,
      owner,
      product,
    });

    console.log(photo, "photo");

    savedPhotos.push(photo);
    console.log(savedPhotos, "photos");

    fs.unlink(file!.path, (error) => {
      if (error) throw new AppError(error.message);
    });
  }

  return savedPhotos;
};
