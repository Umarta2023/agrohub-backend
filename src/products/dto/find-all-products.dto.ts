// src/products/dto/find-all-products.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class FindAllProductsDto {
  @IsOptional() // Параметр не обязателен
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  search?: string;
}