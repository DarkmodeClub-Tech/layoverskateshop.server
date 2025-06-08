import AppDataSource from "../../data-source";
import { Photo, Product, Seller } from "../../entities";
import { ProductPackaging } from "../../entities/productPackaging.entity";
import { AppError } from "../../errors/appError";
import { TRegisterProductRequest } from "../../interfaces/product";
import { registerCategoryService } from "../category";
import { photoUploaderService } from "../photos";
import { getSellerDataByIdService } from "../seller";
import { retrieveProductService } from "./retrieve";

export const registerProductService = async (
  seller: Seller,
  data: TRegisterProductRequest,
  photos: Photo[]
): Promise<Product> => {
  const productRepo = AppDataSource.getRepository(Product);
  const packagingRepo = AppDataSource.getRepository(ProductPackaging);

  const productAlreadyExists = await productRepo.findOneBy({
    title: data.title,
  });

  if (productAlreadyExists) {
    throw new AppError("Product title already exists", 409);
  }

  const {
    title,
    category,
    price,
    promotionalPrice,
    stock_amount,
    max_installments,
    description,
    available_colors,
    available_sizes,
    packaging_type,
    box_height,
    box_length,
    box_weight,
    box_width,
  } = data;

  let packaging = new ProductPackaging();
  packaging.box_height = Number(box_height);
  packaging.box_length = Number(box_length);
  packaging.box_weight = Number(box_weight);
  packaging.box_width = Number(box_width);
  packaging.packaging_type = packaging_type;
  await packagingRepo.save(packaging);

  let product = new Product();
  product.title = title;
  product.price = Number(price);
  product.promotional_price = Number(promotionalPrice);
  product.stock_amount = Number(stock_amount);
  product.max_installments = Number(max_installments);
  product.description = description;
  product.available_sizes = available_sizes;
  product.available_colors = available_colors;
  product.seller = seller;
  product.packaging = packaging;
  product.photos = photos;

  product.category = await registerCategoryService(category);

  await productRepo.save(product);

  product = await retrieveProductService(product.id);

  return product;
};
