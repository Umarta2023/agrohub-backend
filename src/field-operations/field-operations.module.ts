import { Module } from '@nestjs/common';
import { FieldOperationsService } from './field-operations.service';
import { FieldOperationsController } from './field-operations.controller';

@Module({
  controllers: [FieldOperationsController],
  providers: [FieldOperationsService],
})
export class FieldOperationsModule {}
