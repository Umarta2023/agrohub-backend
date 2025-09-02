// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Импорты базовых модулей
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// Импорты модулей ресурсов
import { ShopsModule } from './shops/shops.module';
import { ProductsModule } from './products/products.module';
import { AdsModule } from './ads/ads.module';
import { ServiceProvidersModule } from './service-providers/service-providers.module';
import { ServicesModule } from './services/services.module';
import { FieldsModule } from './fields/fields.module';
import { FieldOperationsModule } from './field-operations/field-operations.module';
import { CropHistoryModule } from './crop-history/crop-history.module';
import { ServiceRequestsModule } from './service-requests/service-requests.module';
import { PurchasesModule } from './purchases/purchases.module';
import { PurchasedItemsModule } from './purchased-items/purchased-items.module';
import { AgroNotificationsModule } from './agro-notifications/agro-notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT') || '5432'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        // autoLoadEntities: true - хороший вариант, но давайте укажем явно
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        synchronize: false, // Используем миграции
      }),
      inject: [ConfigService],
    }),

    // Регистрируем ВСЕ наши модули
    UsersModule,
    AuthModule,
    ShopsModule,
    ProductsModule,
    AdsModule,
    ServiceProvidersModule,
    ServicesModule,
    FieldsModule,
    FieldOperationsModule,
    CropHistoryModule,
    ServiceRequestsModule,
    PurchasesModule,
    PurchasedItemsModule,
    AgroNotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}