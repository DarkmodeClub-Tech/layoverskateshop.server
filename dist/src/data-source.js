"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
const dataSourceConfig = () => {
    const entityPath = path_1.default.join(__dirname, "./entities/**.{ts,js}");
    const migrationPath = path_1.default.join(__dirname, "./migrations/**.{ts,js}");
    //demo-M4-T18[WSL:Ubuntu]/src/entities/**.{ts,js} */
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
        throw new Error('Missing env: var "DATABASE_URL"');
    }
    return {
        type: "postgres",
        url: dbUrl,
        logging: true,
        entities: [entityPath],
        migrations: [migrationPath],
        ssl: { rejectUnauthorized: false },
        synchronize: false,
    };
};
const AppDataSource = new typeorm_1.DataSource(dataSourceConfig());
exports.default = AppDataSource;
