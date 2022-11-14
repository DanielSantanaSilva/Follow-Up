import users from "../use-cases/create-user.js";

class UserController {
  static listUsers = (req, res) => {
    users.find((err, users) => {
      res.status(200).json(users);
    });
  };

  static ListUser = (req, res) => {
    const id = req.params.id;

    users.findById(id, (err, users) => {
      if (err) {
        res.status(400).send({
          message: `${err.message} - Id user not found`,
        });
      } else {
        res.status(200).send(users);
      }
    });
  };

  static registerUser = (req, res) => {
    let user = new users(req.body);

    user.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failed to register user.`,
        });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static updateUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "User successfully updated" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "User successfully removed" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default UserController;
