import { MiddlewareConsumer, NestMiddleware } from '@nestjs/common';
export declare class AppModule implements NestMiddleware {
    configure(consumer: MiddlewareConsumer): void;
    use(req: any, res: any, next: (error?: any) => void): any;
}
