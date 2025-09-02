// src/products/products.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { FindAllProductsDto } from './dto/find-all-products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(query: FindAllProductsDto): Promise<Product[]> {
    const { category, search } = query;

    // TypeORM QueryBuilder - мощный инструмент для построения сложных запросов
    const queryBuilder = this.productRepository.createQueryBuilder('product');

    // Если в запросе есть категория, добавляем условие фильтрации
    if (category) {
      // 'where' для первого условия, 'andWhere' для последующих
      queryBuilder.andWhere('product.category = :category', { category });
    }

    // Если есть поисковый запрос
    if (search) {
      // ILike - это регистронезависимый поиск по подстроке (например, 'хлеб' найдет 'Хлеб ржаной')
      queryBuilder.andWhere('product.name ILIKE :search', { search: `%${search}%` });
    }
    
    // Выполняем построенный запрос и возвращаем результат
    return queryBuilder.getMany();
  }
}