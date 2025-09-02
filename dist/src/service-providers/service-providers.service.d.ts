import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';
export declare class ServiceProvidersService {
    create(createServiceProviderDto: CreateServiceProviderDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateServiceProviderDto: UpdateServiceProviderDto): string;
    remove(id: number): string;
}
