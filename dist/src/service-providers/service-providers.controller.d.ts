import { ServiceProvidersService } from './service-providers.service';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';
export declare class ServiceProvidersController {
    private readonly serviceProvidersService;
    constructor(serviceProvidersService: ServiceProvidersService);
    create(createServiceProviderDto: CreateServiceProviderDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateServiceProviderDto: UpdateServiceProviderDto): string;
    remove(id: string): string;
}
