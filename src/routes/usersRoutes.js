import { Router } from "express";
import { DBConnection } from "../infra/db-connection.js";
import { UserRepository } from "../repositories/user.repository.js";
import { CreateUserRequest } from "../http/create-user.request.js";
import { DeleteUserRequest } from "../http/delete-user.request.js";

const usersRoutes = new Router();

const connection = await DBConnection.getInstance();
const userRepository = new UserRepository(connection);

usersRoutes.post("/account", (req, resp) =>
  new CreateUserRequest(userRepository).execute(req, resp)
);

usersRoutes.delete("/account/:id", (req, resp) =>
  new DeleteUserRequest(userRepository).execute(req, resp)
);

export { usersRoutes };

// usersRoutes.get("/account", new ListUsersRequest(userRepository).execute);
// usersRoutes.get("/account/:id", new GetUserRequest(userRepository).execute);
// usersRoutes.put("/account/:id", new UpdateUserRequest(userRepository).execute);
