import AppDataSource from "../../data-source";
import { Address } from "../../entities";
import { AppError } from "../../errors/appError";

export const retrieveAddressService = async (id: string): Promise<Address> => {
  const addressRepo = AppDataSource.getRepository(Address);
  const address = await addressRepo.findOneBy({ id });

  if (!address) throw new AppError("Not found", 404);

  return address;
};
