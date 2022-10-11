
import { IsNotEmpty } from "class-validator";
import { Postagem } from "src/Postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: 'tb_temas'})
export class Tema{
    @PrimaryGeneratedColumn() // Define o atributo como chave primaria e já adiciona o auto increment
    id: number;

    @IsNotEmpty() // Verifica se a informação não está vazia
    @Column ({length: 255, nullable: false}) // Definindo o tamanho do atributo e se ele pode ser nulo
    descricao: String;
    @OneToMany (() => Postagem, (postagem) => postagem.tema) // quando a letra é minuscula é um objeto 
    postagem: Postagem []; 
}