import { Injectable } from '@nestjs/common';
import { CreateCropHistoryDto } from './dto/create-crop-history.dto';
import { UpdateCropHistoryDto } from './dto/update-crop-history.dto';

@Injectable()
export class CropHistoryService {
  create(createCropHistoryDto: CreateCropHistoryDto) {
    return 'This action adds a new cropHistory';
  }

  findAll() {
    return `This action returns all cropHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cropHistory`;
  }

  update(id: number, updateCropHistoryDto: UpdateCropHistoryDto) {
    return `This action updates a #${id} cropHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} cropHistory`;
  }
}
