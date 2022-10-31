import EntidadeConta from "../entidades/conta.entity.js";
import CriarValidacao from "../validadores/cria-validacao.js";

export default class CriaUsuarioCasoDeUso {
  constructor(contaRepository) {
    this.contaRepository = contaRepository;
    this.criaContaValidador = new CriarValidacao(this.contaRepository);
  }
  executa(nome, email, senha) {
    const validation = this.criaContaValidador.executa(nome, email, senha);
    if (validation.temErros) {
      return validation.erros.map((erro) => erro.mensagem);
    }

    const novoUsuario = new EntidadeConta(nome, email, senha);
    return this.contaRepository.salva(novoUsuario);
  }
}
