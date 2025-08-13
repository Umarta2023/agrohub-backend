import { Injectable } from '@nestjs/common';
import { CreateFieldOperationDto } from './dto/create-field-operation.dto';
import { UpdateFieldOperationDto } from './dto/update-field-operation.dto';

@Injectable()
export class FieldOperationsService {
  create(createFieldOperationDto: CreateFieldOperationDto) {
    return 'This action adds a new fieldOperation';
  }

  findAll() {
    return `This action returns all fieldOperations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fieldOperation`;
  }

  update(id: number, updateFieldOperationDto: UpdateFieldOperationDto) {
    return `This action updates a #${id} fieldOperation`;
  }

  remove(id: number) {
    return `This action removes a #${id} fieldOperation`;
  }
}
