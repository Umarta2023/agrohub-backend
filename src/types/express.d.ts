// src/types/express.d.ts
import { User } from '../users/entities/user.entity';

// Расширяем стандартный тип Request из Express
declare global {
  namespace Express {
    export interface Request {
      // Добавляем опциональное свойство user
      user?: User;
    }
  }
}