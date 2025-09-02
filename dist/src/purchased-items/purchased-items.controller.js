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
exports.PurchasedItemsController = void 0;
const common_1 = require("@nestjs/common");
const purchased_items_service_1 = require("./purchased-items.service");
const create_purchased_item_dto_1 = require("./dto/create-purchased-item.dto");
const update_purchased_item_dto_1 = require("./dto/update-purchased-item.dto");
let PurchasedItemsController = class PurchasedItemsController {
    purchasedItemsService;
    constructor(purchasedItemsService) {
        this.purchasedItemsService = purchasedItemsService;
    }
    create(createPurchasedItemDto) {
        return this.purchasedItemsService.create(createPurchasedItemDto);
    }
    findAll() {
        return this.purchasedItemsService.findAll();
    }
    findOne(id) {
        return this.purchasedItemsService.findOne(+id);
    }
    update(id, updatePurchasedItemDto) {
        return this.purchasedItemsService.update(+id, updatePurchasedItemDto);
    }
    remove(id) {
        return this.purchasedItemsService.remove(+id);
    }
};
exports.PurchasedItemsController = PurchasedItemsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchased_item_dto_1.CreatePurchasedItemDto]),
    __metadata("design:returntype", void 0)
], PurchasedItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PurchasedItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PurchasedItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_purchased_item_dto_1.UpdatePurchasedItemDto]),
    __metadata("design:returntype", void 0)
], PurchasedItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PurchasedItemsController.prototype, "remove", null);
exports.PurchasedItemsController = PurchasedItemsController = __decorate([
    (0, common_1.Controller)('purchased-items'),
    __metadata("design:paramtypes", [purchased_items_service_1.PurchasedItemsService])
], PurchasedItemsController);
//# sourceMappingURL=purchased-items.controller.js.map