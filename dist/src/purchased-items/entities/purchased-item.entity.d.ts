import { Purchase } from '../../purchases/entities/purchase.entity';
import { Product } from '../../products/entities/product.entity';
import { Shop } from '../../shops/entities/shop.entity';
export declare class PurchasedItem {
    id: string;
    purchaseId: string;
    purchase: Purchase;
    productId: string;
    product: Product;
    name: string;
    price: number;
    imageUrl: string;
    shopId: string;
    shop: Shop;
    quantity: number;
}
