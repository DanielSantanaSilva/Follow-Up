import { HttpError } from "./http-request.error.js";

export class NotFoundError extends HttpError {
  constructor(message) {
    super(message, 404);
  }
}
