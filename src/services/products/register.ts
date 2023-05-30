import AppDataSource from "../../data-source";
import { Product } from "../../entities";
import { TRegisterProductRequest } from "../../interfaces/product";
import { registerCategoryService } from "../category";
import { photoUploaderService } from "../photos";
import { retrieveProductService } from "./retrieve";

export const registerProductService = async (
  data: TRegisterProductRequest,
  photos: Express.Multer.File[]
): Promise<Product> => {
  const productRepo = AppDataSource.getRepository(Product);

  const {
    title,
    category,
    price,
    stock_amount,
    max_installments,
    description,
  } = data;

  let product = new Product();
  product.title = title;
  product.price = Number(price);
  product.stock_amount = Number(stock_amount);
  product.max_installments = Number(max_installments);
  product.description = description;
  product.category = await registerCategoryService(category);
  product.photos = await photoUploaderService(photos);

  await productRepo.save(product);

  product = await retrieveProductService(product.id);

  return product;
};
