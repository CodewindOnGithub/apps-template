import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './application/user.controller';
import { UserService } from './domain/user.service';
import { UserRepository } from './infrastructure/user.repository';
import { UserEntity, UserSchema } from './infrastructure/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
  ],
  providers: [UserRepository, UserService],
  controllers: [UserController],
})
export class UserModule {}
