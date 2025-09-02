import { AdsService } from './ads.service';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
export declare class AdsController {
    private readonly adsService;
    constructor(adsService: AdsService);
    create(createAdDto: CreateAdDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAdDto: UpdateAdDto): string;
    remove(id: string): string;
}
