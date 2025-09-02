"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsModule = void 0;
const common_1 = require("@nestjs/common");
const ai_controller_1 = require("./ai/ai.controller");
const ai_service_1 = require("./ai/ai.service");
const weather_controller_1 = require("./weather/weather.controller");
const weather_service_1 = require("./weather/weather.service");
const news_controller_1 = require("./news/news.controller");
const news_service_1 = require("./news/news.service");
let IntegrationsModule = class IntegrationsModule {
};
exports.IntegrationsModule = IntegrationsModule;
exports.IntegrationsModule = IntegrationsModule = __decorate([
    (0, common_1.Module)({
        controllers: [ai_controller_1.AiController, weather_controller_1.WeatherController, news_controller_1.NewsController],
        providers: [ai_service_1.AiService, weather_service_1.WeatherService, news_service_1.NewsService]
    })
], IntegrationsModule);
//# sourceMappingURL=integrations.module.js.map