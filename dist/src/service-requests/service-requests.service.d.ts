import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { UpdateServiceRequestDto } from './dto/update-service-request.dto';
export declare class ServiceRequestsService {
    create(createServiceRequestDto: CreateServiceRequestDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateServiceRequestDto: UpdateServiceRequestDto): string;
    remove(id: number): string;
}
