// src/products/entities/product.entity.ts

import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  ManyToOne, 
  JoinColumn 
} from 'typeorm';
import { forwardRef } from '@nestjs/common';
import { Shop } from '../../shops/entities/shop.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;
  
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ default: false })
  isNew: boolean;

  @Column({ type: 'int', default: 0 })
  quantity: number;

  @Column()
  shopId: string;

  // ИСПОЛЬЗУЕМ forwardRef для решения циклической зависимости
  //@ManyToOne(() => forwardRef(() => Shop), shop => shop.products)
  @JoinColumn({ name: 'shopId' })
  shop: Shop;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}