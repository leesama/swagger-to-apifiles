import path, { resolve } from "path";
import { outputFileSync, readJsonSync, writeJsonSync } from "fs-extra";
import { Schema } from "../data";
import getSchemaMap from "./getSchemaMap";
import { getTemplate } from "./getTemplate";
import setTemplatesToSchema from "./setTemplatesToSchema";
import { log } from "../utils";
import { typeHeadTemplate } from "./headTempalte";

/**
 * @description: 生成service请求文件
 */
const makeServiceFile = (
  urlPrefix: string,
  dirName: string,
  schema: Schema
) => {
  log.success("写入文件数据");
  // 获取根据controller名字构建的map
  const serviceMap = getSchemaMap(schema);
  // 将模板内容写入到Map中
  setTemplatesToSchema(urlPrefix, schema, serviceMap);
  const basePath = path.join(resolve("src"), `${dirName}`);

  // 遍历Map 将数据写入到service文件中
  serviceMap.forEach((value) => {
    if (value.fileName) {
      // 写入请求文件
      outputFileSync(
        `${basePath}\\${value.fileName}.js`,
        value.beforeTemplate + value.requestsTemplates.join("")
      );
      // 写入请求类型文件
      outputFileSync(
        `${basePath}\\${value.fileName}.d.ts`,
        typeHeadTemplate + value.typeTemplates.join("")
      );
    }
  });
  log.success("文件写入成功");
};
export default makeServiceFile;
