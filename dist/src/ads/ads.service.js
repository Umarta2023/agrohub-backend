"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsService = void 0;
const common_1 = require("@nestjs/common");
let AdsService = class AdsService {
    create(createAdDto) {
        return 'This action adds a new ad';
    }
    findAll() {
        return `This action returns all ads`;
    }
    findOne(id) {
        return `This action returns a #${id} ad`;
    }
    update(id, updateAdDto) {
        return `This action updates a #${id} ad`;
    }
    remove(id) {
        return `This action removes a #${id} ad`;
    }
};
exports.AdsService = AdsService;
exports.AdsService = AdsService = __decorate([
    (0, common_1.Injectable)()
], AdsService);
//# sourceMappingURL=ads.service.js.map