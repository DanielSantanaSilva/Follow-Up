import { randomUUID } from "node:crypto";
import { DateTime } from "../utils/date.utils.js";
import { CreateUserValidator } from "../validators/create-user.validator.js";
import { UserEntity } from "../entities/user.entity.js";
import { BadRequestError } from "../errors/bad-request.error.js";
import { PasswordUtil } from "../utils/password.utils.js";

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
      return { user: null, errors: validations.errors };
    }

    const userId = randomUUID();
    const hashedPassword = await new PasswordUtil().generateHash(password);
    const userCreatedDate = DateTime.getCurrentDateFormatted("yyyy-MM-dd");

    const createdUser = new UserEntity(
      userId,
      name,
      email,
      hashedPassword,
      userCreatedDate
    );

    this.userRepository.save(createdUser);

    return {
      user: {
        id: userId,
        name,
        email,
        createdDate: userCreatedDate,
      },

      errors: null,
    };
  }
}
