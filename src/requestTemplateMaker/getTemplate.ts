import fs from "fs";
import path from "path";

export const getTemplate = (name: string) => {
  return fs
    .readFileSync(path.join(__dirname, `../templates/${name}.template`))
    .toString();
};
