import path from "path";
import { outputFileSync, readJsonSync, writeJsonSync } from "fs-extra";
import { Schema } from "../data";
import getSchemaMap from "./getSchemaMap";
import { getTemplate } from "./getTemplate";
import setTemplatesToSchema from "./setTemplatesToSchema";
import { log } from "../utils";

/**
 * @description: 生成service请求文件
 * @param {Schema} schema
 * @return {*}
 */
const makeServiceFile = (schema: Schema) => {
  log.success("写入文件数据");
  const serviceMap = getSchemaMap(schema);
  setTemplatesToSchema(schema, serviceMap);
  // 遍历Map 将数据写入到service文件中
  serviceMap.forEach((value) => {
    outputFileSync(
      value.filePath,
      value.beforeTemplate + value.requestsTemplates.join("")
    );
  });
  log.success("文件写入成功");
};
export default makeServiceFile;
