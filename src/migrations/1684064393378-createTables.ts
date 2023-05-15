import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1684064393378 implements MigrationInterface {
    name = 'CreateTables1684064393378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying(8) NOT NULL, "street" character varying(120) NOT NULL, "number" integer, "complement" character varying(20), "district" character varying(120) NOT NULL, "city" character varying(120) NOT NULL, "state" character varying(120) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(80) NOT NULL, "first_name" character varying(80) NOT NULL, "last_name" character varying(80) NOT NULL, "email" character varying(120) NOT NULL, "password" character varying(150) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(14) NOT NULL, "is_adm" boolean NOT NULL DEFAULT false, "is_active" boolean NOT NULL DEFAULT true, "last_login" TIMESTAMP NOT NULL DEFAULT now(), "last_logout" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(80) NOT NULL, "first_name" character varying(80) NOT NULL, "last_name" character varying(80) NOT NULL, "email" character varying(120) NOT NULL, "password" character varying(150) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(14) NOT NULL, "is_adm" boolean NOT NULL DEFAULT false, "is_active" boolean NOT NULL DEFAULT true, "last_login" TIMESTAMP NOT NULL DEFAULT now(), "last_logout" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, "cartId" uuid, CONSTRAINT "REL_cca5fdc20671318f60dca2cfb6" UNIQUE ("cartId"), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "productsId" uuid, "ordersId" uuid, CONSTRAINT "PK_3e59f094c2dc3310d585216a813" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "active" boolean DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "customerId" uuid, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sellers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(80) NOT NULL, "first_name" character varying(80) NOT NULL, "last_name" character varying(80) NOT NULL, "email" character varying(120) NOT NULL, "password" character varying(150) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(14) NOT NULL, "is_adm" boolean NOT NULL DEFAULT false, "is_active" boolean NOT NULL DEFAULT true, "last_login" TIMESTAMP NOT NULL DEFAULT now(), "last_logout" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, CONSTRAINT "PK_97337ccbf692c58e6c7682de8a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying(300) NOT NULL, "public_id" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_5220c45b8e32d49d767b9b3d725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(100) NOT NULL, "price" integer NOT NULL, "max_installments" integer NOT NULL, "available" boolean DEFAULT true, "amount" integer NOT NULL DEFAULT '1', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "sellerId" uuid, "categoryId" uuid, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_b5f695a59f5ebb50af3c8160816" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customers" ADD CONSTRAINT "FK_9a1ba71f8651412e2003cfa46d4" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customers" ADD CONSTRAINT "FK_cca5fdc20671318f60dca2cfb65" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_products" ADD CONSTRAINT "FK_fe4b96332d76d9339112fa257d7" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_products" ADD CONSTRAINT "FK_8e020902538d18eeabb8b3c59f7" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_e5de51ca888d8b1f5ac25799dd1" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sellers" ADD CONSTRAINT "FK_61c8b0a0c581ab9e176ac6471c8" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_4e7f1b413734d5424ba9902a185" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_e40a1dd2909378f0da1f34f7bd6" FOREIGN KEY ("sellerId") REFERENCES "sellers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_e40a1dd2909378f0da1f34f7bd6"`);
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_4e7f1b413734d5424ba9902a185"`);
        await queryRunner.query(`ALTER TABLE "sellers" DROP CONSTRAINT "FK_61c8b0a0c581ab9e176ac6471c8"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_e5de51ca888d8b1f5ac25799dd1"`);
        await queryRunner.query(`ALTER TABLE "order_products" DROP CONSTRAINT "FK_8e020902538d18eeabb8b3c59f7"`);
        await queryRunner.query(`ALTER TABLE "order_products" DROP CONSTRAINT "FK_fe4b96332d76d9339112fa257d7"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "FK_cca5fdc20671318f60dca2cfb65"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP CONSTRAINT "FK_9a1ba71f8651412e2003cfa46d4"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`DROP TABLE "carts"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "photos"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "sellers"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "order_products"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
