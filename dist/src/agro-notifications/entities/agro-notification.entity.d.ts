import { User } from '../../users/entities/user.entity';
export declare class AgroNotification {
    id: string;
    type: string;
    title: string;
    message: string;
    date: Date;
    read: boolean;
    link: string;
    userId: number;
    user: User;
    createdAt: Date;
}
