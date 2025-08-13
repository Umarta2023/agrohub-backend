import { PartialType } from '@nestjs/mapped-types';
import { CreateCropHistoryDto } from './create-crop-history.dto';

export class UpdateCropHistoryDto extends PartialType(CreateCropHistoryDto) {}
