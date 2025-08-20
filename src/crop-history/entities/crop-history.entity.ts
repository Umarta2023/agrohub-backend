// src/crop-history/entities/crop-history.entity.ts
import { Field } from '../../fields/entities/field.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('crop_history')
export class CropHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fieldId: string;

  @ManyToOne(() => Field)
  @JoinColumn({ name: 'fieldId' })
  field: Field;

  @Column({ type: 'int' })
  year: number;

  @Column()
  crop: string; // Название культуры
}