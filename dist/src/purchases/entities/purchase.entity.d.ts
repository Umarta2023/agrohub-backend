import { User } from '../../users/entities/user.entity';
export declare class Purchase {
    id: string;
    date: Date;
    totalAmount: number;
    buyerId: number;
    buyer: User;
    createdAt: Date;
}
