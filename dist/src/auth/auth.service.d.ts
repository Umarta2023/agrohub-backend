import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private readonly configService;
    private readonly userRepository;
    private readonly botToken;
    constructor(configService: ConfigService, userRepository: Repository<User>);
    validateAndProcessInitData(initData: string): Promise<User>;
    private isSignatureValid;
}
