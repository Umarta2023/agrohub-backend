// src/fields/fields.module.ts
import { Module, Global } from '@nestjs/common'; // <-- Импортируем Global
import { FieldsService } from './fields.service';
import { FieldsController } from './fields.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Field } from './entities/field.entity';

@Global() // <-- ДЕЛАЕМ МОДУЛЬ ГЛОБАЛЬНЫМ
@Module({
  imports: [TypeOrmModule.forFeature([Field])],
  controllers: [FieldsController],
  providers: [FieldsService],
  exports: [FieldsService], // <-- Важно, чтобы exports остался
})
export class FieldsModule {}