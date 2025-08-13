import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FieldOperationsService } from './field-operations.service';
import { CreateFieldOperationDto } from './dto/create-field-operation.dto';
import { UpdateFieldOperationDto } from './dto/update-field-operation.dto';

@Controller('field-operations')
export class FieldOperationsController {
  constructor(private readonly fieldOperationsService: FieldOperationsService) {}

  @Post()
  create(@Body() createFieldOperationDto: CreateFieldOperationDto) {
    return this.fieldOperationsService.create(createFieldOperationDto);
  }

  @Get()
  findAll() {
    return this.fieldOperationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldOperationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFieldOperationDto: UpdateFieldOperationDto) {
    return this.fieldOperationsService.update(+id, updateFieldOperationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldOperationsService.remove(+id);
  }
}
