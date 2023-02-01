import { Injectable } from '@nestjs/common';
//controller가 요청한 비즈니스 로직을 처리
@Injectable()  //Service는 @Injectable() 데코레이터를 사용. 이는 스프링의 DI(Dependency Injection)이라는 개념을 사용하는 것. 즉, Service를 사용할 곳에 선언해주면 필요한 시점에 자동으로 객체를 생성해주는 역할을 함. 이때 객체 생성시 사용하던 new를 사용할 필요가 없다.
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
