// src/service-providers/entities/service-provider.entity.ts
import { User } from '../../users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Service } from '../../services/entities/service.entity';

@Entity('service_providers')
export class ServiceProvider {
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
  
  // Временно комментируем обратную связь, чтобы избежать ошибок
  // @OneToMany(() => Service, service => service.provider)
  // services: Service[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}