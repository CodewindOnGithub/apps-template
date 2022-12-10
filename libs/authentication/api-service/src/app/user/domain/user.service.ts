import { UserDto } from '@authentication/models';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../infrastructure/user.repository';
import { UserModel } from './user';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userDto: UserDto): Promise<UserDto> {
    const { firstName, lastName } = userDto;
    const userModel = new UserModel(firstName, lastName);
    const userEntity = await this.userRepository.createUser(userModel);
    return {
      firstName: userEntity.firstName,
      lastName: userEntity.lastName,
      id: userEntity.id,
    };
  }
}
