import {UserRole} from '@guitar-shop/shared-types';
import {ApiProperty} from '@nestjs/swagger';
import {Expose, Transform} from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'User ID',
    example: '3afa868f-e0d7-450d-bef5-101667e6b888'
  })
  @Transform(({obj}) => obj._id.toString())
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'The date a user was created at',
    example: '2023-02-07T13:44:35.439Z'
  })
  @Expose()
  public createdAt: string[];

  @ApiProperty({
    description: 'The unique user email address',
    example: 'John@Doe.com'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Name',
    example: 'John'
  })
  @Expose()
  public userName: string;

  @ApiProperty({
    description: 'UserRole',
    example: 'Either Admin or User is available'
  })
  @Expose()
  public userRole: UserRole;
}