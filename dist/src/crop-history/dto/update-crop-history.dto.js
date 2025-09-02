"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCropHistoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_crop_history_dto_1 = require("./create-crop-history.dto");
class UpdateCropHistoryDto extends (0, mapped_types_1.PartialType)(create_crop_history_dto_1.CreateCropHistoryDto) {
}
exports.UpdateCropHistoryDto = UpdateCropHistoryDto;
//# sourceMappingURL=update-crop-history.dto.js.map