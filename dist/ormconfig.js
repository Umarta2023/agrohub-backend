"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const glob_1 = require("glob");
(0, dotenv_1.config)();
const entityFiles = (0, glob_1.sync)('src/**/*.entity{.ts,.js}');
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: entityFiles,
    migrations: ['src/migrations/*{.ts,.js}'],
    synchronize: false,
});
//# sourceMappingURL=ormconfig.js.map