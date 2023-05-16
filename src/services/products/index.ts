import { deleteProductService } from "./destroy";
import { getProductsService } from "./get";
import { registerProductService } from "./register";
import { retrieveProductService } from "./retrieve";
import { deactivateProductAddService } from "./softdelete";
import { updateProductService } from "./update";

export {
  registerProductService,
  updateProductService,
  getProductsService,
  retrieveProductService,
  deactivateProductAddService,
  deleteProductService,
};
