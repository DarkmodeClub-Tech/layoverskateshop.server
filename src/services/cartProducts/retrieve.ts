import AppDataSource from "../../data-source";
import { CartProduct } from "../../entities";
import { AppError } from "../../errors/appError";

export const retrieveCartProductService = async (
  cartProduct_id: string
): Promise<CartProduct> => {
  const cartProductRepo = AppDataSource.getRepository(CartProduct);
  const cartProduct = await cartProductRepo.findOneBy({ id: cartProduct_id });

  if (!cartProduct) throw new AppError("Not found.", 404);

  return cartProduct;
};
