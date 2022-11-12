import "dotenv/config";
import { DBConnection } from "../src/infra/db-connection.js";
import { UserRepository } from "../src/repositories/user.repository.js";
import { CreateUserUseCase } from "../src/use-cases/create-user.js";

const connection = await DBConnection.getInstance(
  process.env.DB_CONNECTION_STRING,
  process.env.DB_NAME
);

const userRepository = new UserRepository(connection);

const createUserUseCase = new CreateUserUseCase(userRepository);
const result = await createUserUseCase.execute({
  name: "Eduardo",
  email: "eduardo@email.com",
  password: "12348765",
});

const users = await userRepository.listAll();

console.log(users, result);

await DBConnection.closeConnection();
