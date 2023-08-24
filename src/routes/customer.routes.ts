import { Router } from "express";
import { Customer } from "../entities";
import * as c from "../controllers/customer.controllers";
import * as m from "../middlewares";
import * as s from "../schemas/customer.schemas";

export const customerRouter = Router();

customerRouter.post(
  "/auth",
  m.validateRequestBodyMiddleware(s.loginCustomerRequestSchema),
  c.loginCustomerController
);
customerRouter.post(
  "/register",
  m.validateRequestBodyMiddleware(s.registerCustomerRequestSchema),
  m.verifyDuplicatedCPF(Customer),
  m.verifyDuplicatedEmail(Customer),
  m.verifyDuplicatedUsername(Customer),
  c.registerCustomerController
);
customerRouter.get(
  "/retrieve",
  m.authenticationMiddleware,
  m.userIdValidator(Customer),
  c.retrieveCustomerController
);
customerRouter.patch(
  "/update",
  m.authenticationMiddleware,
  m.validateRequestBodyMiddleware(s.updateCustomerRequestSchema.partial()),
  m.verifyDuplicatedCPF(Customer),
  m.verifyDuplicatedEmail(Customer),
  m.verifyDuplicatedUsername(Customer),
  m.userIdValidator(Customer),
  c.updateCustomerController
);
customerRouter.patch(
  "/deactivate",
  m.authenticationMiddleware,
  m.userIdValidator(Customer),
  c.deactivateAccountController
);
customerRouter.delete(
  "/destroy",
  m.authenticationMiddleware,
  m.userIdValidator(Customer),
  c.deleteAccountController
);
