// src/crop-history/crop-history.module.ts
import { Module } from '@nestjs/common'; // forwardRef больше не нужен
import { CropHistoryService } from './crop-history.service';
import { CropHistoryController } from './crop-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CropHistory } from './entities/crop-history.entity';
// import { FieldsModule } from '../fields/fields.module'; // <-- УДАЛЯЕМ ЭТОТ ИМПОРТ

@Module({
  imports: [
    TypeOrmModule.forFeature([CropHistory]),
    // forwardRef(() => FieldsModule), // <-- УДАЛЯЕМ ЭТО
  ],
  controllers: [CropHistoryController],
  providers: [CropHistoryService],
})
export class CropHistoryModule {}