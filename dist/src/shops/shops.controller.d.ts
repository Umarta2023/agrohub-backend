import { ShopsService } from './shops.service';
export declare class ShopsController {
    private readonly shopsService;
    constructor(shopsService: ShopsService);
    findAll(): Promise<import("./entities/shop.entity").Shop[]>;
}
