"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../../data-source"));
const customer_1 = require("../../../services/customer");
const customer_2 = require("../../mocks/customer");
describe("Register a new Customer", () => {
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.default.initialize()
            .then((res) => (connection = res))
            .catch((err) => {
            console.error("Error during Data Source initialization", err);
        });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.destroy();
    }));
    test("Should insert the Customer data into the database", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        const retrievedCustomer = yield (0, customer_1.retrieveCustomerService)(newCustomer.id);
        expect(newCustomer).toEqual(retrievedCustomer);
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    const customerProperties = [
        "id",
        "username",
        "first_name",
        "last_name",
        "email",
        "cpf",
        "phone",
        "is_active",
        "last_login",
        "last_logout",
        "created_at",
        "updated_at",
        "address",
        "cart",
    ];
    test("Should have the property id", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("id");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property username", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("username");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property first_name", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("first_name");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property last_name", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("last_name");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property last_name", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("last_name");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property email", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("email");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property cpf", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("cpf");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property phone", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("phone");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property is_active", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("is_active");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property last_login", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("last_login");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property last_logout", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("last_logout");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property created_at", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("created_at");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property updated_at", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("updated_at");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property address", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("address");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should have the property cart", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).toHaveProperty("cart");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
    test("Should not have the property password", () => __awaiter(void 0, void 0, void 0, function* () {
        const newCustomer = yield (0, customer_1.registerCustomerService)(customer_2.registerCustomerMock);
        expect(newCustomer).not.toHaveProperty("password");
        yield (0, customer_1.deleteAccountService)(newCustomer.id);
    }));
});
