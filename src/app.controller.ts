// src/app.controller.ts
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { TelegramAuthGuard } from './auth/guards/telegram.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Welcome to AgroHub API!";
  }

  @Get('profile')
  @UseGuards(TelegramAuthGuard) // Защищаем этот эндпоинт
  getProfile(@Req() request: Express.Request) {
    // Если guard пропустил, значит в request.user есть данные пользователя
    return request.user;
  }
}