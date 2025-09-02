// src/field-operations/field-operations.module.ts
import { Module } from '@nestjs/common'; // forwardRef больше не нужен
import { FieldOperationsService } from './field-operations.service';
import { FieldOperationsController } from './field-operations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldOperation } from './entities/field-operation.entity';
// import { FieldsModule } from '../fields/fields.module'; // <-- УДАЛЯЕМ ЭТОТ ИМПОРТ

@Module({
  imports: [
    TypeOrmModule.forFeature([FieldOperation]),
    // forwardRef(() => FieldsModule), // <-- УДАЛЯЕМ ЭТО
  ],
  controllers: [FieldOperationsController],
  providers: [FieldOperationsService],
})
export class FieldOperationsModule {}