import { User } from '@authentication/models';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../infrastructure/user.repository';
import { UserModel } from './user';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  async createUser(user: User): Promise<User> {
    const userModel = new UserModel(user);
    const { id } = await this.userRepository.saveUser(userModel);
    userModel.setId(id);

    return userModel;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findUserByEmail(email);
    return new UserModel(user);
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findUserByEmail(email);
    const userModel = new UserModel(user);

    if (userModel.isPasswordEquals(password)) {
      return userModel.toDto();
    }

    return null;
  }

  async loginUser(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
