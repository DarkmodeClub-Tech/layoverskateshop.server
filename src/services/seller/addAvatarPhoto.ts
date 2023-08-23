import { instanceToPlain } from "class-transformer";
import AppDataSource from "../../data-source";
import { Seller } from "../../entities";
import { photoUploaderService } from "../photos";
import { getSellerDataService } from "./get";

export const addAvatarPhotoService = async (
  sellerId: string,
  file: Express.Multer.File
): Promise<Seller> => {
  const sellerRepo = AppDataSource.getRepository(Seller);
  let seller = await getSellerDataService(sellerId);
  const photo = await photoUploaderService([file]);
  seller.avatar = photo[0];
  sellerRepo.save(seller);
  seller = await getSellerDataService(seller.id);

  return instanceToPlain(seller) as Seller;
};
