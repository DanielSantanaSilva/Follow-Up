import { randomUUID } from "node:crypto";
import { DateTime } from "../utils/date.utils.js";
import { CreateUserValidator } from "../validators/create-user.validator.js";
import { UserEntity } from "../entities/user.entity.js";
import { BadRequestError } from "../errors/bad-request.error.js";

export class CreateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.createUserValidations = new CreateUserValidator();
  }
  async execute({ name, email, password }) {
    const users = await this.userRepository.listAll();
    const emailList = users.map((user) => user.email);

    const validations = this.createUserValidations.execute({
      name,
      email,
      password,
      emailList,
    });

    if (validations.hasErrors()) {
      throw new BadRequestError("Bad Request", validations.errors);
    }

    const userId = randomUUID();
    const userCreatedDate = DateTime.getCurrentDateFormatted("yyyy-MM-dd");
    const createdUser = new UserEntity(
      userId,
      name,
      email,
      password,
      userCreatedDate
    );

    this.userRepository.save(createdUser);

    return createdUser;
  }
}
