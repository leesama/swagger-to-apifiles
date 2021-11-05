import { outputFileSync } from "fs-extra";
import openapiTS from "openapi-typescript";
import getSchemaData from "../getSchemaData";
import path from "path";
import makeServiceFile from "../requestTemplateMaker";
import ejs from "ejs";
import { Config } from "../config";
// 提取数组中数组项的类型
type ArrayItemType<T extends any[]> = T extends (infer U)[] ? U : never;

export default async ({
  dirName,
  swaggerUrl,
  urlPrefix = "",
}: ArrayItemType<Config["generateConfig"]>) => {
  const schemaData = await getSchemaData(swaggerUrl);

  makeServiceFile(urlPrefix, dirName, schemaData);
};
