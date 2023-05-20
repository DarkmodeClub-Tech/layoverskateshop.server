import { Router } from "express";
import {
  deactivateAccountController,
  deleteAccountController,
  registerCustomerController,
  retrieveCustomerController,
  updateCustomerController,
} from "../controllers/customer.controllers";
import {
  verifyDuplicatedCPF,
  verifyDuplicatedEmail,
  verifyDuplicatedUsername,
} from "../middlewares";
import { authenticationMiddleware } from "../middlewares/authentication.middleware";
import { customerIdValidator } from "../middlewares/customerIDValidator.middleware";

export const customerRouter = Router();

customerRouter.post(
  "/register",
  verifyDuplicatedCPF,
  verifyDuplicatedEmail,
  verifyDuplicatedUsername,
  registerCustomerController
);
customerRouter.get(
  "/retrieve",
  authenticationMiddleware,
  customerIdValidator,
  retrieveCustomerController
);
customerRouter.patch(
  "/update",
  authenticationMiddleware,
  customerIdValidator,
  updateCustomerController
);
customerRouter.patch(
  "/deactivate",
  authenticationMiddleware,
  customerIdValidator,
  deactivateAccountController
);
customerRouter.delete(
  "/destroy",
  authenticationMiddleware,
  customerIdValidator,
  deleteAccountController
);
