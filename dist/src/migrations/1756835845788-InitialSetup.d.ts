import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitialSetup1756835845788 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
