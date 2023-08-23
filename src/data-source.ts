import "dotenv/config";

import { DataSource } from "typeorm";
import * as e from "./entities";
import * as m from "./migrations";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "production"
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
      }
);

export default AppDataSource;
