//NestJS 애플리케이션은 main.ts에서 시작함
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  //AppModule로부터 애플리케이션을 생성. 앱 모듈은 모든 것의 루트 모듈 같은 것. 모듈은? 앱의 일부분(만약.. 인스타를 만든다고 한다면 사진/비디오 등등 다양한 모듈이 들어가겠지)
  await app.listen(3003);
}
bootstrap();
