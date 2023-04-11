import AppDataSource from "../../data-source";
import { User } from "../../entities";

export const deleteUserService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: id });

  if (!user) throw new Error("Not found");

  await userRepo.delete(user);

  return;
};
