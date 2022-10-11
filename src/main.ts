import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe()); // Todas as requesições passa por aqui 
  app.enableCors (); 
  await app.listen (4000) //mudar a porta pq o react ja estava rodando na porta 3000

}
bootstrap();
