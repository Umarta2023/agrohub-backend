import { ServiceRequestsService } from './service-requests.service';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { UpdateServiceRequestDto } from './dto/update-service-request.dto';
export declare class ServiceRequestsController {
    private readonly serviceRequestsService;
    constructor(serviceRequestsService: ServiceRequestsService);
    create(createServiceRequestDto: CreateServiceRequestDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateServiceRequestDto: UpdateServiceRequestDto): string;
    remove(id: string): string;
}
