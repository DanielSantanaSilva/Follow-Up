import "dotenv/config.js";
import { UserEntity } from "../entities/user.entity.js";
export class UserRepository {
  #usersCollection;

  constructor(connection) {
    this.#usersCollection = connection.collection("users");
  }

  async save(user) {
    await this.#usersCollection.insertOne({ ...user });
  }

  async findById(id) {
    const possibleUser = await this.#usersCollection.findOne({ id });

    if (!possibleUser) {
      return null;
    }
    return this.#mapToEntity(possibleUser);
  }

  async deleteOne(id) {
    await this.#usersCollection.deleteOne({ id });
  }

  async updateOne(id) {
    await this.#usersCollection.updateOne({ id });
  }

  async listAll() {
    const users = await this.#usersCollection.find().toArray();
    return users.map(this.#mapToEntity);
  }

  #mapToEntity(userData) {
    return new UserEntity(
      userData.id,
      userData.name,
      userData.email,
      userData.password,
      userData.createdDate
    );
  }
}
