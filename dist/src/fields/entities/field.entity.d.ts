import { User } from '../../users/entities/user.entity';
export declare class Field {
    id: string;
    name: string;
    area: number;
    currentCrop: string;
    polygon: object;
    ownerId: number;
    owner: User;
    createdAt: Date;
    updatedAt: Date;
}
