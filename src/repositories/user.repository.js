import "dotenv/config";
import { UserEntity } from "../entities/user.entity.js";

export class UserRepository {
  #usersCollection;

  constructor(connection) {
    this.#usersCollection = connection.collection("users");
  }

  async save(user) {
    await this.#usersCollection.insertOne({ ...user });
  }

  async delete(id) {
    await this.#usersCollection.deleteOne({ _id: id });
  }

  async listAll() {
    const users = await this.#usersCollection.find().toArray();

    return users.map(
      (userData) =>
        new UserEntity(
          userData.id,
          userData.name,
          userData.email,
          userData.password,
          userData.createdDate
        )
    );
  }
}
