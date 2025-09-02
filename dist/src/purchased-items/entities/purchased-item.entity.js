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
exports.PurchasedItem = void 0;
const typeorm_1 = require("typeorm");
const purchase_entity_1 = require("../../purchases/entities/purchase.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const shop_entity_1 = require("../../shops/entities/shop.entity");
let PurchasedItem = class PurchasedItem {
    id;
    purchaseId;
    purchase;
    productId;
    product;
    name;
    price;
    imageUrl;
    shopId;
    shop;
    quantity;
};
exports.PurchasedItem = PurchasedItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PurchasedItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PurchasedItem.prototype, "purchaseId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => purchase_entity_1.Purchase),
    (0, typeorm_1.JoinColumn)({ name: 'purchaseId' }),
    __metadata("design:type", purchase_entity_1.Purchase)
], PurchasedItem.prototype, "purchase", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], PurchasedItem.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'productId' }),
    __metadata("design:type", product_entity_1.Product)
], PurchasedItem.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PurchasedItem.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], PurchasedItem.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PurchasedItem.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], PurchasedItem.prototype, "shopId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shop_entity_1.Shop, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'shopId' }),
    __metadata("design:type", shop_entity_1.Shop)
], PurchasedItem.prototype, "shop", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], PurchasedItem.prototype, "quantity", void 0);
exports.PurchasedItem = PurchasedItem = __decorate([
    (0, typeorm_1.Entity)('purchased_items')
], PurchasedItem);
//# sourceMappingURL=purchased-item.entity.js.map