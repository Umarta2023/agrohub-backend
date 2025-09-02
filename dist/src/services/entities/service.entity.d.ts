import { ServiceProvider } from '../../service-providers/entities/service-provider.entity';
export declare class Service {
    id: string;
    name: string;
    category: string;
    description: string;
    imageUrl: string;
    providerId: string;
    provider: ServiceProvider;
    createdAt: Date;
    updatedAt: Date;
}
