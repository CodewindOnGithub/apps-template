import { User } from '@authentication/models';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../infrastructure/user.repository';
import { UserModel } from './user';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: User): Promise<User> {
    const userModel = new UserModel(user);
    const { id } = await this.userRepository.saveUser(userModel);
    userModel.setId(id);

    return userModel;
  }
}
