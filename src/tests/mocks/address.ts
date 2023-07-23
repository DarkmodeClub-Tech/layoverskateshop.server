import { Address } from "../../entities";
import { TRegisterAddressReq } from "../../interfaces/address";

export const registerAddressMock: TRegisterAddressReq = {
  cep: "00000000",
  street: "testing",
  number: 1255,
  complement: "",
  district: "malvinas",
  state: "PB",
  city: "campina grande",
};
