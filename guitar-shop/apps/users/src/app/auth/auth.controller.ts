import {Body, Controller, Get, HttpCode, HttpStatus, Post, RawBodyRequest, Req, UseGuards} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {fillObject} from '@guitar-shop/core';
import {CreateUserDto} from './dto/create-user.dto';
import {LoginUserDto} from './dto/login-user.dto';
import {UserRdo} from './rdo/user.rdo';
import {LoggedUserRdo} from './rdo/logged-user.rdo';
import {TransformedUserRdo} from './rdo/transformed-user.rdo';
import {AuthService} from './auth.service';
import {LoggedUser} from '@guitar-shop/shared-types';
import {JwtAuthGuard} from './guards/jwt-auth.guard';

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
    return fillObject(LoggedUserRdo, {...transformedUser, ...accessToken});
  }

  @ApiResponse({
    type: UserRdo
  })
  @UseGuards(JwtAuthGuard)
  @Get('checkAuth')
  @HttpCode(HttpStatus.OK)
  async checkAuth(
    @Req() req: RawBodyRequest<LoggedUser>
  ) {
    const user = await this.authService.checkAuth(req.user);
    console.log(req.user);
    return fillObject(UserRdo, user);
  }
}
