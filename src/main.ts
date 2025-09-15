import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración básica de Swagger
  const config = new DocumentBuilder()
    .setTitle('Tickets API')
    .setDescription('API para gestión de tickets, usuarios, edificios, etc.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger se verá en http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();
