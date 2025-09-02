import { PurchasedItemsService } from './purchased-items.service';
import { CreatePurchasedItemDto } from './dto/create-purchased-item.dto';
import { UpdatePurchasedItemDto } from './dto/update-purchased-item.dto';
export declare class PurchasedItemsController {
    private readonly purchasedItemsService;
    constructor(purchasedItemsService: PurchasedItemsService);
    create(createPurchasedItemDto: CreatePurchasedItemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePurchasedItemDto: UpdatePurchasedItemDto): string;
    remove(id: string): string;
}
