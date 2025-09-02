import { Field } from '../../fields/entities/field.entity';
export declare class CropHistory {
    id: string;
    fieldId: string;
    field: Field;
    year: number;
    crop: string;
}
