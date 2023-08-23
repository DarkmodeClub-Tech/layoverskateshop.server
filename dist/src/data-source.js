"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
const e = __importStar(require("./entities"));
const m = __importStar(require("./migrations"));
const AppDataSource = new typeorm_1.DataSource(process.env.NODE_ENV === "production"
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        synchronize: false,
        logging: true,
        entities: [
            e.User,
            e.Customer,
            e.Seller,
            e.Address,
            e.Cart,
            e.Order,
            e.Product,
            e.Category,
            e.Photo,
            e.CartProduct,
        ],
        migrations: [
            m.InitialMigration1682346444041,
            m.CreateTables1684524108180,
            m.AlterTables1685395288009,
            m.AddDescriptionFieldToProduct1685473703904,
            m.AlterTables1692741016765,
            m.AlterTables1687388606344,
            m.AlterTables1692758943041,
        ],
    }
    : // : process.env.NODE_ENV === "test"
        // ? {
        //     type: "sqlite",
        //     database: ":memory:",
        //     synchronize: true,
        //     entities: [
        //       e.User,
        //       e.Customer,
        //       e.Seller,
        //       e.Address,
        //       e.Cart,
        //       e.Order,
        //       e.Product,
        //       e.Category,
        //       e.Photo,
        //       e.CartProduct,
        //     ],
        //     migrations: [
        //       m.InitialMigration1682346444041,
        //       m.CreateTables1684524108180,
        //       m.AlterTables1685395288009,
        //       m.AddDescriptionFieldToProduct1685473703904,
        //       m.AlterTables1687388606344,
        //       m.AlterTables1692741016765,
        //       m.AlterTables1692758943041
        //
        //     ],
        //   }
        {
            type: "postgres",
            host: process.env.DB_HOST,
            port: 5432,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            logging: true,
            synchronize: false,
            entities: [
                e.User,
                e.Customer,
                e.Seller,
                e.Address,
                e.Cart,
                e.Order,
                e.Product,
                e.Category,
                e.Photo,
                e.CartProduct,
            ],
            migrations: [
                m.InitialMigration1682346444041,
                m.CreateTables1684524108180,
                m.AlterTables1685395288009,
                m.AddDescriptionFieldToProduct1685473703904,
                m.AlterTables1687388606344,
                m.AlterTables1692741016765,
                m.AlterTables1692758943041,
            ],
        });
exports.default = AppDataSource;
