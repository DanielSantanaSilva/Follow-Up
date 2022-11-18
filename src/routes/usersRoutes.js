import { Router } from "express";
import { DBConnection } from "../infra/db-connection.js";
import { UserRepository } from "../repositories/user.repository.js";
import { CreateUserRequest } from "../http/create-user.request.js";
import { DeleteUserRequest } from "../http/delete-user.request.js";
// import { ListUsersRequest } from "../http/list-users.request.js";
// import { GetUserRequest } from "../http/get-user.request.js";
// import { UpdateUserRequest } from "../http/update-user.request.js";

const usersRoutes = new Router();

const connection = await DBConnection.getInstance();
const userRepository = new UserRepository(connection);

// usersRoutes.get("/account", (req, res) =>
//   new ListUsersRequest(userRepository).execute(req, res)
// );

// usersRoutes.get("/account/:id", (req, res) =>
//   new GetUserRequest(userRepository).execute(req, res)
// );

usersRoutes.post("/account", (req, resp) =>
  new CreateUserRequest(userRepository).execute(req, resp)
);

usersRoutes.delete("/account/:id", (req, resp) =>
  new DeleteUserRequest(userRepository).execute(req, resp)
);

// usersRoutes.put("/account/:id", (req, res) =>
//   new UpdateUserRequest(userRepository).execute(req, res)
// );

export { usersRoutes };
