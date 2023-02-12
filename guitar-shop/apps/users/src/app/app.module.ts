import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from '@nestjs/config';
import {ENV_FILE_PATH} from './app.constant';
import {jwtOptions} from '../config/jwt.config';
// import envSchema from './env.schema';
import databaseConfig from '../config/database.config';
import {MongooseModule} from '@nestjs/mongoose';
import {getMongoDbConfig} from '../config/mongodb.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [databaseConfig, jwtOptions]
    }),
    MongooseModule.forRootAsync(
      getMongoDbConfig()
    ),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
