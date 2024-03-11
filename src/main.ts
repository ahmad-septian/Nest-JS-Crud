import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const appConfig = {};

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    appConfig,
  );
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(cookieParser());
  app.enableCors({
    origin: [],
    credentials: true,
  });
  app.disable('x-powered-by');

  await app.listen(process.env.APP_PORT);
}
bootstrap();
