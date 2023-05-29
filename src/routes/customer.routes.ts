import { Router } from "express";
import {
  deactivateAccountController,
  deleteAccountController,
  registerCustomerController,
  retrieveCustomerController,
  updateCustomerController,
  loginCustomerController,
} from "../controllers/customer.controllers";
import {
  verifyDuplicatedCPF,
  verifyDuplicatedEmail,
  verifyDuplicatedUsername,
} from "../middlewares";
import { authenticationMiddleware } from "../middlewares/authentication.middleware";
import { customerIdValidator } from "../middlewares/customerIDValidator.middleware";
import { validateRequestBodyMiddleware } from "../middlewares/validateRequestBody.middleware";
import {
  loginCustomerRequestSchema,
  registerCustomerRequestSchema,
  updateCustomerRequestSchema,
} from "../schemas/customer.schemas";
import { Customer } from "../entities";

export const customerRouter = Router();

customerRouter.post(
  "/auth",
  validateRequestBodyMiddleware(loginCustomerRequestSchema),
  loginCustomerController
);
customerRouter.post(
  "/register",
  validateRequestBodyMiddleware(registerCustomerRequestSchema),
  verifyDuplicatedCPF(Customer),
  verifyDuplicatedEmail(Customer),
  verifyDuplicatedUsername(Customer),
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
  validateRequestBodyMiddleware(updateCustomerRequestSchema.partial()),
  verifyDuplicatedCPF(Customer),
  verifyDuplicatedEmail(Customer),
  verifyDuplicatedUsername(Customer),
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
