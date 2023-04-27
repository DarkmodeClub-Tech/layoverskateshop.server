import multer from "multer";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (request, file, callback) => {
    const filename = `${file.originalname}`;
    return callback(null, filename);
  },
});

export const uploadFileMiddleware = multer({ storage: storage });
