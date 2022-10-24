import validator from "validator";
import { lista } from "../repository/conta.repository.js";

const validations = [
  {
    filter: (nome) => validator.isEmpty(nome),
    field: "nome",
    message: "Nome não pode ser vazio",
  },
  {
    filter: (senha) => validator.isEmpty(senha),
    field: "senha",
    message: "Senha não pode ser vazia",
  },
  {
    filter: (senha) => !validator.isLength(senha, { min: 8 }),
    field: "senha",
    message: "Senha precisa ter pelo menos 8 caracteres",
  },
  {
    filter: (email) => !validator.isEmail(email),
    field: "email",
    message: "Email deve ser em endereço de email válido",
  },
  {
    filter: (email) =>
      lista()
        .map((conta) => conta.email)
        .includes(email),
    field: "email",
    message: "Email precisa ser unico",
  },
];

export default function criaContaValidador(nome, email, senha) {
  const validationObject = {
    temErros: false,
    erros: [],
    dados: {
      nome,
      email,
      senha,
    },
  };

  validations.forEach((validator) => {
    if (validator.filter(nome, email, senha)) {
      validationObject.temErros = true;
      validationObject.erros.push({
        campo: validator.field,
        mensagem: validator.message,
      });
    }
  });

  return validationObject;
}
