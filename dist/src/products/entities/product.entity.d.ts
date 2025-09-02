import { Shop } from '../../shops/entities/shop.entity';
export declare class Product {
    id: string;
    name: string;
    category: string;
    price: number;
    imageUrl: string;
    isNew: boolean;
    quantity: number;
    shopId: string;
    shop: Shop;
    createdAt: Date;
    updatedAt: Date;
}
