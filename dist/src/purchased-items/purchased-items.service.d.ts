import { CreatePurchasedItemDto } from './dto/create-purchased-item.dto';
import { UpdatePurchasedItemDto } from './dto/update-purchased-item.dto';
export declare class PurchasedItemsService {
    create(createPurchasedItemDto: CreatePurchasedItemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePurchasedItemDto: UpdatePurchasedItemDto): string;
    remove(id: number): string;
}
