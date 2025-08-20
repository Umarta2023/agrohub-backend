// src/purchases/entities/purchase.entity.ts
import { User } from '../../users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { PurchasedItem } from '../../purchased-items/entities/purchased-item.entity';

@Entity('purchases')
export class Purchase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @Column({ type: 'bigint' })
  buyerId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'buyerId', referencedColumnName: 'telegramId' })
  buyer: User;
  
  // Временно комментируем, чтобы избежать ошибок с циклическими зависимостями
  // @OneToMany(() => PurchasedItem, item => item.purchase)
  // items: PurchasedItem[];

  @CreateDateColumn()
  createdAt: Date;
}