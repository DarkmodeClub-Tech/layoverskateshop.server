import AppDataSource from "../../data-source";
import { Product } from "../../entities";

export const retrieveProductService = async (
  product_id: string
): Promise<Product> => {
  const productRepo = AppDataSource.getRepository(Product);
  const product = await productRepo.findOneBy({ id: product_id });
  return product as Product;
};
