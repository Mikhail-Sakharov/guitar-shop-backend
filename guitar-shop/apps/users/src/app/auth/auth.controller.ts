import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {fillObject} from '@guitar-shop/core';
import {CreateUserDto} from './dto/create-user.dto';
import {LoginUserDto} from './dto/login-user.dto';
import {UserRdo} from './rdo/user.rdo';
import {LoggedUserRdo} from './rdo/logged-user.rdo';
import {TransformedUserRdo} from './rdo/transformed-user.rdo';
import {AuthService} from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @ApiResponse({
    type: UserRdo
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillObject(UserRdo, newUser);
  }

  @ApiResponse({
    type: LoggedUserRdo
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.verifyUser(dto);
    const transformedUser = fillObject(TransformedUserRdo, user);
    const accessToken = await this.authService.loginUser(transformedUser);
    return fillObject(LoggedUserRdo, {...user, ...accessToken});
  }
}
