import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getProfile(request: Express.Request): import("./users/entities/user.entity").User | undefined;
}
