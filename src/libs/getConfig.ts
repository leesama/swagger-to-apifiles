import colors from "colors";
import fs from "fs-extra";
import path from "path";

export interface Config {
  swaggerUrl: string;
  outDir: string;
}
const configPath = path.resolve("generateTypeBySwagger.json");
const getConfig = () => {
  if (!fs.existsSync(configPath)) {
    console.warn(
      colors.red(`配置文件不存在,将自动生成配置文件,请重新填写配置`)
    );
    fs.copySync(
      path.join(__dirname, "./generateTypeBySwagger.json"),
      configPath
    );
    process.exit(1);
  }
  return require(configPath) as Config;
};
export default getConfig;
