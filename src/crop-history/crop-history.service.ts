import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CropHistory } from './entities/crop-history.entity';

@Injectable()
export class CropHistoryService {
  constructor(
    @InjectRepository(CropHistory)
    private readonly cropHistoryRepository: Repository<CropHistory>,
  ) {}
}