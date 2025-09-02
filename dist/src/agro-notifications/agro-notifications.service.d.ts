import { CreateAgroNotificationDto } from './dto/create-agro-notification.dto';
import { UpdateAgroNotificationDto } from './dto/update-agro-notification.dto';
export declare class AgroNotificationsService {
    create(createAgroNotificationDto: CreateAgroNotificationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAgroNotificationDto: UpdateAgroNotificationDto): string;
    remove(id: number): string;
}
