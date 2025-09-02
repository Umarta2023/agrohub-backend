import { Module, forwardRef } from '@nestjs/common';
import { CropHistoryService } from './crop-history.service';
import { CropHistoryController } from './crop-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CropHistory } from './entities/crop-history.entity';
import { FieldsModule } from '../fields/fields.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CropHistory]),
    forwardRef(() => FieldsModule),
  ],
  controllers: [CropHistoryController],
  providers: [CropHistoryService],
})
export class CropHistoryModule {}