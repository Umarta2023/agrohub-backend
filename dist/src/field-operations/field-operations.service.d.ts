import { CreateFieldOperationDto } from './dto/create-field-operation.dto';
import { UpdateFieldOperationDto } from './dto/update-field-operation.dto';
export declare class FieldOperationsService {
    create(createFieldOperationDto: CreateFieldOperationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFieldOperationDto: UpdateFieldOperationDto): string;
    remove(id: number): string;
}
