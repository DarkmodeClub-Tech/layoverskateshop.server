import { authenticationMiddleware } from "./authentication.middleware";
import { uploadFileMiddleware } from "./fileUploader.middleware";
import { userIdValidator } from "./userIDValidator.middleware";
import { validateRequestBodyMiddleware } from "./validateRequestBody.middleware";
import { verifyDuplicatedCPF } from "./verifyDuplicatedCPF";
import { verifyDuplicatedEmail } from "./verifyDuplicatedEmail";
import { verifyDuplicatedUsername } from "./verifyDuplicatedUsername";
import { verifyAdmPermissionMiddleware } from "./verifySellerPermission.middlewares";

export {
  verifyDuplicatedEmail,
  verifyDuplicatedCPF,
  verifyDuplicatedUsername,
  uploadFileMiddleware,
  authenticationMiddleware,
  validateRequestBodyMiddleware,
  verifyAdmPermissionMiddleware,
  userIdValidator,
};
