import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchasedItemsService } from './purchased-items.service';
import { CreatePurchasedItemDto } from './dto/create-purchased-item.dto';
import { UpdatePurchasedItemDto } from './dto/update-purchased-item.dto';

@Controller('purchased-items')
export class PurchasedItemsController {
  constructor(private readonly purchasedItemsService: PurchasedItemsService) {}

  @Post()
  create(@Body() createPurchasedItemDto: CreatePurchasedItemDto) {
    return this.purchasedItemsService.create(createPurchasedItemDto);
  }

  @Get()
  findAll() {
    return this.purchasedItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchasedItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchasedItemDto: UpdatePurchasedItemDto) {
    return this.purchasedItemsService.update(+id, updatePurchasedItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchasedItemsService.remove(+id);
  }
}
