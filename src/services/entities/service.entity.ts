// src/services/entities/service.entity.ts
import { ServiceProvider } from '../../service-providers/entities/service-provider.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  imageUrl: string;
  
  @Column()
  providerId: string;

  // Упрощаем связь, убирая обратную ссылку
  @ManyToOne(() => ServiceProvider)
  @JoinColumn({ name: 'providerId' })
  provider: ServiceProvider;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}