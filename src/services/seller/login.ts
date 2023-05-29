import AppDataSource from "../../data-source";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/appError";
import { Seller } from "../../entities";

import { ILogin } from "../../interfaces/user";

export const loginSellerService = async ({
  email,
  username,
  password,
}: ILogin) => {
  const userRepo = AppDataSource.getRepository(Seller);

  const user = await userRepo.findOneBy(
    {
      email: email,
    } || { username: username }
  );

  if (!user) throw new AppError("Invalid Data", 403);

  const passwordMatch = await compare(password!, user.password);

  if (!passwordMatch) throw new AppError("Invalid Data", 403);

  const token = jwt.sign({ adm: user.adm }, String(process.env.SECRET_KEY), {
    expiresIn: "3h",
    subject: user.id,
  });
  return { token: token };
};
