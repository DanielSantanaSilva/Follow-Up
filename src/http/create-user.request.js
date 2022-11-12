import { CreateUserUseCase } from "../use-cases/create-user.js";

export class CreateUserRequest {
  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
  }
  async execute(req, res) {
    const { name, email, password } = req.body;

    const createUserUseCase = new CreateUserUseCase(this.#userRepository);

    const createdUser = await createUserUseCase.execute({
      email,
      password,
      name,
    });

    return res.status(201).json(createdUser);
  }
}
