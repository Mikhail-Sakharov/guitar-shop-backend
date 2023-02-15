import {UserRole} from '@guitar-shop/shared-types';
import {Expose, Transform} from 'class-transformer';

export class TransformedUserRdo {
  @Transform(({obj}) => obj._id.toString())
  @Expose({name: '_id'})
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public userName: string;

  @Expose()
  public userRole: UserRole;
}
