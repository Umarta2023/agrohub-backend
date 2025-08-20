// src/agro-notifications/entities/agro-notification.entity.ts
import { User } from '../../users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('agro_notifications')
export class AgroNotification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Тип: 'new_order', 'status_change', 'news', 'system'
  @Column()
  type: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
  
  @Column({ default: false })
  read: boolean;

  @Column({ nullable: true })
  link: string; // Ссылка, куда ведет уведомление (например, /purchase-history/xyz)

  @Column({ type: 'bigint' })
  userId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'telegramId' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}