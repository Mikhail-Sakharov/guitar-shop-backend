import {UserRole} from '@guitar-shop/shared-types';
import {ApiProperty} from '@nestjs/swagger';
import {Expose,} from 'class-transformer';

export class LoggedUserRdo {
  @ApiProperty({
    description: 'User ID',
    example: '3afa868f-e0d7-450d-bef5-101667e6b888'
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'The unique user email address',
    example: 'John@Doe.com'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: '',
    example: ''
  })
  @Expose()
  public userName: string;

  @ApiProperty({
    description: '',
    example: ''
  })
  @Expose()
  public userRole: UserRole;

  @ApiProperty({
    description: 'User\'s access token',
    example: 'A valid JWT token'
  })
  @Expose()
  public accessToken: string;
}
