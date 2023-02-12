import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {ENV_FILE_PATH} from './app.constant';
import {ProductModule} from './product/product.module';
import {ReviewModule} from './review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH
    }),
    ProductModule,
    ReviewModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
