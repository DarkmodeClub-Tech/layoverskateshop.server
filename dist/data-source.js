"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
const entities_1 = require("./entities");
const migrations_1 = require("./migrations");
const AppDataSource = new typeorm_1.DataSource(process.env.NODE_ENV === "production"
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        synchronize: false,
        logging: true,
        entities: [
            entities_1.User,
            entities_1.Customer,
            entities_1.Seller,
            entities_1.Address,
            entities_1.Cart,
            entities_1.Order,
            entities_1.Product,
            entities_1.Category,
            entities_1.Photo,
            entities_1.CartProduct,
        ],
        migrations: [migrations_1.InitialMigration1682346444041, migrations_1.CreateTables1684524108180],
    }
    : {
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [
            entities_1.User,
            entities_1.Customer,
            entities_1.Seller,
            entities_1.Address,
            entities_1.Cart,
            entities_1.Order,
            entities_1.Product,
            entities_1.Category,
            entities_1.Photo,
            entities_1.CartProduct,
        ],
        migrations: [migrations_1.InitialMigration1682346444041, migrations_1.CreateTables1684524108180],
    });
exports.default = AppDataSource;
