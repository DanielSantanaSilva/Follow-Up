import criaUsuario from "../../src/casos-de-uso/cria-usuario.js";

function testarCriarUsuario() {
  criaUsuario("Matheus", "matheus@email.com", "12367234");
  criaUsuario("Gabriel", "gabriel@email.com", "92827243");
  criaUsuario("Rafael", "rafael@email.com", "62718925");
  criaUsuario("Gabriel", "gabriel@email.com", "92827243");
  criaUsuario("", "", "62718925");
}

testarCriarUsuario();
