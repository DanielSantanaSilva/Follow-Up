import { randomUUID } from "crypto";
import criaContaValidador from "../validadores/cria-conta.validator.js";

export default function criaUsuario(nome, email, senha) {
  const validation = criaContaValidador(nome, email, senha);
  if (validation.temErros) {
    validation.erros.forEach((erro) => console.log(erro.mensagem));
    return;
  }

  const novoUsuario = {
    id: "",
    nome: "",
    email: "",
    senha: "",
    dataCriacao: "",
  };

  novoUsuario.id = randomUUID();
  novoUsuario.nome = nome;
  novoUsuario.email = email;
  novoUsuario.senha = senha;
  novoUsuario.dataCriacao = new Date().toISOString().split("T")[0];

  return novoUsuario;
}
