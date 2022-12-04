import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';

@Injectable()
export class UserService {
  loginUser(user: User) {
    throw new Error('not implemented');
  }
}
