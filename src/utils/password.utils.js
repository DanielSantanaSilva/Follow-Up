import bcrypt from "bcrypt";

export class PasswordUtil {
  async generateHash(plainText) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(plainText, salt);

    return hash;
  }
}
