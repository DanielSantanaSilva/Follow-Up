import { BadRequestError } from "../errors/bad-request.error.js";

export const errorMiddleware = (error, req, res, next) => {
  if (error instanceof BadRequestError) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
      errors: error.errors,
    });
  }

  return res.status(500).json({ message: "Server Internal Error" });
};
