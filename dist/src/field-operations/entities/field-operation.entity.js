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
exports.FieldOperation = void 0;
const field_entity_1 = require("../../fields/entities/field.entity");
const typeorm_1 = require("typeorm");
let FieldOperation = class FieldOperation {
    id;
    fieldId;
    field;
    type;
    date;
    notes;
    cost;
    createdAt;
    updatedAt;
};
exports.FieldOperation = FieldOperation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FieldOperation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FieldOperation.prototype, "fieldId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => field_entity_1.Field),
    (0, typeorm_1.JoinColumn)({ name: 'fieldId' }),
    __metadata("design:type", field_entity_1.Field)
], FieldOperation.prototype, "field", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FieldOperation.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], FieldOperation.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FieldOperation.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], FieldOperation.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FieldOperation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FieldOperation.prototype, "updatedAt", void 0);
exports.FieldOperation = FieldOperation = __decorate([
    (0, typeorm_1.Entity)('field_operations')
], FieldOperation);
//# sourceMappingURL=field-operation.entity.js.map