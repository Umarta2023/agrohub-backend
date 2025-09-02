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
exports.AgroNotificationsController = void 0;
const common_1 = require("@nestjs/common");
const agro_notifications_service_1 = require("./agro-notifications.service");
const create_agro_notification_dto_1 = require("./dto/create-agro-notification.dto");
const update_agro_notification_dto_1 = require("./dto/update-agro-notification.dto");
let AgroNotificationsController = class AgroNotificationsController {
    agroNotificationsService;
    constructor(agroNotificationsService) {
        this.agroNotificationsService = agroNotificationsService;
    }
    create(createAgroNotificationDto) {
        return this.agroNotificationsService.create(createAgroNotificationDto);
    }
    findAll() {
        return this.agroNotificationsService.findAll();
    }
    findOne(id) {
        return this.agroNotificationsService.findOne(+id);
    }
    update(id, updateAgroNotificationDto) {
        return this.agroNotificationsService.update(+id, updateAgroNotificationDto);
    }
    remove(id) {
        return this.agroNotificationsService.remove(+id);
    }
};
exports.AgroNotificationsController = AgroNotificationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agro_notification_dto_1.CreateAgroNotificationDto]),
    __metadata("design:returntype", void 0)
], AgroNotificationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AgroNotificationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AgroNotificationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_agro_notification_dto_1.UpdateAgroNotificationDto]),
    __metadata("design:returntype", void 0)
], AgroNotificationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AgroNotificationsController.prototype, "remove", null);
exports.AgroNotificationsController = AgroNotificationsController = __decorate([
    (0, common_1.Controller)('agro-notifications'),
    __metadata("design:paramtypes", [agro_notifications_service_1.AgroNotificationsService])
], AgroNotificationsController);
//# sourceMappingURL=agro-notifications.controller.js.map