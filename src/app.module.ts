import { MiddlewareConsumer, Module, NestMiddleware, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {AuthMiddleware} from "./middleware/auth.middleware";

//module 소스 - 모듈을 정의합니다.(controller와 service 정의)
@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestMiddleware {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(AuthMiddleware)
        .forRoutes({path: 'users', method: RequestMethod.GET});
  }
  use(req: any, res: any, next: (error?: any) => void): any {
  }
}