import { User } from '@authentication/models';
import { Injectable } from '@nestjs/common';
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
}
