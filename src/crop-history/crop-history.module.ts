import { Module } from '@nestjs/common';
import { CropHistoryService } from './crop-history.service';
import { CropHistoryController } from './crop-history.controller';

@Module({
  controllers: [CropHistoryController],
  providers: [CropHistoryService],
})
export class CropHistoryModule {}
