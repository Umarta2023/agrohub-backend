// src/shops/shops.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
  ) {}

  // Метод для получения всех магазинов
  async findAll(): Promise<Shop[]> {
    // Просто находим все записи в таблице 'shops'
    // 'find()' - это стандартный метод TypeORM
    return this.shopRepository.find();
  }
}