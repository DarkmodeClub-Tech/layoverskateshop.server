import { Router } from "express";
import {
  deactivateAccountController,
  deleteAccountController,
  registerUserController,
  retrieveUserController,
  updateUserController,
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
  registerUserController
);
customerRouter.get(
  "/retrieve",
  authenticationMiddleware,
  customerIdValidator,
  retrieveUserController
);
customerRouter.patch(
  "/update",
  authenticationMiddleware,
  customerIdValidator,
  updateUserController
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
