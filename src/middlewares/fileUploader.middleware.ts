import { Request } from "express";
import multer from "multer";
import { AppError } from "../errors/appError";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (request, file, callback) => {
    const filename = `${file.originalname}`;
    return callback(null, filename);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback
) => {
  const fileName = file.originalname.split(".");
  const fileExtension = fileName.pop()?.toLowerCase() as string;
  const allowedExtensions = ["png", "jpeg", "jpg", "gif"];

  if (!allowedExtensions.includes(fileExtension)) {
    return callback(
      new AppError(`This file extension is invalid ${fileExtension}`)
    );
  }
  return callback(null, true);
};

export const uploadFileMiddleware = multer({
  storage: storage,
  fileFilter: fileFilter,
});
