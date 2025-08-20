// src/service-requests/entities/service-request.entity.ts
import { User } from '../../users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from '../../services/entities/service.entity';
import { ServiceProvider } from '../../service-providers/entities/service-provider.entity';

@Entity('service_requests')
export class ServiceRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  serviceId: string;

  @ManyToOne(() => Service)
  @JoinColumn({ name: 'serviceId' })
  service: Service;
  
  @Column()
  providerId: string;

  @ManyToOne(() => ServiceProvider)
  @JoinColumn({ name: 'providerId' })
  provider: ServiceProvider;
  
  @Column()
  userName: string; // Имя клиента, как он указал в заявке

  @Column()
  userPhone: string; // Телефон клиента

  @Column({ type: 'text', nullable: true })
  notes: string; // Примечания к заявке

  @Column({ type: 'date', nullable: true })
  date: string; // Желаемая дата услуги
  
  @Column({ default: 'pending' }) // pending, approved, rejected, completed
  status: string;

  @Column({ type: 'bigint' })
  requesterId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'requesterId', referencedColumnName: 'telegramId' })
  requester: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}