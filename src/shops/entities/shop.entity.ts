// src/shops/entities/shop.entity.ts

import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  ManyToOne, 
  JoinColumn, 
  OneToMany 
} from 'typeorm';
import { forwardRef } from '@nestjs/common';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';

@Entity('shops')
export class Shop {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  logoUrl: string;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @Column({ type: 'bigint' })
  ownerId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'ownerId', referencedColumnName: 'telegramId' })
  owner: User;

  // ИСПОЛЬЗУЕМ forwardRef для решения циклической зависимости
  //@OneToMany(() => forwardRef(() => Product), product => product.shop)
  products: Product[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}