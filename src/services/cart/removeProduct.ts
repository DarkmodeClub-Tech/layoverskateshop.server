import AppDataSource from "../../data-source";
import { Cart, CartProduct } from "../../entities";
import { AppError } from "../../errors/appError";
import { deleteCartProductService } from "../cartProducts/delete";
import { retrieveCartProductService } from "../cartProducts/retrieve";
import { retrieveCartService } from "./retrieve";

export const removeProductsFromCartService = async (
  cart: Cart,
  cartProducts_ids: string[]
): Promise<Cart> => {
  for (const cp_id of cartProducts_ids) {
    const cps: CartProduct[] = cart.products;
    let cp: CartProduct = await retrieveCartProductService(cp_id);

    if (cps.includes(cp)) await deleteCartProductService(cp_id);
    else throw new AppError(`Product is not in cart`);
  }
  const c: Cart = await retrieveCartService(cart.id);

  return c;
};
