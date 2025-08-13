import { PartialType } from '@nestjs/mapped-types';
import { CreateFieldOperationDto } from './create-field-operation.dto';

export class UpdateFieldOperationDto extends PartialType(CreateFieldOperationDto) {}
