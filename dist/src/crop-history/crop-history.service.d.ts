import { CreateCropHistoryDto } from './dto/create-crop-history.dto';
import { UpdateCropHistoryDto } from './dto/update-crop-history.dto';
export declare class CropHistoryService {
    create(createCropHistoryDto: CreateCropHistoryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCropHistoryDto: UpdateCropHistoryDto): string;
    remove(id: number): string;
}
