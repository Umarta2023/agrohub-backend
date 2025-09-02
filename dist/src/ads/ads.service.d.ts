import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
export declare class AdsService {
    create(createAdDto: CreateAdDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAdDto: UpdateAdDto): string;
    remove(id: number): string;
}
