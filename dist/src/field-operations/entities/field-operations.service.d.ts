import { Repository } from 'typeorm';
import { FieldOperation } from '../entities/field-operation.entity';
export declare class FieldOperationsService {
    private readonly fieldOperationRepository;
    constructor(fieldOperationRepository: Repository<FieldOperation>);
}
