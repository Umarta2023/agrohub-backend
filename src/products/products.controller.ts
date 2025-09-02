// src/products/products.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { FindAllProductsDto } from './dto/find-all-products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Декоратор @Query() автоматически извлекает все query-параметры из URL
  // и, благодаря ValidationPipe (который мы настроили в main.ts),
  // проверяет их и создает экземпляр нашего DTO.
  @Get()
  findAll(@Query() query: FindAllProductsDto) {
    return this.productsService.findAll(query);
  }
}