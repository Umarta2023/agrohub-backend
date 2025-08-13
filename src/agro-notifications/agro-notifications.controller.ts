import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgroNotificationsService } from './agro-notifications.service';
import { CreateAgroNotificationDto } from './dto/create-agro-notification.dto';
import { UpdateAgroNotificationDto } from './dto/update-agro-notification.dto';

@Controller('agro-notifications')
export class AgroNotificationsController {
  constructor(private readonly agroNotificationsService: AgroNotificationsService) {}

  @Post()
  create(@Body() createAgroNotificationDto: CreateAgroNotificationDto) {
    return this.agroNotificationsService.create(createAgroNotificationDto);
  }

  @Get()
  findAll() {
    return this.agroNotificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agroNotificationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgroNotificationDto: UpdateAgroNotificationDto) {
    return this.agroNotificationsService.update(+id, updateAgroNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agroNotificationsService.remove(+id);
  }
}
