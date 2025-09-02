"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAgroNotificationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_agro_notification_dto_1 = require("./create-agro-notification.dto");
class UpdateAgroNotificationDto extends (0, mapped_types_1.PartialType)(create_agro_notification_dto_1.CreateAgroNotificationDto) {
}
exports.UpdateAgroNotificationDto = UpdateAgroNotificationDto;
//# sourceMappingURL=update-agro-notification.dto.js.map