import fs from "fs";
import path from "path";
export const getTemplate = (name) => {
    return fs
        .readFileSync(path.join(__dirname, `../templates/${name}.template`))
        .toString();
};
//# sourceMappingURL=getTemplate.js.map