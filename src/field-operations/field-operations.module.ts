import { Module, forwardRef } from '@nestjs/common';
import { FieldOperationsService } from './field-operations.service';
import { FieldOperationsController } from './field-operations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldOperation } from './entities/field-operation.entity';
import { FieldsModule } from '../fields/fields.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FieldOperation]),
    forwardRef(() => FieldsModule), // Разрываем цикл
  ],
  controllers: [FieldOperationsController],
  providers: [FieldOperationsService],
})
export class FieldOperationsModule {}