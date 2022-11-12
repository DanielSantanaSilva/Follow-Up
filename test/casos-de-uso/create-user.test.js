import { CreateUserUseCase } from "../../src/use-cases/create-user.js";

const userRepositoryMock = {
  findAll: () => [],
  save: (user) => user,
};

const createUserUseCase = new CreateUserUseCase(userRepositoryMock);

const user1 = createUserUseCase.execute({
  name: "Daniel",
  email: "daniel@email.com",
  password: "12345678",
});
const user2 = createUserUseCase.execute({
  name: "",
  email: "eduardo@email.com",
  password: "12345",
});

console.log(user1);
console.log(user2);
