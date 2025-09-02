"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@nestjs/common");
const User = (...args) => (0, common_1.SetMetadata)('user', args);
exports.User = User;
//# sourceMappingURL=user.decorator.js.map