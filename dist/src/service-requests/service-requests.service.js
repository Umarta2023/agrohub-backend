"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequestsService = void 0;
const common_1 = require("@nestjs/common");
let ServiceRequestsService = class ServiceRequestsService {
    create(createServiceRequestDto) {
        return 'This action adds a new serviceRequest';
    }
    findAll() {
        return `This action returns all serviceRequests`;
    }
    findOne(id) {
        return `This action returns a #${id} serviceRequest`;
    }
    update(id, updateServiceRequestDto) {
        return `This action updates a #${id} serviceRequest`;
    }
    remove(id) {
        return `This action removes a #${id} serviceRequest`;
    }
};
exports.ServiceRequestsService = ServiceRequestsService;
exports.ServiceRequestsService = ServiceRequestsService = __decorate([
    (0, common_1.Injectable)()
], ServiceRequestsService);
//# sourceMappingURL=service-requests.service.js.map