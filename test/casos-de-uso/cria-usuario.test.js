import CriaUsuarioCasoDeUso from "../../src/casos-de-uso/cria-usuario.js";
import ContaRepository from "../../src/repository/conta.repository.js";

function testarCriarUsuario() {
  const repository = new ContaRepository();
  const casoDeUso = new CriaUsuarioCasoDeUso(repository);

  casoDeUso.executa("Matheus", "matheus@email.com", "12367234");
  casoDeUso.executa("Gabriel", "gabriel@email.com", "92827243");
  casoDeUso.executa("Rafael", "rafael@email.com", "62718925");
  casoDeUso.executa("Gabriel", "gabriel@email.com", "92827243");
  casoDeUso.executa("", "", "62718925");
  console.log(repository.lista())
}

testarCriarUsuario();
