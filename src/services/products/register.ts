import AppDataSource from "../../data-source";
import { Product, Category } from "../../entities";
import { photoUploaderService } from "../photos";
import { retrieveProductService } from "./retrieve";

export const registerProductService = async (
  data: Product,
  photos: Express.Multer.File[]
): Promise<Product> => {
  const productRepo = AppDataSource.getRepository(Product);
  const categoryRepo = AppDataSource.getRepository(Category);

  let productInstance = productRepo.create(data);
  productInstance.category = categoryRepo.create(data.category);
  productInstance.photos = await photoUploaderService(photos);

  await productRepo.save(productInstance);

  productInstance = await retrieveProductService(productInstance.id);

  return productInstance;
};
