import AppDataSource from "../../data-source";
import { Photo, Product, Seller } from "../../entities";
import { AppError } from "../../errors/appError";
import { TPhotosRegisterData } from "../../interfaces";

export const registerPhoto = async (data: TPhotosRegisterData) => {
  const { public_id, url, owner, product } = data;
  if (!owner) throw new AppError("owner is required", 400);

  const photosRepo = AppDataSource.getRepository(Photo);

  let newPhoto = photosRepo.create({
    public_id,
    url,
    owner,
    product,
  });
  await photosRepo.save(newPhoto);

  return newPhoto;
};
