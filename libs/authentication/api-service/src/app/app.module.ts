import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import * as fs from 'fs';
import { environment } from '../environments/environment';
import { JwtStrategy, LocalStrategy } from './application/auth';
import { UserController } from './application/user';
import { UserService } from './domain/user';
import { UserEntity, UserRepository, UserSchema } from './infrastructure/user';

const publicKey = fs.readFileSync('libs/authentication/api-service/keys/public-key.pem', {
  encoding: 'utf8',
});

const privateKey = fs.readFileSync('libs/authentication/api-service/keys/private-key.pem', {
  encoding: 'utf8',
});

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoDbUri),
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      privateKey,
      publicKey,
      signOptions: {
        expiresIn: '3h',
        issuer: 'apps-template-authentication-service',
        algorithm: 'ES256',
      },
    }),
  ],
  providers: [UserRepository, UserService, LocalStrategy, JwtStrategy],
  controllers: [UserController],
})
export class AppModule {}
