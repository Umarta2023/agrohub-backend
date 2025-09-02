import { Repository } from 'typeorm';
import { CropHistory } from './entities/crop-history.entity';
export declare class CropHistoryService {
    private readonly cropHistoryRepository;
    constructor(cropHistoryRepository: Repository<CropHistory>);
}
