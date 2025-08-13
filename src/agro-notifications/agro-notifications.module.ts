import { Module } from '@nestjs/common';
import { AgroNotificationsService } from './agro-notifications.service';
import { AgroNotificationsController } from './agro-notifications.controller';

@Module({
  controllers: [AgroNotificationsController],
  providers: [AgroNotificationsService],
})
export class AgroNotificationsModule {}
