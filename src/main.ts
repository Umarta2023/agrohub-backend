// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // 1. Настройка CORS для разрешения запросов с доменов Telegram
  app.enableCors({
    origin: ['https://*.twa.app', 'https://*.web.telegram.org', 'http://localhost:5173'], // Добавлен localhost для локальной разработки фронтенда
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // 2. Глобальный префикс для всех эндпоинтов (например, /api/v1/profile)
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  // 3. Глобальное использование ValidationPipe для автоматической валидации всех DTO
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,      // Отбрасывать свойства, которых нет в DTO
    transform: true,      // Автоматически преобразовывать типы (например, строку из query в число)
  }));

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/api/v1`);
}
bootstrap();