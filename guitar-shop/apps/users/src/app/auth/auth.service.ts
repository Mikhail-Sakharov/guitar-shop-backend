import {UserRole} from '@guitar-shop/shared-types';
import {Inject, Injectable, UnauthorizedException} from '@nestjs/common';
import {ConfigService, ConfigType} from '@nestjs/config';
import {JwtService} from '@nestjs/jwt';
import databaseConfig from '../../config/database.config';
import {UserEntity} from '../user/user.entity';
import {UserRepository} from '../user/user.repository';
import {CreateUserDto} from './dto/create-user.dto';
import {LoginUserDto} from './dto/login-user.dto';

interface TransformedUser {
  _id: string;
  email: string;
  userName: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
    @Inject(databaseConfig.KEY)
    private readonly mongoConfig: ConfigType<typeof databaseConfig>,
    private readonly jwtService: JwtService
  ) {
    console.log(configService.get<string>('database.host'));
    console.log(mongoConfig.password);
  }

  async register(dto: CreateUserDto) {
    const existingUser = await this.userRepository.findByEmail(dto.email);

    if (existingUser) {
      throw new Error('User with the email already exists!');
    }

    const userEntity = await new UserEntity({
      ...dto,
      passwordHash: '',
      userRole: UserRole.User
    }).setPassword(dto.password);

    const createdUser = await this.userRepository.create(userEntity);

    return createdUser;
  }

  async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('No users with such email found!');
    }

    const userEntity = new UserEntity(user);
    const checkUserResult = await userEntity.comparePassword(password);

    if (!checkUserResult) {
      throw new UnauthorizedException('The provided password is incorrect!');
    }

    return {...userEntity.toObject()};
  }

  async loginUser(user: TransformedUser) {
    const payload = {
      _id: user._id,
      email: user.email,
      name: user.userName
    };

    return {
      accessToken: await this.jwtService.signAsync(payload)
    };
  }
}
