#!/usr/bin/env node

import path from "path";
import { outputFileSync } from "fs-extra";
import openapiTS, { SchemaObject } from "openapi-typescript";
import getConfig from "./getConfig";
import makeServiceFile from "./requestTemplateMaker";
import getSchemaData from "./getSchemaData";
import ejs from "ejs";

async function main() {
  try {
    const { swaggerUrl: url, outDir, serviceFileDir } = getConfig();
    const schemaData = await getSchemaData(url);
    const openapiTSData = openapiTS(schemaData);
    // 生成请求类型
    outputFileSync(path.resolve(outDir), openapiTSData);
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
    outputFileSync(path.resolve("src/types/response.d.ts"), responseTSData);
    // 生成工具泛型
    ejs.renderFile(
      path.join(__dirname, "./templates/type.ejs"),
      function (err, str) {
        if (err) {
          console.log(err);
        } else {
          outputFileSync(
            path.resolve("src/types/serviceUtilGeneric.d.ts"),
            str
          );
        }
      }
    );
    if (serviceFileDir) {
      makeServiceFile(schemaData);
    }
  } catch (error) {
    console.log(error);
  }
}
main();
