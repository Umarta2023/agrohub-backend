import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';
export declare class Shop {
    id: string;
    name: string;
    description: string;
    logoUrl: string;
    rating: number;
    ownerId: number;
    owner: User;
    products: Product[];
    createdAt: Date;
    updatedAt: Date;
}
