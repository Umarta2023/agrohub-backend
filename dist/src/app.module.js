"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const shops_module_1 = require("./shops/shops.module");
const products_module_1 = require("./products/products.module");
const ads_module_1 = require("./ads/ads.module");
const service_providers_module_1 = require("./service-providers/service-providers.module");
const services_module_1 = require("./services/services.module");
const fields_module_1 = require("./fields/fields.module");
const field_operations_module_1 = require("./field-operations/field-operations.module");
const crop_history_module_1 = require("./crop-history/crop-history.module");
const service_requests_module_1 = require("./service-requests/service-requests.module");
const purchases_module_1 = require("./purchases/purchases.module");
const purchased_items_module_1 = require("./purchased-items/purchased-items.module");
const agro_notifications_module_1 = require("./agro-notifications/agro-notifications.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: parseInt(configService.get('DB_PORT') || '5432'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    migrations: [__dirname + '/migrations/*{.ts,.js}'],
                    synchronize: false,
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            shops_module_1.ShopsModule,
            products_module_1.ProductsModule,
            ads_module_1.AdsModule,
            service_providers_module_1.ServiceProvidersModule,
            services_module_1.ServicesModule,
            fields_module_1.FieldsModule,
            field_operations_module_1.FieldOperationsModule,
            crop_history_module_1.CropHistoryModule,
            service_requests_module_1.ServiceRequestsModule,
            purchases_module_1.PurchasesModule,
            purchased_items_module_1.PurchasedItemsModule,
            agro_notifications_module_1.AgroNotificationsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map