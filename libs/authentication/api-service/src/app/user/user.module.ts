import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { environment } from '../../environments/environment';
import { JwtStrategy } from './application/auth/jwt.staretgy';
import { LocalStrategy } from './application/auth/local.strategy';
import { UserController } from './application/user.controller';
import { UserService } from './domain/user.service';
import { UserRepository } from './infrastructure/user.repository';
import { UserEntity, UserSchema } from './infrastructure/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: process.env.jwtSecret || environment.jwtSecret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [UserRepository, UserService, LocalStrategy, JwtStrategy],
  controllers: [UserController],
})
export class UserModule {}
