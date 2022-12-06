export class ValidationError {
  constructor(field, message) {
    this.field = field;
    this.message = message;
  }
}
