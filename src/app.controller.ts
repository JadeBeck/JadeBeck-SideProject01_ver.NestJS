import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//controller 소스 - client의 request을 처리하고, response를 보냅니다.
@Controller()  //컨트롤러의 역할은 url을 가져오고 함수를 실행하는 것(익스프레스의 라우터와 같은 역할!!!!) 비즈니스 로직은 서비스단에서 한다
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()  //겟 데코레이터(익스프레스의 겟 라우터와 같은 역할) => 네스트는 이 url에 들어왔을 때 아래 함수를 실행함. 데코레이터와 함수 라인은 붙여 써야 함. 함수의 비즈니스로직은 서비스단에서 구현됨.
  //익스프레스에서는 app.get 쓰고 함수를 썼는데, 여기서는 @Get()이런 식으로 쓴다. 즉! 컨트롤러는 url을 가져와서, 이걸 함수로 매핑한다. => 익스프레스에서 했던 라우트 세팅이 필요가 없다. 자동적으로 이뤄진다.
  getHello(): string {
    return this.appService.getHello();  //provider인 AppService에게 비즈니스 처리 request 전송 후 받은 결과를 client에게 respond
  }
}
