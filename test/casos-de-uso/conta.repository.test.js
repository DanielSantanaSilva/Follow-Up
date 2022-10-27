import CriaUsuarioCasoDeUso from "../../src/casos-de-uso/cria-usuario.js";
import ContaRepository from "../../src/repository/conta.repository.js";

function testarRepository() {
  const repository = new ContaRepository();
  const casoDeUso = new CriaUsuarioCasoDeUso(repository);
  casoDeUso.executa("Matheus", "matheus@email.com", "12367278");
  casoDeUso.executa("Gabriel", "gabriel@email.com", "92827228");
  casoDeUso.executa("Rafael", "rafael@email.com", "62718925");

  repository.salva({
    id: "8a3565bb-054d-44cc-9bfb-22b821531ff7",
    nome: "daniel",
    email: "daniel@email.com",
    senha: "12345678",
    dataCriacao: "2022-10-21",
  });

  console.log(repository.lista());
}

testarRepository();
