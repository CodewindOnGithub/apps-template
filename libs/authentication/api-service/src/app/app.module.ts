import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoDbUri),
    UserModule,
  ],
})
export class AppModule {}
