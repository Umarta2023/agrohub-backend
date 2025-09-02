"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProvidersController = void 0;
const common_1 = require("@nestjs/common");
const service_providers_service_1 = require("./service-providers.service");
const create_service_provider_dto_1 = require("./dto/create-service-provider.dto");
const update_service_provider_dto_1 = require("./dto/update-service-provider.dto");
let ServiceProvidersController = class ServiceProvidersController {
    serviceProvidersService;
    constructor(serviceProvidersService) {
        this.serviceProvidersService = serviceProvidersService;
    }
    create(createServiceProviderDto) {
        return this.serviceProvidersService.create(createServiceProviderDto);
    }
    findAll() {
        return this.serviceProvidersService.findAll();
    }
    findOne(id) {
        return this.serviceProvidersService.findOne(+id);
    }
    update(id, updateServiceProviderDto) {
        return this.serviceProvidersService.update(+id, updateServiceProviderDto);
    }
    remove(id) {
        return this.serviceProvidersService.remove(+id);
    }
};
exports.ServiceProvidersController = ServiceProvidersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_provider_dto_1.CreateServiceProviderDto]),
    __metadata("design:returntype", void 0)
], ServiceProvidersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceProvidersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceProvidersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_provider_dto_1.UpdateServiceProviderDto]),
    __metadata("design:returntype", void 0)
], ServiceProvidersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceProvidersController.prototype, "remove", null);
exports.ServiceProvidersController = ServiceProvidersController = __decorate([
    (0, common_1.Controller)('service-providers'),
    __metadata("design:paramtypes", [service_providers_service_1.ServiceProvidersService])
], ServiceProvidersController);
//# sourceMappingURL=service-providers.controller.js.map