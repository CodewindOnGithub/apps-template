import { User } from '@authentication/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserEntity>

@Schema()
export class UserEntity implements User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ default: true })
  isActive?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
