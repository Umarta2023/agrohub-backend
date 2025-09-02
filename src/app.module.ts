// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
// --- НАЧАЛО ИЗМЕНЕНИЙ ---
import { ShopsModule } from './shops/shops.module';
import { ProductsModule } from './products/products.module';
// ... здесь будут импорты остальных модулей
// --- КОНЕЦ ИЗМЕНЕНИЙ ---

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
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false, // Используем миграции
      }),
      inject: [ConfigService],
    }),

    // Подключаем наши модули
    UsersModule,
    AuthModule,
    // --- НАЧАЛО ИЗМЕНЕНИЙ ---
    ShopsModule,
    ProductsModule,
    // ... здесь будут остальные модули
    // --- КОНЕЦ ИЗМЕНЕНИЙ ---
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}