import { Field } from '../../fields/entities/field.entity';
export declare class FieldOperation {
    id: string;
    fieldId: string;
    field: Field;
    type: string;
    date: string;
    notes: string;
    cost: number;
    createdAt: Date;
    updatedAt: Date;
}
