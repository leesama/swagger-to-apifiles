import fs from "fs-extra";
import path from "path";
import { hasDuplicates, log } from "../utils";

export interface Config {
  generateConfig: {
    dirName: string;
    swaggerUrl: string;
    dataMapping?: string | null;
    urlPrefix?: string;
  }[];
}

const configPath = path.resolve("generateTypeBySwagger.json");
// 获取配置
const getConfig = () => {
  if (!fs.existsSync(configPath)) {
    log.error(`配置文件不存在,将自动生成配置文件,请重新填写配置`);
    fs.copySync(
      path.join(__dirname, "../templates/generateTypeBySwagger.json"),
      configPath
    );
    process.exit(1);
  }
  const { generateConfig } = require(configPath) as Config;
  const hasDuplicate = hasDuplicates(
    generateConfig.map((generateConfigItem) => generateConfigItem.dirName)
  );
  if (hasDuplicate) {
    log.error(`dirName不能重复,请重新填写配置`);
    process.exit(1);
  }
  return require(configPath) as Config;
};
export default getConfig;
