import { NotFoundError } from "../errors/not-found.error.js";

export class DeleteUserUseCase {
  #userRepository;
  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  async execute({ userId }) {
    const possibleUser = await this.#userRepository.findById(userId);

    if (possibleUser === null) {
      throw new NotFoundError(`User with id ${userId} was not found!`);
    }

    await this.#userRepository.deleteOne(userId);
  }
}
