import { Injectable } from '@nestjs/common';
import { CreateAgroNotificationDto } from './dto/create-agro-notification.dto';
import { UpdateAgroNotificationDto } from './dto/update-agro-notification.dto';

@Injectable()
export class AgroNotificationsService {
  create(createAgroNotificationDto: CreateAgroNotificationDto) {
    return 'This action adds a new agroNotification';
  }

  findAll() {
    return `This action returns all agroNotifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agroNotification`;
  }

  update(id: number, updateAgroNotificationDto: UpdateAgroNotificationDto) {
    return `This action updates a #${id} agroNotification`;
  }

  remove(id: number) {
    return `This action removes a #${id} agroNotification`;
  }
}
