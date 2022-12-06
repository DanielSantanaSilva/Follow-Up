export class ValidationResult {
  constructor(data) {
    this.data = data;
    this.errors = [];
  }

  addError(error) {
    this.errors.push(error);
  }

  hasErrors() {
    return this.errors.length > 0;
  }
}
