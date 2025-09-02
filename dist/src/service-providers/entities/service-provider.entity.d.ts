import { User } from '../../users/entities/user.entity';
export declare class ServiceProvider {
    id: string;
    name: string;
    description: string;
    logoUrl: string;
    rating: number;
    ownerId: number;
    owner: User;
    createdAt: Date;
    updatedAt: Date;
}
