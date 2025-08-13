import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CropHistoryService } from './crop-history.service';
import { CreateCropHistoryDto } from './dto/create-crop-history.dto';
import { UpdateCropHistoryDto } from './dto/update-crop-history.dto';

@Controller('crop-history')
export class CropHistoryController {
  constructor(private readonly cropHistoryService: CropHistoryService) {}

  @Post()
  create(@Body() createCropHistoryDto: CreateCropHistoryDto) {
    return this.cropHistoryService.create(createCropHistoryDto);
  }

  @Get()
  findAll() {
    return this.cropHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cropHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCropHistoryDto: UpdateCropHistoryDto) {
    return this.cropHistoryService.update(+id, updateCropHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cropHistoryService.remove(+id);
  }
}
