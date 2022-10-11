//modulo de configuração do banco de dados 
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './Postagem/entities/postagem.entity';
import { PostagemModule } from './Postagem/postagem.modules';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';


@Module({
  imports: [
    TypeOrmModule.forRoot ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'cr_blogpessoal',
    entities: [Postagem, Tema],
    synchronize: true
}), 
  PostagemModule,
  TemaModule // modulo principal se conecta com o módulo de postagens 
  ],    
  controllers: [],
  providers: [],
})

export class AppModule {}
