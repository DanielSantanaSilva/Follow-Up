import { DeleteUserUseCase } from "../use-cases/delete-user.js";

export class DeleteUserRequest {
  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  async execute(request, response) {
    const userId = request.params.id;
    const deleteUserUseCase = new DeleteUserUseCase(this.#userRepository);
    await deleteUserUseCase.execute({ userId });
    return response.status(204).end();
  }
}
