// src/shops/shops.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ShopsService } from './shops.service';

// Все эндпоинты в этом контроллере будут начинаться с /shops
// т.е. полный путь будет /api/v1/shops
@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Get() // Обрабатывает GET запросы на /shops
  findAll() {
    return this.shopsService.findAll();
  }
}