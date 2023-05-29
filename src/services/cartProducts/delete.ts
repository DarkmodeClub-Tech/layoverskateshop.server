import AppDataSource from "../../data-source";
import { CartProduct } from "../../entities";
import { retrieveCartProductService } from "./retrieve";

export const deleteCartProductService = async (
  cartProduc_id: string
): Promise<void> => {
  const cartProduct = await retrieveCartProductService(cartProduc_id);
  const cartProductRepo = AppDataSource.getRepository(CartProduct);
  await cartProductRepo.delete(cartProduct.id);
  return;
};
