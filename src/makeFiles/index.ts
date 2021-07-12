import { outputFileSync } from "fs-extra";
import openapiTS from "openapi-typescript";
import getSchemaData from "../getSchemaData";
import path from "path";
import makeServiceFile from "../requestTemplateMaker";
import ejs from "ejs";
import { Config } from "../getConfig";
// 提取数组中数组项的类型
type ArrayItemType<T extends any[]> = T extends (infer U)[] ? U : never;

export default async ({
  dirName,
  swaggerUrl,
  dataMapping = "data",
  urlPrefix = "",
}: ArrayItemType<Config["generateConfig"]>) => {
  const schemaData = await getSchemaData(swaggerUrl);
  const openapiTSData = openapiTS(schemaData);
  // 生成请求类型
  outputFileSync(
    path.resolve(`src/services/${dirName}/types/request.d.ts`),
    openapiTSData
  );
  // 生成返回值类型  用于生成正确的枚举
  const responseTSData = openapiTSData.replace(
    /(?<=(\| |: |\())(".*?")/g,
    (text) => {
      return `
      {
        name: ${text};
        message: string;
        code: ${text};
      }`;
    }
  );
  outputFileSync(
    path.resolve(`src/services/${dirName}/types/response.d.ts`),
    responseTSData
  );
  // 生成工具泛型
  ejs.renderFile(
    path.join(__dirname, "../templates/generateTypeBySwagger.json"),
    { data: dataMapping },
    function (err, str) {
      if (err) {
        console.log(err);
      } else {
        outputFileSync(
          path.resolve(`src/services/${dirName}/types/serviceUtilGeneric.d.ts`),
          str
        );
      }
    }
  );
  makeServiceFile(urlPrefix, dirName, schemaData);
};
