import { Controller } from '@nestjs/common';
import { CropHistoryService } from './crop-history.service';

@Controller('crop-history')
export class CropHistoryController {
  constructor(private readonly cropHistoryService: CropHistoryService) {}
}