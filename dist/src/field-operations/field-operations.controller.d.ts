import { FieldOperationsService } from './field-operations.service';
import { CreateFieldOperationDto } from './dto/create-field-operation.dto';
import { UpdateFieldOperationDto } from './dto/update-field-operation.dto';
export declare class FieldOperationsController {
    private readonly fieldOperationsService;
    constructor(fieldOperationsService: FieldOperationsService);
    create(createFieldOperationDto: CreateFieldOperationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFieldOperationDto: UpdateFieldOperationDto): string;
    remove(id: string): string;
}
