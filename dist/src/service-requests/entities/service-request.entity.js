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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequest = void 0;
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const service_entity_1 = require("../../services/entities/service.entity");
const service_provider_entity_1 = require("../../service-providers/entities/service-provider.entity");
let ServiceRequest = class ServiceRequest {
    id;
    serviceId;
    service;
    providerId;
    provider;
    userName;
    userPhone;
    notes;
    date;
    status;
    requesterId;
    requester;
    createdAt;
    updatedAt;
};
exports.ServiceRequest = ServiceRequest;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ServiceRequest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceRequest.prototype, "serviceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => service_entity_1.Service),
    (0, typeorm_1.JoinColumn)({ name: 'serviceId' }),
    __metadata("design:type", service_entity_1.Service)
], ServiceRequest.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceRequest.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => service_provider_entity_1.ServiceProvider),
    (0, typeorm_1.JoinColumn)({ name: 'providerId' }),
    __metadata("design:type", service_provider_entity_1.ServiceProvider)
], ServiceRequest.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceRequest.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceRequest.prototype, "userPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ServiceRequest.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], ServiceRequest.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pending' }),
    __metadata("design:type", String)
], ServiceRequest.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], ServiceRequest.prototype, "requesterId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'requesterId', referencedColumnName: 'telegramId' }),
    __metadata("design:type", user_entity_1.User)
], ServiceRequest.prototype, "requester", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ServiceRequest.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ServiceRequest.prototype, "updatedAt", void 0);
exports.ServiceRequest = ServiceRequest = __decorate([
    (0, typeorm_1.Entity)('service_requests')
], ServiceRequest);
//# sourceMappingURL=service-request.entity.js.map