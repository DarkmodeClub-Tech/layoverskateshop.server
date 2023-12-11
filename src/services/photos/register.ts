import AppDataSource from "../../data-source";
import { Photo } from "../../entities";
import { TPhotosRegisterData } from "../../interfaces";

export const registerPhoto = async (data: TPhotosRegisterData) => {
  const photosRepo = AppDataSource.getRepository(Photo);
  const newPhoto = photosRepo.create(data);
  await photosRepo.save(newPhoto);
  return newPhoto;
};
