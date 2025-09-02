import { AgroNotificationsService } from './agro-notifications.service';
import { CreateAgroNotificationDto } from './dto/create-agro-notification.dto';
import { UpdateAgroNotificationDto } from './dto/update-agro-notification.dto';
export declare class AgroNotificationsController {
    private readonly agroNotificationsService;
    constructor(agroNotificationsService: AgroNotificationsService);
    create(createAgroNotificationDto: CreateAgroNotificationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAgroNotificationDto: UpdateAgroNotificationDto): string;
    remove(id: string): string;
}
