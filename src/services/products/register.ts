import AppDataSource from "../../data-source";
import { Product } from "../../entities";
import { TRegisterProductRequest } from "../../interfaces/product";
import { registerCategoryService } from "../category";
import { photoUploaderService } from "../photos";
import { getSellerDataService } from "../seller";
import { retrieveProductService } from "./retrieve";

export const registerProductService = async (
  sellerId: string,
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
    available_colors,
    available_sizes,
  } = data;

  let product = new Product();
  product.title = title;
  product.price = Number(price);
  product.stock_amount = Number(stock_amount);
  product.max_installments = Number(max_installments);
  product.description = description;
  product.available_sizes = available_sizes;
  product.available_colors = available_colors;
  product.category = await registerCategoryService(category);
  product.photos = await photoUploaderService(photos);
  product.seller = await getSellerDataService(sellerId);
  await productRepo.save(product);

  product = await retrieveProductService(product.id);

  return product;
};
