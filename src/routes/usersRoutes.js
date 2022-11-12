import { Router } from "express";
import { DBConnection } from "../infra/db-connection.js";
import { UserRepository } from "../repositories/user.repository.js";
import { CreateUserRequest } from "../http/create-user.request.js";
import { DeleteUserRequest } from "../http/delete-user.request.js";

const usersRoutes = new Router();

const connection = await DBConnection.getInstance(
  process.env.DB_CONNECTION_STRING,
  process.env.DB_NAME
);

const userRepository = new UserRepository(connection);

const createUserRequest = new CreateUserRequest(userRepository);
const deleteUserRequest = new DeleteUserRequest(userRepository);


usersRoutes.post("/account", createUserRequest.execute.bind(createUserRequest));
usersRoutes.delete("/account/:id",deleteUserRequest.execute.bind(deleteUserRequest));
// usersRoutes.get("/account", new ListUsersRequest(userRepository).execute);
// usersRoutes.get("/account/:id", new GetUserRequest(userRepository).execute);
// usersRoutes.put("/account/:id", new UpdateUserRequest(userRepository).execute);

export { usersRoutes };
