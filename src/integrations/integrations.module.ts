import { Module } from '@nestjs/common';
import { AiController } from './ai/ai.controller';
import { AiService } from './ai/ai.service';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';

@Module({
  controllers: [AiController, WeatherController, NewsController],
  providers: [AiService, WeatherService, NewsService]
})
export class IntegrationsModule {}
