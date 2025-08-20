// src/fields/entities/field.entity.ts
import { User } from '../../users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('fields')
export class Field {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  
  @Column({ type: 'float' })
  area: number; // в гектарах

  @Column({ nullable: true })
  currentCrop: string;
  
  // GeoJSON полигон для хранения координат на карте. JSONB - это бинарный, индексируемый JSON.
  @Column({ type: 'jsonb', nullable: true })
  polygon: object;

  @Column({ type: 'bigint' })
  ownerId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'ownerId', referencedColumnName: 'telegramId' })
  owner: User;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}