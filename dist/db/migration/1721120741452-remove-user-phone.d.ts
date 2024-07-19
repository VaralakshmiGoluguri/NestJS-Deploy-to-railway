import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RemoveUserPhone1721120741452 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
