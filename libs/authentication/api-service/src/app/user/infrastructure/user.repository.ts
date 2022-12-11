import { User } from '@authentication/models';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, UserEntity } from './user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(UserEntity.name) private userModel: Model<UserDocument>
  ) {}

  async saveUser(user: User): Promise<UserEntity & { id?: string }> {
    return new this.userModel(user).save();
  }

  async findUserById(id: string): Promise<UserEntity> {
    return this.userModel.findById(id);
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      throw new NotFoundException(`User ${email} not found`);
    }
    return user;
  }
}
