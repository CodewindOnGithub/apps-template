import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, UserEntity } from './user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(UserEntity.name) private userModel: Model<UserDocument>
  ) {}

  async createUser(
    userEntity: UserEntity
  ): Promise<UserEntity & { id?: string }> {
    return new this.userModel(userEntity).save();
  }
}
