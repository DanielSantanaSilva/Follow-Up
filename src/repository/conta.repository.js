import fs from "fs";
export default class ContaRepository {
  constructor(caminhoArquivo = "./dados/contas.json") {
    this.caminhoArquivo = caminhoArquivo;
  }

  salva(conta) {
    const listaSalva = this.lista();
    listaSalva.push(conta);

    const data = JSON.stringify(listaSalva);
    fs.writeFileSync(this.caminhoArquivo, data);
    return conta;
  }

  lista() {
    try {
      return JSON.parse(fs.readFileSync(this.caminhoArquivo));
    } catch (error) {
      return [];
    }
  }
}
