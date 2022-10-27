import validator from "validator";

export default class CriarValidacao {
  constructor(contaRepository) {
    this.contaRepository = contaRepository;

    this.validations = [
      {
        filter: ({ nome }) => validator.isEmpty(nome),
        field: "nome",
        message: "Nome não pode ser vazio",
      },
      {
        filter: ({ senha }) => validator.isEmpty(senha),
        field: "senha",
        message: "Senha não pode ser vazia",
      },
      {
        filter: ({ senha }) => !validator.isLength(senha, { min: 8 }),
        field: "senha",
        message: "Senha precisa ter pelo menos 8 caracteres",
      },
      {
        filter: ({ email }) => !validator.isEmail(email),
        field: "email",
        message: "Email deve ser em endereço de email válido",
      },
      {
        filter: ({ email }) =>
          this.contaRepository
            .lista()
            .map((conta) => conta.email)
            .includes(email),
        field: "email",
        message: "Email precisa ser unico",
      },
    ];
  }
  executa(nome, email, senha) {
    const validationObject = {
      temErros: false,
      erros: [],
      dados: {
        nome,
        email,
        senha,
      },
    };
    this.validations.forEach((validator) => {
      if (validator.filter({ nome, email, senha })) {
        this.#adicionarErro(validationObject, validator);
      }
    });

    return validationObject;
  }

  #adicionarErro(validationObject, validator) {
    validationObject.temErros = true;
    validationObject.erros.push({
      campo: validator.field,
      mensagem: validator.message,
    });
  }
}
