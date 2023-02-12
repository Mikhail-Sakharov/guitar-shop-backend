import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from '@nestjs/config';
import {ENV_FILE_PATH} from './app.constant';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
