import { CreateUserUseCase } from "../../src/use-cases/create-user.js";
import { describe, it, expect, jest } from "@jest/globals";
import { ValidationError } from "../../src/validators/validation-error.js";

const userRepositoryMock = {
  listAll: jest.fn(() => []),
  save: (user) => user,
};

const userData = {
  name: "Daniel",
  email: "daniel@email.com",
  password: "12345678",
};

describe("Test created user", () => {
  it("should return a created user", async () => {
    const createUserUseCase = new CreateUserUseCase(userRepositoryMock);
    const { user } = await createUserUseCase.execute(userData);

    expect(user).toStrictEqual({
      id: expect.any(String),
      name: "Daniel",
      email: "daniel@email.com",
      createdDate: expect.stringMatching(/\d{4}(-\d{2}){2}/),
    });
  });

  it("should throw already taken email error", async () => {
    userRepositoryMock.listAll.mockImplementationOnce(() => [userData]);

    const createUserUseCase = new CreateUserUseCase(userRepositoryMock);
    const createUserExecute = async () => {
      const { errors } = await createUserUseCase.execute(userData);
      return errors;
    };

    const expectedErrorList = [
      new ValidationError("email", "email already taken"),
    ];

    expect(createUserExecute()).resolves.toStrictEqual(expectedErrorList);
  });
});
