import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUserPhone1721110970880 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
