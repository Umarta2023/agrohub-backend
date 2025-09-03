// ПРАВИЛЬНО
import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shop])], // <-- ДОБАВИТЬ ЭТУ СТРОКУ
  controllers: [ShopsController],
  providers: [ShopsService],
})
export class ShopsModule {}