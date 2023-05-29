import AppDataSource from "../../data-source";
import { Address } from "../../entities";
import { retrieveAddressService } from "./retrieve";

export const registerAddressService = async (data: Address) => {
  const addressRepo = AppDataSource.getRepository(Address);

  let address = addressRepo.create(data);
  await addressRepo.save(address);
  address = await retrieveAddressService(address.id);

  return address;
};
