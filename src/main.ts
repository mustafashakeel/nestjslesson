import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Sharpstudy API')
    .setDescription('This is version 1 of Sharpstudy API')
    .setVersion('1.0')
    .addTag('nestjs')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('v1', app, document);
  


  await app.listen(3000);
}
bootstrap();
