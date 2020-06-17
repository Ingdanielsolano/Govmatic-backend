import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { APP_URL_PREFIX, APP_HOST, NODE_ENV, URL_SERVER } from "./common/config/environment";

async function bootstrap() {
  const logger = new Logger('HttpsServer');
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(APP_URL_PREFIX);
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Api cielo')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors({ origin: getUrlCors(), credentials: true, methods: "GET,HEAD,PUT,PATCH,POST,DELETE" });

  await app.listen(process.env.PORT || 3000);

  logger.log(`Server running on ${URL_SERVER}`);
}

function getUrlCors() {
  if (NODE_ENV === "production")
    return ['http://app.govmatic.com', 'https://app.govmatic.com', URL_SERVER]
  else
    return ['http://dev.govmatic.com', 'https://dev.govmatic.com']
}

bootstrap();
