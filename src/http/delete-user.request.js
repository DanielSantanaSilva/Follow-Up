export class DeleteUserRequest {
  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  async execute(req, res) {
    const connection = await DBConnection().getInstance();
    const collection = new UserRepository(connection);
    await collection.delete(id);
    const id = req.params.id;
    this.User.delete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "User successfully removed" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  }
}
