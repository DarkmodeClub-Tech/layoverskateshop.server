import { uploadFileMiddleware } from "./fileUploader.middleware";
import { verifyDuplicatedCPF } from "./verifyDuplicatedCPF";
import { verifyDuplicatedEmail } from "./verifyDuplicatedEmail";
import { verifyDuplicatedUsername } from "./verifyDuplicatedUsername";

export {
  verifyDuplicatedEmail,
  verifyDuplicatedCPF,
  verifyDuplicatedUsername,
  uploadFileMiddleware,
};
