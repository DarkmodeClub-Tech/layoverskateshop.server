import { Router } from "express";

import {
  verifyDuplicatedCPF,
  verifyDuplicatedEmail,
  verifyDuplicatedUsername,
} from "../middlewares";
import {
  registerSellerController,
  loginSellerController,
} from "../controllers/seller.controllers";
import { Seller } from "../entities";

export const sellerRouter = Router();

sellerRouter.post(
  "/register",
  verifyDuplicatedUsername,
  verifyDuplicatedCPF,
  verifyDuplicatedEmail(Seller),
  registerSellerController
);

sellerRouter.post("/auth", loginSellerController);
