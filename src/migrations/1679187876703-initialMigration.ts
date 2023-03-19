import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1679187876703 implements MigrationInterface {
    name = 'initialMigration1679187876703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cpf" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying(120) NOT NULL, "wallet" numeric(100,2) DEFAULT '0', CONSTRAINT "UQ_4245ac34add1ceeb505efc98777" UNIQUE ("cpf"), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sellers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying(120) NOT NULL, "wallet" numeric(100,2) DEFAULT '0', CONSTRAINT "UQ_6943dd3abf12ff92cae80cfdce2" UNIQUE ("cnpj"), CONSTRAINT "UQ_60a049dd3231ed458dccfdaf406" UNIQUE ("email"), CONSTRAINT "PK_97337ccbf692c58e6c7682de8a2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sellers"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
