// criar classe que vai criar elementos que irão ser referenciados dentro do banco de dados

import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity ({name: 'tb_postagens'}) // dizendo que a entidade é uma classe que pertence a tabela postagem
export class Postagem {
// atributos da tabela (atributos da classe são o da tabela)
//decorator que diz que o campo id é uma coluno, com chave primária e que tem autoincremento

   @PrimaryGeneratedColumn () 
   id: number;


   @IsNotEmpty () // vai ser validado pelo class validator 
   @Column({length: 100, nullable: false }) // decorator que diz que é uma coluna com algumas informações, o primeiro é o tamnaho de uma coluna e a segunda se o valor pode ser nulo
   titulo:string;
   
   @IsNotEmpty () 
   @Column({length: 100, nullable: false }) 
   texto:string;

   @UpdateDateColumn () // vai salvar a data da ultima modificação - pega a data de sistema 
   data: Date; 
    tema: any;

}