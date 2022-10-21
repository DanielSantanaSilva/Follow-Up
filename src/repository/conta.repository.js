import fs from "fs";

export function salva(conta) {
  const listaSalva = lista();
  listaSalva.push(conta);

  const data = JSON.stringify(listaSalva);
  fs.writeFileSync("./dados/contas.json", data);
  return conta;
}

export function lista() {
  try {
    return JSON.parse(fs.readFileSync("./dados/contas.json"));
  } catch (error) {
    return [];
  }
}
