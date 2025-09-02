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
exports.CropHistoryController = void 0;
const common_1 = require("@nestjs/common");
const crop_history_service_1 = require("./crop-history.service");
const create_crop_history_dto_1 = require("./dto/create-crop-history.dto");
const update_crop_history_dto_1 = require("./dto/update-crop-history.dto");
let CropHistoryController = class CropHistoryController {
    cropHistoryService;
    constructor(cropHistoryService) {
        this.cropHistoryService = cropHistoryService;
    }
    create(createCropHistoryDto) {
        return this.cropHistoryService.create(createCropHistoryDto);
    }
    findAll() {
        return this.cropHistoryService.findAll();
    }
    findOne(id) {
        return this.cropHistoryService.findOne(+id);
    }
    update(id, updateCropHistoryDto) {
        return this.cropHistoryService.update(+id, updateCropHistoryDto);
    }
    remove(id) {
        return this.cropHistoryService.remove(+id);
    }
};
exports.CropHistoryController = CropHistoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_crop_history_dto_1.CreateCropHistoryDto]),
    __metadata("design:returntype", void 0)
], CropHistoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CropHistoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CropHistoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_crop_history_dto_1.UpdateCropHistoryDto]),
    __metadata("design:returntype", void 0)
], CropHistoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CropHistoryController.prototype, "remove", null);
exports.CropHistoryController = CropHistoryController = __decorate([
    (0, common_1.Controller)('crop-history'),
    __metadata("design:paramtypes", [crop_history_service_1.CropHistoryService])
], CropHistoryController);
//# sourceMappingURL=crop-history.controller.js.map