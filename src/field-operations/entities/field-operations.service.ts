import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FieldOperation } from '../entities/field-operation.entity';

@Injectable()
export class FieldOperationsService {
  constructor(
    @InjectRepository(FieldOperation)
    private readonly fieldOperationRepository: Repository<FieldOperation>,
  ) {}
  // пока оставим пустым
}