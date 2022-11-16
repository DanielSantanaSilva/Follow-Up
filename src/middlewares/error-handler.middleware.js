import { HttpError } from "../errors/http-request.error.js";

export const errorMiddleware = (error, request, response, next) => {
  if (error instanceof HttpError) {
    return response.status(error.status).json({
      status: error.status,
      message: error.message,
      details: error.details,
    });
  }

  return response.status(500).json({ message: "Server Internal Error" });
};
