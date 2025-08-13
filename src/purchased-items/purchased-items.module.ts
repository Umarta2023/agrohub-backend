import { Module } from '@nestjs/common';
import { PurchasedItemsService } from './purchased-items.service';
import { PurchasedItemsController } from './purchased-items.controller';

@Module({
  controllers: [PurchasedItemsController],
  providers: [PurchasedItemsService],
})
export class PurchasedItemsModule {}
