// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  private readonly botToken: string;

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    const token = this.configService.get<string>('BOT_TOKEN');
    if (!token) {
      throw new Error('BOT_TOKEN is not defined in .env file');
    }
    this.botToken = token;
  }

  async validateAndProcessInitData(initData: string): Promise<User> {
    const params = new URLSearchParams(initData);
    
    const hash = params.get('hash');
    const userParam = params.get('user');

    if (!hash || !userParam) {
      throw new UnauthorizedException('Invalid initData: missing hash or user data');
    }

    if (!this.isSignatureValid(initData, hash)) {
      throw new UnauthorizedException('Invalid initData signature');
    }
    
    const userDataFromTelegram = JSON.parse(userParam);

    let user = await this.userRepository.findOneBy({ telegramId: userDataFromTelegram.id });

    if (!user) {
      const newUser = this.userRepository.create({
        telegramId: userDataFromTelegram.id,
        firstName: userDataFromTelegram.first_name,
        lastName: userDataFromTelegram.last_name,
        username: userDataFromTelegram.username,
      });
      user = await this.userRepository.save(newUser);
    }
    
    return user;
  }

  private isSignatureValid(initData: string, receivedHash: string): boolean {
    const params = new URLSearchParams(initData);
    params.delete('hash');
    
    const dataCheckString = Array.from(params.entries())
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
      .map(([key, value]) => `${key}=${value}`)
      .join('\n');

    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(this.botToken).digest();
    const calculatedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

    return calculatedHash === receivedHash;
  }
}