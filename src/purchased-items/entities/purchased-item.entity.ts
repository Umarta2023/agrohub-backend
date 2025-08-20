// src/purchased-items/entities/purchased-item.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Purchase } from '../../purchases/entities/purchase.entity';
import { Product } from '../../products/entities/product.entity';
import { Shop } from '../../shops/entities/shop.entity';

@Entity('purchased_items')
export class PurchasedItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  purchaseId: string;

  @ManyToOne(() => Purchase)
  @JoinColumn({ name: 'purchaseId' })
  purchase: Purchase;

  @Column({ type: 'uuid', nullable: true }) // nullable, если товар удалят, история останется
  productId: string;
  
  @ManyToOne(() => Product, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'productId' })
  product: Product;
  
  // Дублируем информацию о товаре на случай, если оригинал будет изменен или удален
  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ type: 'uuid', nullable: true })
  shopId: string;
  
  @ManyToOne(() => Shop, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'shopId' })
  shop: Shop;
  
  @Column({ type: 'int' })
  quantity: number;
}