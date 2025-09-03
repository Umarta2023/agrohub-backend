import { Module, forwardRef } from '@nestjs/common';
import { FieldsService } from './fields.service';
import { FieldsController } from './fields.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Field } from './entities/field.entity';
import { UsersModule } from 'src/users/users.module';
import { FieldOperationsModule } from 'src/field-operations/field-operations.module';
import { CropHistoryModule } from 'src/crop-history/crop-history.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Field]),
    UsersModule,
    // Указываем NestJS на модули, которые зависят от FieldsModule,
    // чтобы разорвать цикл на этапе компиляции.
    forwardRef(() => FieldOperationsModule),
    forwardRef(() => CropHistoryModule),
  ],
  controllers: [FieldsController],
  providers: [FieldsService],
  exports: [FieldsService], // Экспортируем сервис для использования в других модулях
})
export class FieldsModule {}