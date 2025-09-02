// src/field-operations/entities/field-operation.entity.ts
import { Field } from '../../fields/entities/field.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { forwardRef } from '@nestjs/common';

@Entity('field_operations')
export class FieldOperation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fieldId: string;

  // ИСПРАВЛЕННЫЙ СИНТАКСИС
  @ManyToOne(() => Field)
  @JoinColumn({ name: 'fieldId' })
  field: Field;

  @Column()
  type: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'text', nullable: true })
  notes: string;
  
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  cost: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}