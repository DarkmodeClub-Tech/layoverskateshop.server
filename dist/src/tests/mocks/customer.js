"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCustomerMock = void 0;
const address_1 = require("./address");
exports.registerCustomerMock = {
    username: "TesterOne",
    first_name: "Tester",
    last_name: "Testing",
    cpf: "01234567890",
    email: "testertesting@mail.com",
    phone: "0000000000",
    password: "12345678",
    address: address_1.registerAddressMock,
};
//  registerCustomerMock.address.
