// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { TelegramAuthGuard } from './guards/telegram.guard';

@Module({
  imports: [UsersModule], // Импортируем, чтобы иметь доступ к UserRepository
  providers: [
    AuthService, 
    TelegramAuthGuard // Guard тоже является провайдером
  ],
  exports: [
    AuthService // Экспортируем сервис для использования в Guard
  ]
})
export class AuthModule {}