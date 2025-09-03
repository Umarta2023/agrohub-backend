import { Module, forwardRef } from '@nestjs/common';
import { CropHistoryService } from './crop-history.service';
import { CropHistoryController } from './crop-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CropHistory } from './entities/crop-history.entity';
import { FieldsModule } from 'src/fields/fields.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CropHistory]),
    forwardRef(() => FieldsModule), // Оборачиваем импорт в forwardRef
  ],
  controllers: [CropHistoryController],
  providers: [CropHistoryService],
  exports: [CropHistoryService], // Добавляем экспорт сервиса
})
export class CropHistoryModule {}