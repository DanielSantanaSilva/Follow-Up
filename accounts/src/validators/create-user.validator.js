import validator from "validator";
import { ValidationError } from "./validation-error.js";
import { ValidationResult } from "./validation-result.js";

export class CreateUserValidator {
  constructor() {
    this.validationResult = new ValidationResult();
  }

  execute({ name, email, password, emailList }) {
    this.#validateName(name);
    this.#validateEmail(email, emailList);
    this.#validatePassword(password);

    return this.validationResult;
  }

  #validateName(name) {
    if (validator.isEmpty(name)) {
      const nameError = new ValidationError("name", "field cannot be empty");
      this.validationResult.addError(nameError);
    }
  }

  #validatePassword(password) {
    if (!validator.isLength(password, { min: 8 })) {
      const passwordError = new ValidationError(
        "password",
        "password must have at least 8 chars"
      );
      this.validationResult.addError(passwordError);
    }
  }

  #validateEmail(email, emailList) {
    if (!validator.isEmail(email)) {
      const invalidEmailError = new ValidationError(
        "email",
        "email is invalid"
      );
      this.validationResult.addError(invalidEmailError);
    }

    if (emailList.includes(email)) {
      const emailTakenError = new ValidationError(
        "email",
        "email already taken"
      );
      this.validationResult.addError(emailTakenError);
    }
  }
}
