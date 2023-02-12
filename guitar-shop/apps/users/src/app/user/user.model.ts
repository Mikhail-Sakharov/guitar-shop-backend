import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {User, UserRole} from '@guitar-shop/shared-types';

const USERS_COLLECTION_NAME = 'users';

@Schema({
  collection: USERS_COLLECTION_NAME,
  timestamps: true
})
export class UserModel extends Document implements User {
  @Prop({
    required: true,
    unique: true
  })
  public email: string;

  @Prop({
    required: true
  })
  public userName: string;

  @Prop({
    required: true
  })
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
    default: UserRole.User
  })
  public userRole: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
