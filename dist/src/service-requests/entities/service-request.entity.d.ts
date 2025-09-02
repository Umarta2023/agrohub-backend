import { User } from '../../users/entities/user.entity';
import { Service } from '../../services/entities/service.entity';
import { ServiceProvider } from '../../service-providers/entities/service-provider.entity';
export declare class ServiceRequest {
    id: string;
    serviceId: string;
    service: Service;
    providerId: string;
    provider: ServiceProvider;
    userName: string;
    userPhone: string;
    notes: string;
    date: string;
    status: string;
    requesterId: number;
    requester: User;
    createdAt: Date;
    updatedAt: Date;
}
