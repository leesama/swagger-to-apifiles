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

    outputFileSync(path.resolve(outDir), openapiTSData);
    /** 正则匹配出枚举数据用于工具泛型生成枚举类型 */
    const openapiTSDataSourceData = openapiTSData
      .replace(/[\r\n]/g, "")
      .replace(/\s+/g, "");
    const openapiEnumTSData = [
      ...new Set([
        ...(openapiTSDataSourceData.match(/(?<=(\?:\|)).*?"(?=;)/g) || []),
        ...(openapiTSDataSourceData.match(/(?<=(\?:))".*?"(?=;)/g) || []),
      ]),
    ]
      .map((i) => `(${i})`)
      .join("|");
    ejs.renderFile(
      path.join(__dirname, "./templates/type.ejs"),
      { data: openapiEnumTSData },
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
