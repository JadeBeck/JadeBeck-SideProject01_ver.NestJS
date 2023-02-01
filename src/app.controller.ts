import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//controller 소스 - client의 request을 처리하고, response를 보냅니다.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();  //provider인 AppService에게 비즈니스 처리 request 전송 후 받은 결과를 client에게 respond
  }
}
