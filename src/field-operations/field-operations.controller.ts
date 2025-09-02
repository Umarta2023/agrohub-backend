import { Controller } from '@nestjs/common';
import { FieldOperationsService } from './field-operations.service';

@Controller('field-operations')
export class FieldOperationsController {
  constructor(private readonly fieldOperationsService: FieldOperationsService) {}
}