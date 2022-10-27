import { randomUUID } from "crypto";

export default class EntidadeConta {
  constructor(nome, email, senha) {
    this.id = randomUUID();
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataCriacao = new Date().toISOString().split("T")[0];
  }
}
