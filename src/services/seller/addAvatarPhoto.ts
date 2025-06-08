import { instanceToPlain } from "class-transformer";
import AppDataSource from "../../data-source";
import { Seller } from "../../entities";
import { photoUploaderService } from "../photos";
import { getSellerDataByIdService } from "./get";

export const addAvatarPhotoService = async (
  sellerId: string,
  file: Express.Multer.File
): Promise<Seller> => {
  const sellerRepo = AppDataSource.getRepository(Seller);
  let seller = await getSellerDataByIdService(sellerId);
  const photo = await photoUploaderService([file], seller);
  seller.avatar = photo[0];
  sellerRepo.save(seller);
  seller = await getSellerDataByIdService(seller.id);

  return instanceToPlain(seller) as Seller;
};
