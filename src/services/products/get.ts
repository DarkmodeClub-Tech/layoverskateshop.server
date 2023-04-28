import AppDataSource from "../../data-source";
import { Product } from "../../entities";

export const getProductsService = async (
  offset: number,
  limit: number
): Promise<Product[]> => {
  const productRepo = AppDataSource.getRepository(Product);
  const products = await productRepo.find({ skip: offset, take: limit });
  return products;
};
