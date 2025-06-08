import { Router } from "express";
import * as c from "../controllers/cart.controller";
import * as m from "../middlewares/";

export const cartRouter: Router = Router();

cartRouter.post(
  "/register",
  m.authenticationMiddleware,
  c.createCartController
);

cartRouter.post(
  "/products",
  m.authenticationMiddleware,
  c.insertProductsCartController
);
cartRouter.delete(
  "/remove",
  m.authenticationMiddleware,
  c.removeProductsFromCartController
);

export default cartRouter;
