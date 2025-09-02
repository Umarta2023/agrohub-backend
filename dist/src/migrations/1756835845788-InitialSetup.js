"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSetup1756835845788 = void 0;
class InitialSetup1756835845788 {
    name = 'InitialSetup1756835845788';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("telegramId" bigint NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying, "username" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b472e947593c3b0a70179a095f0" PRIMARY KEY ("telegramId"))`);
        await queryRunner.query(`CREATE TABLE "shops" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" text, "logoUrl" character varying, "rating" double precision NOT NULL DEFAULT '0', "ownerId" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3c6aaa6607d287de99815e60b96" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service_providers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" text, "logoUrl" character varying, "rating" double precision NOT NULL DEFAULT '0', "ownerId" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_73c86f1298c5285d76e66da2da9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "category" character varying NOT NULL, "description" text, "imageUrl" character varying, "providerId" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service_requests" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "serviceId" uuid NOT NULL, "providerId" uuid NOT NULL, "userName" character varying NOT NULL, "userPhone" character varying NOT NULL, "notes" text, "date" date, "status" character varying NOT NULL DEFAULT 'pending', "requesterId" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ee60bcd826b7e130bfbd97daf66" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchases" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL DEFAULT now(), "totalAmount" numeric(10,2) NOT NULL, "buyerId" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1d55032f37a34c6eceacbbca6b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "category" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "imageUrl" character varying, "isNew" boolean NOT NULL DEFAULT false, "quantity" integer NOT NULL DEFAULT '0', "shopId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchased_items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "purchaseId" uuid NOT NULL, "productId" uuid, "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "imageUrl" character varying, "shopId" uuid, "quantity" integer NOT NULL, CONSTRAINT "PK_b08f243192587677c27b1eb08ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fields" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "area" double precision NOT NULL, "currentCrop" character varying, "polygon" jsonb, "ownerId" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ee7a215c6cd77a59e2cb3b59d41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "field_operations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fieldId" uuid NOT NULL, "type" character varying NOT NULL, "date" date NOT NULL, "notes" text, "cost" numeric(10,2), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6a765a3d0ebea856fa31fa4a81a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crop_history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fieldId" uuid NOT NULL, "year" integer NOT NULL, "crop" character varying NOT NULL, CONSTRAINT "PK_0eb6bb60b3a2d3c8ac01ef9e621" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agro_notifications" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "title" character varying NOT NULL, "message" text NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "read" boolean NOT NULL DEFAULT false, "link" character varying, "userId" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_423567abc6e155c8c797e139603" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shops" ADD CONSTRAINT "FK_9f222a91f08322c9d08a1b443b8" FOREIGN KEY ("ownerId") REFERENCES "users"("telegramId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD CONSTRAINT "FK_d448ff1adfff4fa2c1aedb75eea" FOREIGN KEY ("ownerId") REFERENCES "users"("telegramId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_8b619ef0a4fe392dbde07eee1e2" FOREIGN KEY ("providerId") REFERENCES "service_providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_requests" ADD CONSTRAINT "FK_07f8d78c034a3b01c8fe0921df3" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_requests" ADD CONSTRAINT "FK_7a2d28e31586e1b92ee9189e961" FOREIGN KEY ("providerId") REFERENCES "service_providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_requests" ADD CONSTRAINT "FK_2e2827d970e3b50b322cee2ab3f" FOREIGN KEY ("requesterId") REFERENCES "users"("telegramId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "FK_22533450a1d627dc3ae071f22ae" FOREIGN KEY ("buyerId") REFERENCES "users"("telegramId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchased_items" ADD CONSTRAINT "FK_40b11322a0ec1c6f87b9941aa56" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchased_items" ADD CONSTRAINT "FK_bf3d81d338f34a317a49728d639" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchased_items" ADD CONSTRAINT "FK_40983df53ed37a0db0e9bfb571a" FOREIGN KEY ("shopId") REFERENCES "shops"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fields" ADD CONSTRAINT "FK_a7d98ec4be2c842c6556188cfdc" FOREIGN KEY ("ownerId") REFERENCES "users"("telegramId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "field_operations" ADD CONSTRAINT "FK_bde7fa5cc4c9d09a3e0edcb4405" FOREIGN KEY ("fieldId") REFERENCES "fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crop_history" ADD CONSTRAINT "FK_8f0c3675758d9769b7147e0a030" FOREIGN KEY ("fieldId") REFERENCES "fields"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agro_notifications" ADD CONSTRAINT "FK_1c5b8b4d14699d182940b8e46dc" FOREIGN KEY ("userId") REFERENCES "users"("telegramId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "agro_notifications" DROP CONSTRAINT "FK_1c5b8b4d14699d182940b8e46dc"`);
        await queryRunner.query(`ALTER TABLE "crop_history" DROP CONSTRAINT "FK_8f0c3675758d9769b7147e0a030"`);
        await queryRunner.query(`ALTER TABLE "field_operations" DROP CONSTRAINT "FK_bde7fa5cc4c9d09a3e0edcb4405"`);
        await queryRunner.query(`ALTER TABLE "fields" DROP CONSTRAINT "FK_a7d98ec4be2c842c6556188cfdc"`);
        await queryRunner.query(`ALTER TABLE "purchased_items" DROP CONSTRAINT "FK_40983df53ed37a0db0e9bfb571a"`);
        await queryRunner.query(`ALTER TABLE "purchased_items" DROP CONSTRAINT "FK_bf3d81d338f34a317a49728d639"`);
        await queryRunner.query(`ALTER TABLE "purchased_items" DROP CONSTRAINT "FK_40b11322a0ec1c6f87b9941aa56"`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "FK_22533450a1d627dc3ae071f22ae"`);
        await queryRunner.query(`ALTER TABLE "service_requests" DROP CONSTRAINT "FK_2e2827d970e3b50b322cee2ab3f"`);
        await queryRunner.query(`ALTER TABLE "service_requests" DROP CONSTRAINT "FK_7a2d28e31586e1b92ee9189e961"`);
        await queryRunner.query(`ALTER TABLE "service_requests" DROP CONSTRAINT "FK_07f8d78c034a3b01c8fe0921df3"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_8b619ef0a4fe392dbde07eee1e2"`);
        await queryRunner.query(`ALTER TABLE "service_providers" DROP CONSTRAINT "FK_d448ff1adfff4fa2c1aedb75eea"`);
        await queryRunner.query(`ALTER TABLE "shops" DROP CONSTRAINT "FK_9f222a91f08322c9d08a1b443b8"`);
        await queryRunner.query(`DROP TABLE "agro_notifications"`);
        await queryRunner.query(`DROP TABLE "crop_history"`);
        await queryRunner.query(`DROP TABLE "field_operations"`);
        await queryRunner.query(`DROP TABLE "fields"`);
        await queryRunner.query(`DROP TABLE "purchased_items"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "purchases"`);
        await queryRunner.query(`DROP TABLE "service_requests"`);
        await queryRunner.query(`DROP TABLE "services"`);
        await queryRunner.query(`DROP TABLE "service_providers"`);
        await queryRunner.query(`DROP TABLE "shops"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.InitialSetup1756835845788 = InitialSetup1756835845788;
//# sourceMappingURL=1756835845788-InitialSetup.js.map