import { writeFileSync, readFileSync, existsSync } from "node:fs";

export class FileSystem {
  constructor(path) {
    this.path = path;
  }
  save(content) {
    try {
      const fileData = JSON.stringify(content);
      writeFileSync(this.path, fileData, { encoding: "utf8" });
    } catch (error) {
      console.error(error);
    }
  }

  read() {
    if (!existsSync(this.path)) {
      saveOnFile(this.path, []);
    }

    try {
      const fileData = readFileSync(this.path, { encoding: "utf8" });
      return fileData === "" ? [] : JSON.parse(fileData);
    } catch (error) {
      console.error(error);
    }
  }
}
