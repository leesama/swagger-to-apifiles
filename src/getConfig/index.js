import fs from "fs-extra";
import path from "path";
import { error } from "../utils";
const configPath = path.resolve("generateTypeBySwagger.json");
// 获取配置
const getConfig = () => {
    if (!fs.existsSync(configPath)) {
        error(`配置文件不存在,将自动生成配置文件,请重新填写配置`);
        fs.copySync(path.join(__dirname, "../templates/generateTypeBySwagger.json"), configPath);
        process.exit(1);
    }
    return require(configPath);
};
export default getConfig;
//# sourceMappingURL=index.js.map