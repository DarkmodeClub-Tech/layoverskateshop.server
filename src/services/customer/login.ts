import AppDataSource from "../../data-source";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/appError";
import { Customer } from "../../entities";

import { ILogin } from "../../interfaces/user";

export const loginCustomerService = async ({
  email,
  username,
  password,
}: ILogin) => {
  const userRepo = AppDataSource.getRepository(Customer);

  const user = await userRepo.findOneBy({ email } || { username });

  if (!user) throw new AppError("Invalid Data", 403);

  const passwordMatch = await compare(password!, user.password);

  if (!passwordMatch) throw new AppError("Invalid Data", 403);

  const token = jwt.sign({ adm: user.is_adm }, String(process.env.SECRET_KEY), {
    expiresIn: "3h",
    subject: user.id,
  });
  return { token: token };
};
