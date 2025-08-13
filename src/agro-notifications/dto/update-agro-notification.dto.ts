import { PartialType } from '@nestjs/mapped-types';
import { CreateAgroNotificationDto } from './create-agro-notification.dto';

export class UpdateAgroNotificationDto extends PartialType(CreateAgroNotificationDto) {}
