// ormconfig.ts
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { sync } from 'glob';

config();

const entityFiles = sync('src/**/*.entity{.ts,.js}'); // <-- ИСПРАВЛЕННЫЙ ПУТЬ

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: entityFiles,
  migrations: ['src/migrations/*{.ts,.js}'], // <-- ИСПРАВЛЕННЫЙ ПУТЬ
  synchronize: false,
});