import { CropHistoryService } from './crop-history.service';
import { CreateCropHistoryDto } from './dto/create-crop-history.dto';
import { UpdateCropHistoryDto } from './dto/update-crop-history.dto';
export declare class CropHistoryController {
    private readonly cropHistoryService;
    constructor(cropHistoryService: CropHistoryService);
    create(createCropHistoryDto: CreateCropHistoryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCropHistoryDto: UpdateCropHistoryDto): string;
    remove(id: string): string;
}
