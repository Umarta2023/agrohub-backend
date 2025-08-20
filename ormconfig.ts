// ormconfig.ts
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config(); // Загружаем переменные из .env

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Указываем, где лежат наши Entity
  migrations: [__dirname + '/migrations/*{.ts,.js}'], // Указываем, где будут лежать миграции
  synchronize: false, // ВАЖНО: отключаем автоматическую синхронизацию
});