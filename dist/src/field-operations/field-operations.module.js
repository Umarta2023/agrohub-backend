"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldOperationsModule = void 0;
const common_1 = require("@nestjs/common");
const field_operations_service_1 = require("./field-operations.service");
const field_operations_controller_1 = require("./field-operations.controller");
const typeorm_1 = require("@nestjs/typeorm");
const field_operation_entity_1 = require("./entities/field-operation.entity");
const fields_module_1 = require("../fields/fields.module");
let FieldOperationsModule = class FieldOperationsModule {
};
exports.FieldOperationsModule = FieldOperationsModule;
exports.FieldOperationsModule = FieldOperationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([field_operation_entity_1.FieldOperation]),
            (0, common_1.forwardRef)(() => fields_module_1.FieldsModule),
        ],
        controllers: [field_operations_controller_1.FieldOperationsController],
        providers: [field_operations_service_1.FieldOperationsService],
    })
], FieldOperationsModule);
//# sourceMappingURL=field-operations.module.js.map