// src/auth/guards/telegram.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class TelegramAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Authorization header is missing or invalid');
    }

    const initData = authHeader.split(' ')[1];
    if (!initData) {
      throw new UnauthorizedException('initData is missing from Authorization header');
    }
    
    try {
      const user = await this.authService.validateAndProcessInitData(initData);
      request.user = user; 
      return true;
    } catch (error) {
      // Перехватываем ошибки из authService и возвращаем 401
      throw new UnauthorizedException(error.message);
    }
  }
}