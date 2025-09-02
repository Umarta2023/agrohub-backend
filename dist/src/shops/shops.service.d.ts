import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';
export declare class ShopsService {
    private readonly shopRepository;
    constructor(shopRepository: Repository<Shop>);
    findAll(): Promise<Shop[]>;
}
