import { HttpError } from "../errors/http-request.error.js";
import { CreateUserUseCase } from "../use-cases/create-user.js";

export class CreateUserRequest {
  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
  }
  async execute(req, res) {
    const { name, email, password } = req.body;

    const createUserUseCase = new CreateUserUseCase(this.#userRepository);

    const { user, errors } = await createUserUseCase.execute({
      email,
      password,
      name,
    });

    if (errors?.length != null) {
      throw new HttpError("Bad Request", 400, errors);
    }

    const createdUser = await createUserUseCase.execute({
      email,
      password,
      name,
    });

    return res.status(201).json(user);
  }
}
