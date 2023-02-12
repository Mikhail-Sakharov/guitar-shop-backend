import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsString, MinLength, MaxLength} from 'class-validator';
import {AUTH_USER_EMAIL_NOT_VALID} from '../auth.constant';

export class CreateUserDto {
  @ApiProperty({
    description: 'The unique user email address',
    example: 'John@Doe.com'
  })
  @IsEmail(
    {},
    {message: AUTH_USER_EMAIL_NOT_VALID},
  )
  public email: string;

  @ApiProperty({
    description: 'Name',
    example: 'John'
  })
  @IsString()
  @MinLength(1)
  @MaxLength(15)
  public userName: string;

  @ApiProperty({
    description: 'Password',
    example: '123456'
  })
  @IsString()
  @MinLength(6)
  @MaxLength(12)
  public password: string;
}