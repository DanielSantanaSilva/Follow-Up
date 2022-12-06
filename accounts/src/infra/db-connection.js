import { MongoClient } from "mongodb";

const connectionString = process.env.DB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;

export class DBConnection {
  static #instance = null;

  static async getInstance() {
    if (DBConnection.#instance === null) {
      DBConnection.#instance = new MongoClient(connectionString);
    }
    await DBConnection.#instance.connect();
    const db = DBConnection.#instance.db(dbName);
    return db;
  }

  static async closeConnection() {
    await DBConnection.#instance.close();
  }
}
