"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePurchasedItemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_purchased_item_dto_1 = require("./create-purchased-item.dto");
class UpdatePurchasedItemDto extends (0, mapped_types_1.PartialType)(create_purchased_item_dto_1.CreatePurchasedItemDto) {
}
exports.UpdatePurchasedItemDto = UpdatePurchasedItemDto;
//# sourceMappingURL=update-purchased-item.dto.js.map