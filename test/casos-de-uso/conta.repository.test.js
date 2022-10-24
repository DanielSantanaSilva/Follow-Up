import criaUsuario from "../../src/casos-de-uso/cria-usuario.js";
import { salva, lista } from "../../src/repository/conta.repository.js";

function testarRepository() {
  criaUsuario("Matheus", "matheus@email.com", "12367278");
  criaUsuario("Gabriel", "gabriel@email.com", "92827228");
  criaUsuario("Rafael", "rafael@email.com", "62718925");

  salva({
    id: "8a3565bb-054d-44cc-9bfb-22b821531ff7",
    nome: "daniel",
    email: "daniel@email.com",
    senha: "12345678",
    dataCriacao: "2022-10-21",
  });

  console.log(lista());
}

testarRepository();
